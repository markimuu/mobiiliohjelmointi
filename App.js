import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
import Calculator from './root.js/Calculator';

export default function App() {
  return (
    <Calculator></Calculator>
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
