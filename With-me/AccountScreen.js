import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { database, ref, update, remove, get } from './Firebase';
import { getData, storeData } from '../utils/storage';

import ProfileImage from '../assets/Image3.png';

export default function AccountScreen({ username = 'Guest User' }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadUserData = async () => {
      const storedPhoneNumber = await getData('phoneNumber');
      if (!storedPhoneNumber) return;

      const userRef = ref(database, `users/${storedPhoneNumber}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        setEmail(userData.email);
        setPhoneNumber(userData.phoneNumber);
        setPassword(userData.password);
      }
    };
    loadUserData();
  }, []);

  const handleUpdate = async () => {
    if (!email || !phoneNumber || !password) {
      Alert.alert('Error', 'All fields must be filled.');
      return;
    }

    try {
      await update(ref(database, `users/${phoneNumber}`), {
        email,
        phoneNumber,
        password,
        updatedAt: new Date().toISOString(),
      });

      await storeData('username', email);
      await storeData('phoneNumber', phoneNumber);

      Alert.alert('Success', 'Account updated successfully!');
    } catch (error) {
      console.error('Update failed:', error);
      Alert.alert('Error', 'Failed to update account.');
    }
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await remove(ref(database, `users/${phoneNumber}`));
              await storeData('username', 'Guest User');
              await storeData('phoneNumber', '');

              Alert.alert('Account Deleted', 'Your account has been removed.');
              navigation.navigate('Login');
            } catch (error) {
              console.error('Delete failed:', error);
              Alert.alert('Error', 'Failed to delete account.');
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.rating}>⭐ 5.00</Text>
        </View>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Help')}>
          <Icon name="life-ring" size={24} color="#007bff" />
          <Text style={styles.actionText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Wallet')}>
          <Icon name="credit-card" size={24} color="#007bff" />
          <Text style={styles.actionText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="list-alt" size={24} color="#007bff" />
          <Text style={styles.actionText}>Activity</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkupCard}>
        <Text style={styles.checkupTitle}>Safety checkup</Text>
        <Text style={styles.checkupDescription}>
          Boost your safety profile by turning on additional features
        </Text>
        <View style={styles.progress}>
          <Text style={styles.progressText}>1/7</Text>
        </View>
      </View>

      <View style={styles.checkupCard}>
        <Text style={styles.checkupTitle}>Privacy checkup</Text>
        <Text style={styles.checkupDescription}>
          Take an interactive tour of your privacy settings
        </Text>
        <Icon name="clipboard" size={30} color="#007bff" style={styles.checkupIcon} />
      </View>

      <View style={styles.checkupCard}>
        <Text style={styles.checkupTitle}>Estimated CO₂ saved</Text>
        <Text style={styles.checkupDescription}>0 g</Text>
        <Icon name="leaf" size={30} color="green" style={styles.checkupIcon} />
      </View>

      {/* Update & Delete Form */}
      <View style={styles.editForm}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Update Account" color="#007bff" onPress={handleUpdate} />
        <View style={{ marginVertical: 10 }} />
        <Button title="Delete Account" color="red" onPress={handleDelete} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginRight: 15 },
  textContainer: { flex: 1 },
  username: { fontSize: 24, fontWeight: 'bold' },
  rating: { fontSize: 16, color: '#555', marginTop: 5 },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionButton: { alignItems: 'center' },
  actionText: { fontSize: 14, marginTop: 5, color: '#007bff' },
  checkupCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkupTitle: { fontSize: 16, fontWeight: 'bold' },
  checkupDescription: { fontSize: 14, color: '#555', flex: 1, marginLeft: 10 },
  progress: {
    backgroundColor: '#e6f7ff',
    borderRadius: 10,
    padding: 5,
    width: 40,
    alignItems: 'center',
  },
  progressText: { fontSize: 12, color: '#007bff' },
  checkupIcon: { marginLeft: 10 },
  editForm: { marginTop: 30 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
});






// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native'; // استيراد useNavigation

// // استيراد صورة البروفايل
// import ProfileImage from '../assets/Image3.png'; // تأكد أن المسار صحيح

// export default function AccountScreen({ username = 'Guest User' }) {
//   const navigation = useNavigation(); // إنشاء متغير للتنقل

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Image
//           source={ProfileImage} // استخدام الصورة المستوردة
//           style={styles.profileImage}
//         />
//         <View style={styles.textContainer}>
//           <Text style={styles.username}>{username}</Text>
//           <Text style={styles.rating}>⭐ 5.00</Text>
//         </View>
//       </View>

//       {/* Quick Actions */}
//       <View style={styles.quickActions}>
//         <TouchableOpacity 
//           style={styles.actionButton} 
//           onPress={() => navigation.navigate('Help')} // التنقل إلى صفحة Help
//         >
//           <Icon name="life-ring" size={24} color="#007bff" />
//           <Text style={styles.actionText}>Help</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={styles.actionButton} 
//           onPress={() => navigation.navigate('Wallet')} // التنقل إلى صفحة Wallet
//         >
//           <Icon name="credit-card" size={24} color="#007bff" />
//           <Text style={styles.actionText}>Wallet</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton}>
//           <Icon name="list-alt" size={24} color="#007bff" />
//           <Text style={styles.actionText}>Activity</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Safety Checkup */}
//       <View style={styles.checkupCard}>
//         <Text style={styles.checkupTitle}>Safety checkup</Text>
//         <Text style={styles.checkupDescription}>
//           Boost your safety profile by turning on additional features
//         </Text>
//         <View style={styles.progress}>
//           <Text style={styles.progressText}>1/7</Text>
//         </View>
//       </View>

//       {/* Privacy Checkup */}
//       <View style={styles.checkupCard}>
//         <Text style={styles.checkupTitle}>Privacy checkup</Text>
//         <Text style={styles.checkupDescription}>
//           Take an interactive tour of your privacy settings
//         </Text>
//         <Icon name="clipboard" size={30} color="#007bff" style={styles.checkupIcon} />
//       </View>

//       {/* Estimated CO₂ saved */}
//       <View style={styles.checkupCard}>
//         <Text style={styles.checkupTitle}>Estimated CO₂ saved</Text>
//         <Text style={styles.checkupDescription}>0 g</Text>
//         <Icon name="leaf" size={30} color="green" style={styles.checkupIcon} />
//       </View>

//       {/* Other Options */}
//       <View style={styles.optionsContainer}>
//         <TouchableOpacity style={styles.optionItem}>
//           <Icon name="users" size={20} color="#555" />
//           <Text style={styles.optionText}>Family and teens</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionItem}>
//           <Icon name="cog" size={20} color="#555" />
//           <Text style={styles.optionText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionItem}>
//           <Icon name="envelope" size={20} color="#555" />
//           <Text style={styles.optionText}>Messages</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionItem}>
//           <Icon name="users" size={20} color="#555" />
//           <Text style={styles.optionText}>Saved groups</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 15,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   rating: {
//     fontSize: 16,
//     color: '#555',
//     marginTop: 5,
//   },
//   quickActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   actionButton: {
//     alignItems: 'center',
//   },
//   actionText: {
//     fontSize: 14,
//     marginTop: 5,
//     color: '#007bff',
//   },
//   checkupCard: {
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   checkupTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   checkupDescription: {
//     fontSize: 14,
//     color: '#555',
//     flex: 1,
//     marginLeft: 10,
//   },
//   progress: {
//     backgroundColor: '#e6f7ff',
//     borderRadius: 10,
//     padding: 5,
//     width: 40,
//     alignItems: 'center',
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#007bff',
//   },
//   checkupIcon: {
//     marginLeft: 10,
//   },
//   optionsContainer: {
//     marginTop: 20,
//   },
//   optionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   optionText: {
//     fontSize: 16,
//     marginLeft: 10,
//     color: '#555',
//   },
// });
