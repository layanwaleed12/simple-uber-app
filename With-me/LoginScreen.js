


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { database, ref, set } from './Firebase'; // Import Firebase setup

export default function LoginScreen({ navigation, setUsername }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Check if any field is empty
    if (!email.trim() || !phoneNumber.trim() || !password.trim()) {
      Alert.alert('Error', 'All fields must be filled.');
      return;
    }

    // Validate phone number (must be numeric and exactly 10 digits)
    if (!/^\d{10}$/.test(phoneNumber)) {
      Alert.alert('Error', 'Phone number must be exactly 10 numeric digits.');
      return;
    }

    try {
      // Save user data to Firebase Realtime Database
      await set(ref(database, `users/${phoneNumber}`), {
        email,
        phoneNumber,
        password,
        createdAt: new Date().toISOString(),
      });

      Alert.alert('Success', 'User data saved successfully!');

      // Set the username and navigate to MainTabs
      setUsername(email);
      navigation.navigate('MainTabs');
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Error', 'Failed to save user data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number (10 digits)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={(text) => {
          const numericText = text.replace(/[^0-9]/g, ''); // Allow only numbers
          setPhoneNumber(numericText);
        }}
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" color="#007bff" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007bff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#aaa',
  },
});









