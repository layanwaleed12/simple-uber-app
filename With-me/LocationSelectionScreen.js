import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function LocationSelectionScreen({ route, navigation }) {
  const { carInfo } = route.params;
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleConfirm = () => {
    if (!selectedLocation) {
      alert('Please select a location first.');
      return;
    }
    navigation.navigate('LookForPassenger', { carInfo, selectedLocation }); // الانتقال إلى LookForPassenger مع البيانات
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Location</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  map: { flex: 1, borderRadius: 10, marginBottom: 20 },
  confirmButton: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  confirmButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
