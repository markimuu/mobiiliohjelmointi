import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

const ContactList = () => {

  const [contacts, setContacts] = React.useState([]);
  
  const getContacts = async () => {
    const{ status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        setContacts(data)
        console.log(data);
        console.log(data[0].phoneNumbers[0].number)
      }
    }
  }

    return (
      <View style={styles.container}>
        <Text>Contacts</Text>
        <FlatList data={contacts} renderItem={({item}) => 
            <Text>{item.name}, {item.phoneNumbers[0].number}</Text>}
        />
        <View style={styles.button}>
            <Button onPress={getContacts} title="Get Contacts"/>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
      width: 200, 
      height: 50,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'flex-end',
    }
});

export default ContactList;