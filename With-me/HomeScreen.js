import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Get ready to drive with us</Text>
      <Text style={styles.subheader}>Drive with Uber. Earn on your schedule.</Text>

      {/* Illustration */}
      <Image
        source={require('../assets/Image.png')} // تأكد أن الملف موجود في المسار الصحيح
        style={styles.image}
      />

      {/* Buttons */}
      <View style={styles.buttons}>
        <Button title="Sign up now" onPress={() => alert('Sign up clicked')} />
        <Button title="Log in" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
