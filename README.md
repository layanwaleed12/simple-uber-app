# Uber simple App 
WithMe is a React Native mobile application designed to provide seamless navigation and feature-rich functionality. It is a simple app inspired by ride-sharing services like Uber, with an extra feature called "With Me" that enhances the user experience by adding personalized and community-driven functionalities. This document details the application setup, technical stack, navigation structure, and steps for interaction.
________________________________________
# Description
WithMe is built using modern technologies to ensure a smooth user experience across different platforms. The app includes various screens such as a dashboard, services, activity, and account management, with a custom tab navigator for easy navigation. The "With Me" feature allows users to act as both passengers and drivers, making it possible for someone going to a destination (e.g., college) to pick up others nearby heading in the same direction. This feature promotes community-driven and cost-effective ride-sharing.


________________________________________
# Setup and Installation
Prerequisites
•	Node.js (>= 14.x)
•	Expo CLI (>= 14.2.0)
•	Android Studio or Xcode (for simulators/emulators)
Steps
1.	Clone the repository: 
2.	git clone <repository-url>
3.	cd WithMe
4.	Install dependencies: 
5.	npm install
6.	Start the application: 
7.	npm start
8.	Open the app on a device or emulator: 
o	For Android: npm run android
o	For iOS: npm run ios
o	For Web: npm run web
________________________________________
## Version
•	WithMe App Version: 1.0.0 (as per app.json and package.json)
•	Expo Version: ~52.0.23
•	React Native Version: 0.76.5
________________________________________
## Technical Stack
•	Development Tools: Visual Studio Code, Android Simulator, Expo Go
•	Core Libraries: 
o	expo-notifications: For handling notifications
o	react-navigation: For navigation
o	firebase: For backend database and authentication
o	react-native-vector-icons: For icons
________________________________________
## Navigation Structure
The app uses a combination of stack and bottom tab navigation.
Stack Navigator Screens:
1.	Splash Screen: ./With-me/SplashScreen
2.	Home Screen: ./With-me/HomeScreen
3.	Login Screen: ./With-me/LoginScreen
4.	Main Tabs: Combines the tab navigator
5.	Wallet Screen: ./With-me/WalletScreen
6.	Help Screen: ./With-me/HelpScreen
7.	Choose Ride Screen: ./With-me/ChooseRideScreen
8.	Car Registration Screen: ./With-me/CarRegistrationScreen
9.	Route Selection Screen: ./With-me/RouteSelectionScreen
Tab Navigator Screens:
1.	Dashboard: ./With-me/DashboardScreen
2.	Services: ./With-me/ServicesScreen
3.	Activity: ./With-me/ActivityScreen
4.	Account: ./With-me/AccountScreen
________________________________________
## Steps with Interaction
1.	Login Flow:
o	Navigate to the LoginScreen via the stack navigator.
o	Enter username and password (e.g., username: guest, password: 1234).
o	Press the "Login" button to proceed to the MainTabs.
2.	Navigate Between Tabs:
o	Use the bottom tab navigator to switch between Dashboard, Services, Activity, and Account.
3.	Access Wallet:
o	From the MainTabs, navigate to the WalletScreen for wallet details.
4.	Help and Support:
o	Access the HelpScreen via stack navigation for FAQs and support.
5.	Car Registration:
o	Navigate to CarRegistrationScreen to register your car by filling in the required details.
6.	Select Route:
o	Open the RouteSelectionScreen to choose a preferred route for your ride.
7.	Splash Screen Navigation:
o	The stack navigator initializes with the SplashScreen, which transitions automatically to the HomeScreen after a brief delay.
________________________________________
## Extra Information
•	Default Credentials: 
o	Username: guest
o	Password: 1234
•	Location Permissions: 
o	Ensure to grant location permissions for features like route selection and ride options.
•	Notification Permissions: 
o	Notifications are enabled for reminders and updates.
________________________________________
## Future Work
1.	Enhanced User Profiles: 
o	Add support for profile pictures and custom preferences.
2.	Multilingual Support: 
o	Introduce multiple language options .
3.	Improved UI/UX: 
o	Update the interface for a more modern and interactive user experience. 
4.	Enhanced "With Me" Feature:
o	Expand this feature to allow scheduled rides and better community engagement.
o	Make the "With Me" feature a regular option for daily trips.

________________________________________
## Resources 
https://firebase.google.com/
https://lottiefiles.com/

