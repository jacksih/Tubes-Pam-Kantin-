import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import Navigation from './src/navigation';
import Menu from './src/screen/Menu/menu';


export default function App() {
  return (
    <SafeAreaView style  = {styles.container}>
      {/* <Navigation /> */}
      <Menu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

