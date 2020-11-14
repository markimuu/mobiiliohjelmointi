import React from 'react';
import { StyleSheet, View, Button } from 'react-native';


const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={{alignItems:'center', flexDirection: 'row'}}>
      <View style={{width: 50, height: 50, margin: 5}}>
          <Button onPress={() => navigation.navigate('Calculator')} title="1"/>
      </View>
      <View style={{width: 50, height: 50, margin: 5}}>
          <Button onPress={() => navigation.navigate('NumberGuessingGame')} title="2"/>
      </View>
      <View style={{width: 50, height: 50, margin: 5}}>
          <Button onPress={() => navigation.navigate('CalculatorWithHistory')} title="3"/>
      </View>
      <View style={{width: 50, height: 50, margin: 5}}>
          <Button onPress={() => navigation.navigate('ShoppingList')} title="4"/>
      </View>
      <View style={{width: 50, height: 50, margin: 5}}>
          <Button onPress={() => navigation.navigate('CalculatorPage', {screen: 'CalculatorPage'})} title="5"/>
      </View>
    </View>
    <View style={{alignItems:'center', flexDirection: 'row'}}>
      <View style={{width: 50, height: 50, margin: 5}}>
          <Button onPress={() => navigation.navigate('RecipeFinder')} title="6"/>
      </View>
      <View style={{width: 50, height: 50, margin: 5}}>
          <Button onPress={() => navigation.navigate('EuroConverter')} title="7"/>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;