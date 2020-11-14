import React from 'react';
import {Picker} from '@react-native-picker/picker';
import { TextInput, StyleSheet, Text, View, Button, FlatList, Image, Alert } from 'react-native';

const EuroConverter = () => {
    const [currencies, setCurrencies] = React.useState({});
    const [value, setValue] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [euro, setEuro] = React.useState('');


    const url = 'https://images.assetsdelivery.com/compings_v2/lara2016/lara20161912/lara2016191200093.jpg'; 

    React.useEffect(() => { 
        fetch(`https://api.exchangeratesapi.io/latest`)
            .then(response => response.json())
            .then(data => {
                setCurrencies(data.rates);
            })
            .catch((error) => { 
                Alert.alert('Error', error); 
            }); 
    }, [] 
    );

    const convert = () => {
        const euro = parseInt(amount) / value;
        setEuro(euro.toFixed(2));
    } 

    return (
    <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Image style={styles.tinyLogo} source={{uri: url}}></Image>
            <Text>{euro} {'\u20AC'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
       <TextInput   style={{ height: 20, width: 80, borderColor: 'gray', borderWidth: 1, marginTop: 15 }}
                    onChangeText={amount => setAmount(amount)}
                    keyboardType='numeric'/>
        <Picker selectedValue={value} style={{height: 50, width: 100}}  
                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
            {Object.entries(currencies).map(([key, value]) => 
               <Picker.Item key={key} label={key} value={value} /> )}
        </Picker>
        </View>
        <View style={{width: 100, height: 50, marginTop: 10}}>
            <Button onPress={convert} title="Convert"/>
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
    tinyLogo: {
        width: 80,
        height: 80,
    },
});

export default EuroConverter;