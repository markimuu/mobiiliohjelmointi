import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
//import Calculator from './root.js/Calculator';
//import NumberGuessingGame from './root.js/numberGuessingGame';
import CalculatorWithHistory from './root.js/calculatorWithHistory';

export default function App() {
  return (
    <CalculatorWithHistory />
  );
}

/* <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
