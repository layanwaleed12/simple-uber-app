import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>

      {/* Upcoming Section */}
      <Text style={styles.sectionTitle}>Upcoming</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="calendar" size={24} color="#007bff" style={styles.cardIcon} />
          <View>
            <Text style={styles.cardTitle}>You have no upcoming trips</Text>
            <Text style={styles.cardLink}>Reserve your ride →</Text>
          </View>
        </View>
      </View>

      {/* Past Section */}
      <Text style={styles.sectionTitle}>Past</Text>
      <View style={styles.pastSection}>
        <Icon name="history" size={24} color="#888" style={styles.pastIcon} />
        <Text style={styles.cardSubtitle}>You don't have any recent activity</Text>
      </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  cardLink: {
    fontSize: 14,
    color: '#007bff',
  },
  pastSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  pastIcon: {
    marginRight: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
});
