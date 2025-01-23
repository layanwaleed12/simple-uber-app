
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LottieView from 'lottie-react-native'; // Import Lottie for animation

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Get ready to drive with us</Text>
      <Text style={styles.subheader}>Drive with Uber. Earn on your schedule.</Text>

      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/animations/carAnimation.json')} // Path to your Lottie JSON animation
        autoPlay
        loop
        style={styles.animation}
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
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  animation: {
    width: 300, // Adjust width
    height: 300, // Adjust height
    marginBottom: 20,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

