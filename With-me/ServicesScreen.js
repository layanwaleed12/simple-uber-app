import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const servicesData = [
  {
    id: '1',
    title: 'Ride',
    description: 'Go anywhere, anytime',
    icon: 'car', // أيقونة FontAwesome
  },
  {
    id: '2',
    title: 'Reserve',
    description: 'Book ahead, travel relaxed',
    icon: 'calendar', // أيقونة FontAwesome
  },
  {
    id: '3',
    title: 'Teens',
    description: 'Safe rides for teens',
    icon: 'user', // أيقونة FontAwesome
  },
];

export default function ServicesScreen() {
  const renderServiceItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Icon name={item.icon} size={40} color="#007bff" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.subtitle}>Go anywhere, get anything</Text>
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  list: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 15,
    width: 100, // عرض البطاقة
    height: 120, // ارتفاع البطاقة
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});
