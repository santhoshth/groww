import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '619176708372-q9j046gnda7bffnefsgprr63b5lc9lej.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,
  iosClientId: '619176708372-1ih49rh5uar1c4c6dp5lgc08foefqjvk.apps.googleusercontent.com',
});

const App = () => {
  return <Navigation />;
}

export default App;
