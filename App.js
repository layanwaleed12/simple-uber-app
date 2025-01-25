import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './With-me/LoginScreen';
import DashboardScreen from './With-me/DashboardScreen';
import ServicesScreen from './With-me/ServicesScreen';
import ActivityScreen from './With-me/ActivityScreen';
import AccountScreen from './With-me/AccountScreen';
import HomeScreen from './With-me/HomeScreen';
import WalletScreen from './With-me/WalletScreen';
import HelpScreen from './With-me/HelpScreen';
import RouteSelectionScreen from './With-me/RouteSelectionScreen';
import CarRegistrationScreen from './With-me/CarRegistrationScreen';
import LookForPassenger from './With-me/LookForPassenger';
import LocationSelectionScreen from './With-me/LocationSelectionScreen';
import ChooseRideScreen from './With-me/ChooseRideScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator({ username }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') iconName = 'dashboard';
          else if (route.name === 'Services') iconName = 'th-large';
          else if (route.name === 'Activity') iconName = 'list-alt';
          else if (route.name === 'Account') iconName = 'user';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
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
  const [username, setUsername] = useState('Guest User');

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {/* شاشة البداية */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        {/* شاشة تسجيل الدخول */}
        <Stack.Screen
          name="Login"
          options={{ title: 'Login' }}
        >
          {(props) => <LoginScreen {...props} setUsername={setUsername} />}
        </Stack.Screen>
        {/* التبويبات الرئيسية */}
        <Stack.Screen
          name="MainTabs"
          options={{ title: 'Main Tabs' }}
        >
          {(props) => <TabNavigator {...props} username={username} />}
        </Stack.Screen>
        {/* شاشة المحفظة */}
        <Stack.Screen
          name="Wallet"
          component={WalletScreen}
          options={{ title: 'Wallet' }}
        />
        {/* شاشة المساعدة */}
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{ title: 'Help' }}
        />
        {/* شاشة تسجيل السيارة */}
        <Stack.Screen
          name="CarRegistrationScreen"
          component={CarRegistrationScreen}
          options={{ title: 'Car Registration' }}
        />
        {/* شاشة اختيار الوجهة */}
        <Stack.Screen
          name="RouteSelectionScreen"
          component={RouteSelectionScreen}
          options={{ title: 'Route Selection' }}
        />
        {/* شاشة البحث عن الراكب */}
        <Stack.Screen
          name="LookForPassenger"
          component={LookForPassenger}
          options={{ title: 'Looking for Passenger' }}
        />
        {/* شاشة تحديد الموقع */}
        <Stack.Screen
          name="LocationSelectionScreen"
          component={LocationSelectionScreen}
          options={{ title: 'Select Location' }}
        />
        {/* شاشة اختيار الرحلة */}
        <Stack.Screen
          name="ChooseRideScreen"
          component={ChooseRideScreen}
          options={{ title: 'Choose a Ride' }}
        />
        {/* شاشة Dashboard */}
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ title: 'Dashboard' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}