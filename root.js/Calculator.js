import React from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';


const Calculator = () => {
    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);
    const [result, setResult] = React.useState(0);

    const buttonPressedPlus = () => {
        var sum = parseInt(number1) + parseInt(number2);
        setResult(sum)
    };

    const buttonPressedMinus = () => {
        var substract = parseInt(number1) - parseInt(number2);
        setResult(substract)
    };

    return (
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <TextInput
         style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={num => setNumber1(num)}
         keyboardType='numeric'
        />
        <TextInput
         style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={num => setNumber2(num)}    
         keyboardType='numeric'
        />
        <View style={styles.buttons}>
            <View style={{marginRight: 25, width: 50, height: 50}}>
            <Button onPress={buttonPressedPlus} title="+"/>
            </View>
            <View style={{width: 50, height: 50}}>
            <Button onPress={buttonPressedMinus} title="-"/>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20, 
    },
});

export default Calculator;