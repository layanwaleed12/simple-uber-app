import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>

      {/* Topics */}
      <TouchableOpacity style={styles.topicItem}>
        <Icon name="list-alt" size={20} color="#555" />
        <Text style={styles.topicText}>Help with a trip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.topicItem}>
        <Icon name="user" size={20} color="#555" />
        <Text style={styles.topicText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.topicItem}>
        <Icon name="info-circle" size={20} color="#555" />
        <Text style={styles.topicText}>A guide to Uber</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.topicItem}>
        <Icon name="wheelchair" size={20} color="#555" />
        <Text style={styles.topicText}>Accessibility</Text>
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
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topicText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
});
