import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import Calculator from './root.js/calculator';
import NumberGuessingGame from './root.js/numberGuessingGame';
import CalculatorWithHistory from './root.js/calculatorWithHistory';
import ShoppingList from './root.js/shoppingList';
import CalculatorPage from './root.js/multiPageCalculator/calculatorPage';
import HistoryPage from './root.js/multiPageCalculator/historyPage';
import RecipeFinder from './root.js/recipeFinder';
import EuroConverter from './root.js/euroConverter';
import FindAddress from './root.js/findAddress';
import RestaurantFinder from './root.js/restaurantFinder';
import AddressLocation from './root.js/addressLocation';
import ShoppingListDb from './root.js/shoppingListWithSqlDb';
import ShoppingListFbDb from './root.js/shoppingListWithFbDb';
import Contacts from './root.js/contacts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="NumberGuessingGame" component={NumberGuessingGame} />
      <Stack.Screen name="CalculatorWithHistory" component={CalculatorWithHistory} />
      <Stack.Screen name="HistoryPage" component={HistoryPage} />
      <Stack.Screen name="ShoppingList" component={ShoppingList} />
      <Stack.Screen name="CalculatorPage" component={CalculatorPage} />
      <Stack.Screen name="RecipeFinder" component={RecipeFinder} />
      <Stack.Screen name="EuroConverter" component={EuroConverter} />
      <Stack.Screen name="FindAddress" component={FindAddress} />
      <Stack.Screen name="RestaurantFinder" component={RestaurantFinder} />
      <Stack.Screen name="AddressLocation" component={AddressLocation} />
      <Stack.Screen name="ShoppingListDb" component={ShoppingListDb} />
      <Stack.Screen name="ShoppingListFbDb" component={ShoppingListFbDb} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  </NavigationContainer>
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
