import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./With-me/LoginScreen";
import DashboardScreen from "./With-me/DashboardScreen";
import ServicesScreen from "./With-me/ServicesScreen";
import ActivityScreen from "./With-me/ActivityScreen";
import AccountScreen from "./With-me/AccountScreen";
import HomeScreen from "./With-me/HomeScreen";
import WalletScreen from "./With-me/WalletScreen";
import HelpScreen from "./With-me/HelpScreen";
import ChooseRideScreen from "./With-me/ChooseRideScreen";
import CarRegistrationScreen from "./With-me/CarRegistrationScreen";
import RouteSelectionScreen from "./With-me/RouteSelectionScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Notifications from "expo-notifications";
import CustomTabBar from "./With-me/CustomTabBar";
import { SplashScreen } from "./With-me/SplashScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
function TabNavigator({ username }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") iconName = "dashboard";
          else if (route.name === "Services") iconName = "th-large";
          else if (route.name === "Activity") iconName = "list-alt";
          else if (route.name === "Account") iconName = "user";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen
        name="Account"
        children={() => <AccountScreen username={username} />}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [username, setUsername] = useState("Guest User");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Login" options={{ title: "Login" }}>
          {(props) => <LoginScreen {...props} setUsername={setUsername} />}
        </Stack.Screen>
        <Stack.Screen name="MainTabs" options={{ title: "Main Tabs" }}>
          {(props) => <TabNavigator {...props} username={username} />}
        </Stack.Screen>
        <Stack.Screen
          name="Wallet"
          component={WalletScreen}
          options={{ title: "Wallet" }}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{ title: "Help" }}
        />
        <Stack.Screen
          name="ChooseRide"
          component={ChooseRideScreen}
          options={{ title: "Choose a Ride" }}
        />
        <Stack.Screen
          name="CarRegistration"
          component={CarRegistrationScreen}
          options={{ title: "Register Your Car" }}
        />
        <Stack.Screen
          name="RouteSelection"
          component={RouteSelectionScreen}
          options={{ title: "Select Route" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
