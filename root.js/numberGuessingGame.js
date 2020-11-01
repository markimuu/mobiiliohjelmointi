import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, Alert } from 'react-native';

const NumberGuessingGame = () => {
    const [random, setRandom] = React.useState();
    const [count, setCount] = React.useState(1);
    const [number, setNumber] = React.useState(0);
    const [text, setText] = React.useState('Guess a number between 1-100')

    React.useEffect(() => {
        setRandom(Math.floor(Math.random() * 100 + 1))
    }, []);

    const buttonPressed = () => {
        if(number == random) {     
            Alert.alert("You guessed the number in " + count + " guesses."); 
        } 
        else if(number > random) {     
            setCount(count + 1); 
            setText('Your guess ' + number + ' is too high' );
        } 
        else if(number < random) { 
            setCount(count + 1); 
            setText('Your guess ' + number + ' is too low'); 
        }  
    };

    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 5}}>{text}</Text>
        <TextInput
         style={{ height: 20, width: 50, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={num => setNumber(num)}
         keyboardType='numeric'
        />
        <View style={styles.buttons}>
            <View style={{width: 200, height: 50}}>
            <Button onPress={buttonPressed} title="Make Guess"/>
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
        marginTop: 15, 
    },
});

export default NumberGuessingGame;