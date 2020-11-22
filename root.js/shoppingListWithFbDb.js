import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, FlatList, SnapshotViewIOS } from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
import { LogBox } from 'react-native';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDxDMSyKb1Bxt0J9gHRAg3-RTHekod9Sv0",
    authDomain: "shopping-list-4cded.firebaseapp.com",
    databaseURL: "https://shopping-list-4cded.firebaseio.com",
    projectId: "shopping-list-4cded",
    storageBucket: "shopping-list-4cded.appspot.com",
    messagingSenderId: "774902064864",
    appId: "1:774902064864:web:a2201b1afe24ef62949285",
    measurementId: "G-86MNSH0TTN"
  };
  // Initialize Firebase
  const db = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const ShoppingListWithFbDb = () => {;
    const [product, setProduct] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [list, setList] = React.useState([]);

    LogBox.ignoreLogs(['Setting a timer']);

    React.useEffect(() => {
      updateList();
    }, []); 

    const saveProduct = () => {
      db.database().ref('items/').push({
        'product': product, 'amount': amount});
      }

    const updateList = () => {
      db.database().ref('items/').on('value', snapshot => {
        if(snapshot.exists()) {
        const data = snapshot.val();
        const prods = Object.entries(data);
        console.log(prods);
        setList(prods);
      } else {
        setList(null);
      }
      });
    }
  
    const deleteProduct = (id) => {
      db.database().ref(`items/${id}`).remove();
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
        <FlatList data={list} keyExtractor={item => item[0]} renderItem={({item}) => 
          <View style={[styles.history, styles.items]}>
            <Text key={item[0]} style={styles.textitem}>{item[1].product}, {item[1].amount} </Text>
            <Text style={[styles.textitem, styles.actionitem]}  onPress={() => deleteProduct(item[0])}>
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

export default ShoppingListWithFbDb;