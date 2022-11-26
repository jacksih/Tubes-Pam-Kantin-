import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screen/SigninScreen/SigninScreen';
import SignUpScreen from './src/screen/signupScreen/signUpScreen';

export default function App() {
  return (
    <SafeAreaView style  = {styles.container}>
      <SignUpScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

