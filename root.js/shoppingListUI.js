import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
import { LogBox } from 'react-native';
import { Header, Icon, Input, Button, ListItem } from 'react-native-elements';

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


const ShoppingListUI = () => {;
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
        <Header centerComponent={{ text:'SHOPPING LIST', style: {color: '#fff'} }} />
        <View style={styles.main}>
        <Input
            containerStyle={{}}
            inputContainerStyle={{}}
            inputStyle={{}}
            label="Product"
            leftIcon={<Icon name="local-grocery-store" size={20} />}
            placeholder="Enter Product"
         onChangeText={text => setProduct(text)}
        />
        <Input
         containerStyle={{}}
         leftIcon={<Icon name="plus-one" size={20} />}
         onChangeText={text => setAmount(text)}
         label="Amount"
         placeholder='Enter Amount'
        />
        <View style={{alignItems: 'center'}}>
        <Button buttonStyle={{}} containerStyle={{ margin: 1, width: 300 }} onPress={saveProduct} raised icon={<Icon name="save" size={25} color="#fff" marginRight={5} />} title="Save"/>
        </View>
        </View>
        <FlatList data={list} keyExtractor={item => item[0]} renderItem={({item}) => 
        <View>
          <ListItem key={item[0]} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item[1].product}</ListItem.Title>
              <ListItem.Subtitle>{item[1].amount}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron name="delete" size={25} color='red' onPress={() => deleteProduct(item[0])}/>
          </ListItem>
        </View> }
        />
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    main: {
      marginTop: 10
    },
    history: {
      flex: 10,
      width: 400,
      height: 100,
    },
});

export default ShoppingListUI;