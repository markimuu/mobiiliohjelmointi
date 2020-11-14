import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, TextInput, Dimensions} from 'react-native';


const FindAddress = () => {
    const [address, setAddress] = React.useState();
    const [coords, setCoords] = React.useState({latitude: 0, longitude: 0, title: ""});
 
    const init = () => {
        setCoords({latitude: 60.200692, longitude: 24.934302, title: "Haaga-Helia"})
    }

    React.useEffect(() => {
        init();
    }, [])

    const getAddress = () => {
        fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`)
            .then(response => response.json())
            .then(data => {
                let lat = data[0].lat;
                let lon = data[0].lon;
                let title = data[0].display_name;
                let oneTitle = title.split(",");
                setCoords({latitude: Number(lat), longitude: Number(lon), title: oneTitle[0]});
            })
            .catch((error) => { 
                Alert.alert('Error', error); 
            }); 
    }


    return (
    <View style={styles.container}>
        <MapView region={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221}} 
            style={styles.map}>
         <Marker coordinate={{latitude: coords.latitude, longitude: coords.longitude}} title={coords.title}/>
        </MapView>
        <TextInput style={{  
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height, 
            borderColor: 'gray', 
            borderWidth: 1, 
            flex: 1 }}
            onChangeText={text => setAddress(text)}
            keyboardType='default'/>
        <Button onPress={getAddress} title="Show"></Button>
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
    map: {
        flex: 10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    window: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default FindAddress;