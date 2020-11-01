import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, FlatList } from 'react-native';


const ShoppingList = () => {;
    const [text, setText] = React.useState();
    const [history, setHistory] = React.useState([]);

    const add = () => {
        setHistory([...history, {key: text}])
    };

    const clear = () => {
        setHistory([])
    };

    return (
      <View style={styles.container}>
        <View style={styles.main}>
        <TextInput
         style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => setText(text)}
         keyboardType='default'
        />
        <View style={styles.buttons}>
            <View style={{width: 50, height: 50}}>
            <Button onPress={add} title="Add"/>
            </View>
            <View style={{width: 80, height: 50}}>
            <Button onPress={clear} title="Clear"/>
            </View>
        </View>
        </View>
        <View style={styles.history}>
        <Text style={{color: 'blue'}}>Shopping List</Text>
        <FlatList data={history} renderItem={({item}) => 
            <Text>{item.key}</Text>}
        />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20, 
    },
    main: {
      flex: 1,
      marginTop: 100,
    },
    history: {
      flex: 2,
      margin: 'auto'
    }
});

export default ShoppingList;