import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import Loader from "./Loader";
import { getData } from "./AsyncStorage";
export default function DashboardScreen() {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation(); // للحصول على التنقل بين الشاشات

  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    (async () => {
      let dsfs = await getData("isLogin");
      console.log("dsfs", dsfs);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});

      setLocation(currentLocation.coords);
      setSelectedLocation(currentLocation.coords);
    })();
  }, []);

  const handleConfirmLocation = () => {
    if (selectedLocation) {
      navigation.navigate("ChooseRide", { selectedLocation }); // التنقل لشاشة ChooseRide مع تمرير الموقع
    } else {
      Alert.alert("Error", "Please select a location first");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Uber</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder={
          selectedLocation
            ? `Lat: ${selectedLocation.latitude.toFixed(
                2
              )}, Lon: ${selectedLocation.longitude.toFixed(2)}`
            : "Enter pickup location"
        }
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        style={styles.comeAlongButton}
        onPress={() => navigation.navigate("CarRegistration")}
      >
        <MaterialIcons name="people" size={24} color="white" />
        <Text style={styles.comeAlongButtonText}>Come Along</Text>
      </TouchableOpacity>
      {/* Map Section */}
      {location && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            onPress={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
          >
            <Marker
              coordinate={{
                latitude: selectedLocation?.latitude || location.latitude,
                longitude: selectedLocation?.longitude || location.longitude,
              }}
              draggable
              onDragEnd={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
            />
          </MapView>
        </View>
      )}

      {/* Confirm Location Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmLocation}
      >
        <Text style={styles.confirmButtonText}>Confirm Location</Text>
      </TouchableOpacity>

      {/* Banner Section */}
      <View style={styles.banner}>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>Want better pick-ups?</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Share location</Text>
          </TouchableOpacity>
        </View>
        <Icon
          name="binoculars"
          size={50}
          color="#fff"
          style={styles.bannerIcon}
        />
      </View>

      {/* CTA Section */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>Ready? Then let’s roll.</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Ride with Uber</Text>
        </TouchableOpacity>
        <Icon name="car" size={70} color="#007bff" style={styles.ctaIcon} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  mapContainer: {
    height: 400,
    position: "relative",
  },
  map: {
    flex: 1,
  },
  comeAlongButton: {
    backgroundColor: "#2196F3",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 25,
    zIndex: 1,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  comeAlongButtonText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#28a745",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  banner: {
    backgroundColor: "#006c46",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bannerButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  bannerButtonText: {
    color: "#006c46",
    fontSize: 14,
    fontWeight: "bold",
  },
  bannerIcon: {
    marginLeft: 10,
  },
  ctaCard: {
    backgroundColor: "#e6f7ff",
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  ctaButton: {
    backgroundColor: "#007bff",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  ctaButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  ctaIcon: {
    marginLeft: 10,
  },
});
