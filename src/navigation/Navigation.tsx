import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useCustomTheme } from './Theme';
import { navigationRef } from '../utils/NavigationUtil';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    const theme = useCustomTheme();
    const myTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: theme.colors.background,
            text: theme.colors.text,
            card: theme.colors.card,
            border: theme.colors.border,
            notification: theme.colors.notification,
            primary: theme.colors.primary,
        },
    };

    return (
        <NavigationContainer ref={navigationRef} theme={myTheme}>
            <Stack.Navigator
                initialRouteName="BottomTabBar"
                screenOptions={() => ({
                    headerShown: false,
                })}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
