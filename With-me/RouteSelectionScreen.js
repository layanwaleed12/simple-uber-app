import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function RouteSelectionScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { carInfo, currentLocation } = route.params;
  const [destination, setDestination] = useState(null);
  const [searching, setSearching] = useState(false);

  const handleConfirm = () => {
    if (!destination) {
      Alert.alert('Error', 'Please select your destination on the map');
      return;
    }

    setSearching(true);
    // Simulate searching for passengers
    setTimeout(() => {
      Alert.alert(
        'Searching for Passengers',
        'Looking for passengers nearby...',
        [
          {
            text: 'OK',
            onPress: () => {
              setSearching(false);
              navigation.navigate('Dashboard');
            },
          },
        ]
      );
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Destination</Text>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          onPress={(e) => setDestination(e.nativeEvent.coordinate)}
        >
          {/* Current Location Marker */}
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            pinColor="blue"
            title="Your Location"
          />

          {/* Destination Marker */}
          {destination && (
            <Marker
              coordinate={destination}
              pinColor="red"
              title="Destination"
            />
          )}
        </MapView>
      </View>

      <View style={styles.footer}>
        <Text style={styles.instructions}>
          Tap on the map to select your destination
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={handleConfirm}
          disabled={searching}
        >
          {searching ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Confirm & Find Passengers</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  mapContainer: {
    flex: 1,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  footer: {
    padding: 20,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
