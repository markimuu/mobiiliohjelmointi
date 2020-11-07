import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, FlatList } from 'react-native';


const CalculatorHistory = ({navigation}) => {
    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);
    const [result, setResult] = React.useState(0);
    const [history, setHistory] = React.useState([]);

    const buttonPressedPlus = () => {
        var sum = parseInt(number1) + parseInt(number2);
        setResult(sum)
        setHistory([...history, {key: number1 + " + " + number2 + " = " + sum}])
    };

    const buttonPressedMinus = () => {
        var substract = parseInt(number1) - parseInt(number2);
        setResult(substract)
        setHistory([...history, {key: number1 + " - " + number2 + " = " + substract}])
    };

    return (
      <View style={styles.container}>
        <View style={styles.main}>
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
            <View style={{marginRight: 5, width: 50, height: 50}}>
            <Button onPress={buttonPressedPlus} title="+"/>
            </View>
            <View style={{marginRight: 5, width: 50, height: 50}}>
            <Button onPress={buttonPressedMinus} title="-"/>
            </View>
            <View style={{width: 100, height: 50}}>
            <Button onPress={() => navigation.navigate('HistoryPage', {history})} title="History"/>
            </View>
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
        marginTop: 20, 
    },
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default CalculatorHistory;