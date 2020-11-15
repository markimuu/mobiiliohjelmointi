import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, TextInput, Dimensions, Alert} from 'react-native';


const RestaurantFinder = () => {
    const [address, setAddress] = React.useState("");
    const [coords, setCoords] = React.useState({latitude: 60.200692, longitude: 24.934302, title: "Haaga-Helia"});
    const [restas, setRestas] = React.useState([]);
 
    const init = () => {
        fetch(`https://places.demo.api.here.com/places/v1/discover/explore?in=${coords.latitude}%2C${coords.longitude}%3Br%3D500&cat=eat-drink&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg#`)
        .then(response => {
            setTimeout(() => null, 0);
            return response.json()})
        .then(data => {
            setRestas(data.results.items);
        })
        .catch((error) => { 
            Alert.alert('Error', error); 
        }); 
    }

    React.useEffect(() => {
        init();
    }, []);

    const getAddress = async () => {
        try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`);
        const json = await response.json();
        const data = json;
                let lat = data[0].lat;
                let lon = data[0].lon;
                let title = data[0].display_name;
                let oneTitle = title.split(",");
                setCoords({latitude: Number(lat), longitude: Number(lon), title: oneTitle[0]});
                setRestas([]);
        const response2 = await fetch(`https://places.demo.api.here.com/places/v1/discover/explore?in=${coords.latitude}%2C${coords.longitude}%3Br%3D500&cat=eat-drink&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg#`);
        const json2 = await response2.json();
        const data2 = json2;    
        setRestas(data2.results.items);
        } catch (error) {
            console.log(error);
        }
    }   

    return (
    <View style={styles.container}>
        <MapView region={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221}} 
            style={styles.map}>
        {restas && restas.map((rest, i) => (
                <Marker key={i} coordinate={{latitude: rest.position[0], longitude: rest.position[1]}} 
                title={rest.title} description={`${rest.address.street} ${rest.address.house}, ${rest.address.district}`}/> ))}
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

export default RestaurantFinder;