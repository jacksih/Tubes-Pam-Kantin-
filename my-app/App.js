import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Awal from './component/Depan';
import Masuk from './component/Login';
import Daftar from './component/Signup'
import Utama from './component/Home';
import Pesan1 from './component/Kantin1';
import Pesan2 from './component/Kantin2';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Depan">
        <Stack.Screen name="Depan" component={Awal} />
        <Stack.Screen name="Login" component={Masuk} />
        <Stack.Screen name="Signup"component={Daftar}/>
        <Stack.Screen name="Home" component={Utama}/>
        <Stack.Screen name="Kantin1"component={Pesan1}/>
        <Stack.Screen name="Kantin2"component={Pesan2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;