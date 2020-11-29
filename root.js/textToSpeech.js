import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

const TextSpeech = () => {

  const [text, setText] = React.useState("Default");
  
  const speak = () => {
    Speech.speak(text, {language: 'en'});
  }

    return (
      <View style={styles.container}>
        <TextInput  style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 15 }}
                    onChangeText={text => setText(text)}
                    keyboardType='default'/>
        <View style={styles.button}>
            <Button onPress={speak} title="Press to hear text"/>
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
    button: {
      width: 200, 
      height: 50,
      marginTop: 10
    }
});

export default TextSpeech;