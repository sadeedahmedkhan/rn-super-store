import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/auth/LoginScreen';

export default function App() {
  return (
    <>
      <LoginScreen />
      <StatusBar style='auto' />
    </>
  );
}
// now synced
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
