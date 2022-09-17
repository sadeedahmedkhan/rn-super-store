import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './../screens/auth/LoginScreen';
import RegisterScreen from './../screens/auth/RegisterScreen';
import HomeFeed from './../screens/feed/HomeFeed';

const StackNavigator = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={
          {
            // headerShadowVisible: false,
          }
        }
      >
        <StackNavigator.Screen
          name='loginScreen'
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <StackNavigator.Screen
          name='registerScreen'
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <StackNavigator.Screen
          name='homeFeed'
          component={HomeFeed}
          options={{
            headerTitle: '',
            headerBackVisible: false,
          }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
