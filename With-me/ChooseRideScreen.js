import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // استيراد مكتبة الأيقونات

export default function ChooseRideScreen({ route }) {
  const { selectedLocation } = route.params;

  const rides = [
    { id: '1', title: 'Comfort', price: 'SAR 82.91', time: '7 min away', seats: 4 },
    { id: '2', title: 'UberXL', price: 'SAR 79.80', time: '12 min away', seats: 6 },
    { id: '3', title: 'Black', price: 'SAR 110.99', time: '5 min away', seats: 4 },
    { id: '4', title: 'UberX Saver', price: 'SAR 57.95', time: '10 min away', seats: 4 },
  ];

  const renderRide = ({ item }) => (
    <TouchableOpacity style={styles.rideItem}>
      <View style={styles.rideInfo}>
        <Icon name="car" size={30} color="#007bff" style={styles.rideIcon} />
        <View>
          <Text style={styles.rideTitle}>{item.title}</Text>
          <Text>{`${item.time} • ${item.seats} seats`}</Text>
        </View>
      </View>
      <Text style={styles.ridePrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a ride</Text>
      <FlatList
        data={rides}
        renderItem={renderRide}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  list: { marginTop: 10 },
  rideItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  rideInfo: { flexDirection: 'row', alignItems: 'center' },
  rideIcon: { marginRight: 15 },
  rideTitle: { fontSize: 18, fontWeight: 'bold' },
  ridePrice: { fontSize: 16, fontWeight: 'bold', color: '#007bff' },
});
