import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorPage from './calculatorPage';
import HistoryPage from './historyPage';


const Stack = createStackNavigator();

const Index = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CalculatorPage">
          <Stack.Screen name="CalculatorPage" component={CalculatorPage} />
          <Stack.Screen name="HistoryPage" component={HistoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
 };

export default Index;