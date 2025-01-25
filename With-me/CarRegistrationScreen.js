import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CarRegistrationScreen({ route, navigation }) {
  const { selectedLocation } = route.params; // استلام الموقع المحدد
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [carColor, setCarColor] = useState('');
  const [seats, setSeats] = useState(4);

  const handleSubmit = () => {
    if (!carBrand || !carModel || !plateNumber || !carColor) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const carInfo = { carBrand, carModel, plateNumber, carColor, seats, selectedLocation };
    navigation.navigate('LookForPassenger', { carInfo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Your Car</Text>
      <TextInput style={styles.input} placeholder="Car Brand" value={carBrand} onChangeText={setCarBrand} />
      <TextInput style={styles.input} placeholder="Car Model" value={carModel} onChangeText={setCarModel} />
      <TextInput style={styles.input} placeholder="Plate Number" value={plateNumber} onChangeText={setPlateNumber} />
      <TextInput style={styles.input} placeholder="Car Color" value={carColor} onChangeText={setCarColor} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { backgroundColor: '#f2f2f2', padding: 15, marginBottom: 15, borderRadius: 10 },
  button: { backgroundColor: '#007bff', padding: 15, alignItems: 'center', borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
