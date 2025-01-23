import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>

      {/* Uber Cash */}
      <View style={styles.walletCard}>
        <Text style={styles.walletText}>Uber Cash</Text>
        <Text style={styles.walletAmount}>SAR 0.00</Text>
      </View>

      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>Payment methods</Text>
      <TouchableOpacity style={styles.optionItem}>
        <Icon name="apple" size={20} color="#555" />
        <Text style={styles.optionText}>Apple Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <Icon name="money" size={20} color="#555" />
        <Text style={styles.optionText}>Cash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <Icon name="plus" size={20} color="#555" />
        <Text style={styles.optionText}>Add payment method</Text>
      </TouchableOpacity>

      {/* Ride Profiles */}
      <Text style={styles.sectionTitle}>Ride Profiles</Text>
      <TouchableOpacity style={styles.optionItem}>
        <Icon name="user" size={20} color="#555" />
        <Text style={styles.optionText}>Personal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  walletCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  walletText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  walletAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
});
