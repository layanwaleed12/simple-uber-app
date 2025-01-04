import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation, setUsername }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if any field is empty
    if (!email.trim() || !phoneNumber.trim() || !password.trim()) {
      Alert.alert('Error', 'All fields must be filled.');
      return;
    }

    // Validate password (must be 10 digits)
    const passwordRegex = /^\d{10}$/; // Regular expression for exactly 10 numeric digits
    if (!passwordRegex.test(password)) {
      Alert.alert('Error', 'Password must be 10 numeric digits.');
      return;
    }

    // Set the username and navigate if all fields are valid
    setUsername(email);
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password (10 digits)"
        placeholderTextColor="#aaa"
        keyboardType="numeric" // Ensures only numbers can be entered
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        maxLength={10} // Restrict input to 10 characters
      />

      {/* Login Button */}
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
























// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// export default function LoginScreen({ navigation, setUsername }) {
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (email.trim()) {
//       setUsername(email); // تخزين البريد الإلكتروني كاسم المستخدم
//     } else if (phoneNumber.trim()) {
//       setUsername(phoneNumber); // تخزين رقم الهاتف كاسم المستخدم
//     } else {
//       setUsername('Guest User'); // في حال لم يُدخل المستخدم أي بيانات
//     }
//     navigation.navigate('MainTabs'); // الانتقال إلى التبويبات
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#aaa"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         placeholderTextColor="#aaa"
//         keyboardType="phone-pad"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#aaa"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <Button title="Login" color="#007bff" onPress={handleLogin} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#fff',
//     marginBottom: 20,

//   },
//   input: {
//     backgroundColor: '#fff',
//     color: '#000',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     fontSize: 16,
//     borderWidth: 2, // سماكة الحواف
//     borderColor: "#aaa", // لون الحواف
//   },
// });
