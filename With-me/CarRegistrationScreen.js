import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

export default function CarRegistrationScreen() {
  const navigation = useNavigation();
  const [carInfo, setCarInfo] = useState({
    plateNumber: '',
    color: '',
    brand: '',
    model: '',
  });

  const handleSubmit = async () => {
    // Validate all fields are filled
    if (!Object.values(carInfo).every(value => value.trim())) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Get current location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Error', 'Location permission is required');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    
    // Navigate to destination selection screen
    navigation.navigate('RouteSelection', {
      carInfo,
      currentLocation: currentLocation.coords,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register Your Car</Text>
      
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>License Plate Number</Text>
          <TextInput
            style={styles.input}
            value={carInfo.plateNumber}
            onChangeText={(text) => setCarInfo({ ...carInfo, plateNumber: text })}
            placeholder="Enter plate number"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Car Color</Text>
          <TextInput
            style={styles.input}
            value={carInfo.color}
            onChangeText={(text) => setCarInfo({ ...carInfo, color: text })}
            placeholder="Enter car color"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Car Brand</Text>
          <TextInput
            style={styles.input}
            value={carInfo.brand}
            onChangeText={(text) => setCarInfo({ ...carInfo, brand: text })}
            placeholder="Enter car brand"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Car Model</Text>
          <TextInput
            style={styles.input}
            value={carInfo.model}
            onChangeText={(text) => setCarInfo({ ...carInfo, model: text })}
            placeholder="Enter car model"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
