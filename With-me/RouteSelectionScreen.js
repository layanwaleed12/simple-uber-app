import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function RouteSelectionScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { carInfo } = route.params;
  const [destination, setDestination] = useState(null);

  const handleConfirm = () => {
    if (!destination) {
      Alert.alert('Error', 'Please select your destination');
      return;
    }

    navigation.navigate('LookForPassenger', {
      carInfo,
      selectedLocation: destination,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Destination</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={(e) => setDestination(e.nativeEvent.coordinate)}
      >
        {destination && <Marker coordinate={destination} pinColor="red" title="Destination" />}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm Destination</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  map: { flex: 1, marginBottom: 20 },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
