import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import Constants from 'expo-constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

const Daftar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Daftar
      </Text>
        <Image style={styles.logo} source={require('../assets/pojok.png')} />
        <Text style={styles.nama}>
        Nama Pengguna
        </Text>
        <TextInput
        style={styles.id}
        placeholder = "Masukkan Nama Pengguna"
      />
      <Text style={styles.sandi}>
        Kata Sandi
        </Text>
      <TextInput
        style={styles.pass}
        placeholder = "Masukkan Kata Sandi"
      />
        <TouchableOpacity style={styles.masuk} onPress={() =>  navigation.navigate('Login')}>
          <Text style={styles.teks}>Daftar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    color: '#875749'
  },
  logo: {
    height: 360,
    width: 400,
    position: 'absolute',
    right:0,
    bottom:0
  },
  masuk: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: 250,
    height:45,
    justifyContent:'center',
    alignSelf:'center',
    position: 'relative',
    top: 250
  },
  teks: {
    fontSize: 18,
    color: "#875749",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  id: {
      height: 30,
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 1,
      position: 'relative',
      top:20
   },
   pass: {
      height: 30,
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 1,
      position: 'relative',
      top: 40
   },
   nama: {
     color: "#875749",
     position: 'relative',
     top : 20
   },
   sandi: {
     color: "#875749",
     position: 'relative',
     top : 40
   }

});

export default Daftar;