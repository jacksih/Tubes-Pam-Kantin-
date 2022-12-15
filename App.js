import { View, Text } from 'react-native'
import React from 'react'
import Navigasi from './navigation/navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profil from './component/profil';
import firebase from './firebase';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Update the document title using the browser API
    firebase;
  })
  return (
    <Navigasi />
    // <View>
    //   <Profil />
    // </View>

  )
}

export default App