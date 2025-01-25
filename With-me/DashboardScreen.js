import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [carInfo, setCarInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState('Fetching location...');
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
        setSelectedLocation(currentLocation.coords);
        setErrorMsg(null);
      } catch (error) {
        setErrorMsg('Unable to fetch location');
      }
    })();
  }, []);

  const handleConfirmLocation = () => {
    navigation.navigate('LocationSelectionScreen', {
      onLocationConfirm: (location) => {
        if (!location) {
          Alert.alert('Error', 'Please select a location on the map.');
          return;
        }
        setSelectedLocation(location);
        navigation.navigate('ChooseRideScreen', { carInfo, selectedLocation: location });
      },
    });
  };

  const handleRegisterCar = () => {
    navigation.navigate('CarRegistrationScreen', {
      onCarInfoSubmit: (info) => {
        if (!info) {
          Alert.alert('Error', 'Car information is required.');
          return;
        }
        setCarInfo(info);
        navigation.navigate('LocationSelectionScreen', {
          onLocationConfirm: (location) => {
            if (!location) {
              Alert.alert('Error', 'Location is required.');
              return;
            }
            setSelectedLocation(location);
            navigation.navigate('LookForPassenger', {
              carInfo: info,
              selectedLocation: location,
              onPassengerConfirm: () => {
                navigation.navigate('DashboardScreen', { carInfo: info });
              },
            });
          },
        });
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Uber</Text>
        <Text style={styles.subtitle}>
          {selectedLocation
            ? `Lat: ${selectedLocation.latitude.toFixed(2)}, Lon: ${selectedLocation.longitude.toFixed(2)}`
            : errorMsg}
        </Text>
      </View>

      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          onPress={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
        >
          <Marker
            coordinate={{
              latitude: selectedLocation?.latitude || location.latitude,
              longitude: selectedLocation?.longitude || location.longitude,
            }}
            draggable
            onDragEnd={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
          />
        </MapView>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmLocation}>
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeSelectionButton} onPress={handleRegisterCar}>
          <Text style={styles.routeSelectionButtonText}>Register Your Car</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', paddingHorizontal: 20, paddingTop: 20 },
  header: { alignItems: 'center', marginBottom: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 16, color: '#555', marginTop: 5 },
  map: { height: 300, borderRadius: 15, marginBottom: 20 },
  buttonContainer: { gap: 15 },
  confirmButton: { backgroundColor: '#28a745', borderRadius: 10, paddingVertical: 15, alignItems: 'center' },
  confirmButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  routeSelectionButton: { backgroundColor: '#007bff', borderRadius: 10, paddingVertical: 15, alignItems: 'center' },
  routeSelectionButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
