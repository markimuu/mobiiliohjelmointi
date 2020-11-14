import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, FlatList, Image, Alert } from 'react-native';

const ItemSeparator =  () => {
    return (
        <View style={{
          height: 1,
          width: '80%',
          borderColor: 'gray', 
          borderWidth: 1
        }}
      />
    );
}


const RecipeFinder = () => {
    const [ingredient, setIngredient] = React.useState();
    const [recipes, setRecipes] = React.useState([]);

    const getRecipies = () => {
        fetch(`http://www.recipepuppy.com/api/?i=${ingredient}`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data.results);
            })
            .catch((error) => { 
                Alert.alert('Error', error); 
            }); 
        }
    
    return (
    <View style={{flex: 1}}>
        <View style={{justifyContent: 'flex-start', padding: 10, marginTop: 10, flex: 4}}>
          <FlatList data={recipes} ItemSeparatorComponent={ItemSeparator} renderItem={({item}) => (
            <View>  
            <Text key={item.title}>{item.title}</Text>
            <Image style={styles.tinyLogo} source={{uri: item.thumbnail}} /> 
            </View>)}
        />
        </View>
    <View style={styles.container}>
       <TextInput   style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setIngredient(text)}
                    keyboardType='default'/>
        <View style={{width: 100, height: 50, marginTop: 10}}>
            <Button onPress={getRecipies} title="Find"/>
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
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default RecipeFinder;