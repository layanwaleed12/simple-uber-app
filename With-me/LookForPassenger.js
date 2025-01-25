import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

export default function LookForPassenger({ route, navigation }) {
  const { carInfo, selectedLocation } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      Alert.alert('Passenger Found!', 'A passenger has been assigned to you.');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleGoBackToDashboard = () => {
    navigation.navigate('DashboardScreen', { carInfo, selectedLocation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Looking for a Passenger...</Text>
      <ActivityIndicator size="large" color="#007bff" />
      <TouchableOpacity style={styles.button} onPress={handleGoBackToDashboard}>
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    marginTop: 20,
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
