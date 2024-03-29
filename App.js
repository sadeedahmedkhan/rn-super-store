import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        });
      } catch (error) {
        console.log('Error while loading fonts: ', error);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    };
    fetchFonts();
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
