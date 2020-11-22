import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('shoppingList.db');


const ShoppingListWithDb = () => {;
    const [product, setProduct] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
      db.transaction(tx => {
        tx.executeSql('create table if not exists shop_list (id integer primary key not null, product text, amount text);');
      });
      updateList();
    }, []);

    const saveProduct = () => {
      db.transaction(tx => {
        tx.executeSql('insert into shop_list (product, amount) values (?, ?);', [product, amount]);
      }, null, updateList
      )
    }

    const updateList = () => {
      db.transaction(tx => {
        tx.executeSql('select * from shop_list;', [], (_, { rows }) =>
          setList(rows._array)
        );
      });
    }
  
    const deleteProduct = (id) => {
      db.transaction(
        tx => {
          tx.executeSql(`delete from shop_list where id = ?;`, [id]);
        }, null, updateList
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.main}>
        <TextInput
         style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => setProduct(text)}
         placeholder='Product'
         keyboardType='default'
        />
        <TextInput
         style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => setAmount(text)}
         placeholder='Amount'
         keyboardType='default'
        />
        <View style={styles.buttons}>
            <Button onPress={saveProduct} title="Save"/>
        </View>
        </View>
        <Text style={{color: 'red'}}>Shopping List</Text>
        <FlatList data={list} keyExtractor={item => item.id.toString()} renderItem={({item}) => 
          <View style={[styles.history, styles.items]}>
            <Text style={styles.textitem}>{item.product}, {item.amount} </Text>
            <Text style={[styles.textitem, styles.actionitem]} onPress={() => deleteProduct(item.id)}>
              Bought
            </Text>
          </View>}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: Constants.statusBarHeight,
    },
    buttons: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 18,
      borderColor: 'gray',
      borderWidth: 1
    },
    main: {
      marginTop: 10
    },
    history: {
      flex: 10,
    },
    textitem: {
      fontSize: 18
    },
    actionitem: {
      color: 'blue'
    }, 
    items: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    }
});

export default ShoppingListWithDb;