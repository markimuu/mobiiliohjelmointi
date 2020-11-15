import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, TextInput, Dimensions, Alert} from 'react-native';
import * as Location from 'expo-location';


const AddressLocation = () => {
    const [location, setLocation] = React.useState(null);
    const [address, setAddress] = React.useState();
    const [coords, setCoords] = React.useState(null);

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

    const getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("Ei lupaa paikannukselle")
        } else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }
    };

    console.log(location)

    React.useEffect(() => {
        getLocation();
    }, [] );



    if (location == null) {
        return null;
    } else {
        return (
    <View style={styles.container}>
        {coords ? 
        <MapView region={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221}} 
            style={styles.map}>
        
        <Marker coordinate={{latitude: coords.latitude, longitude: coords.longitude}} title={coords.title}/> 
        </MapView> :
        location ?
        <MapView region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221}} 
            style={styles.map}>
        
        <Marker coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}} title={"Olet tässä"}/> 
        </MapView> :
        null
        }
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
}

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

export default AddressLocation;