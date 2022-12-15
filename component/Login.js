import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Masuk = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [users, setUsers] = useState([]);

  const login = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('berhasil')
        navigation.navigate('Home');
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  // const cekData = () =>{
  //   const data={
  //     nama, password
  //   }

  //   login();
  //   {users.map(user =>{
  //     console.log(user)
  //     if (user.nama == data.nama & user.password == data.password){
  //       navigation.navigate('Home');
  //       console.log('berhasil')
  //     }else{
  //       console.log('data salah')
  //       setNama("")
  //       setPassword("")
  //       console.log(data.nama, data.password)
  //     }
  //   })}

  // }

  // // untuk mngambil data
  // const login = () => {
  //   Axios.get(' http://localhost:3000/Users')
  //   .then(res=>{
  //     console.log('res get data: ', res)
  //     setUsers(res.data);
  //     // navigation.navigate('Login')
  //   })
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Masuk
      </Text>
      <Image style={styles.logo} source={require('../assets/pojok.png')} />
      <Text style={styles.nama}>
        Email Pengguna
      </Text>
      <TextInput
        style={styles.id}
        value={email}
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
      />
      <Text style={styles.sandi}>
        Kata Sandi
      </Text>
      <TextInput
        style={styles.pass}
        value={password}
        onChangeText={(value) => setPassword(value)}
        placeholder="Masukkan Kata Sandi"
        secureTextEntry
      />
      <TouchableOpacity style={styles.masuk} onPress={login}>
        <Text style={styles.teks}>Masuk</Text>
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
    right: 0,
    bottom: 0
  },
  masuk: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: 250,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
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
    top: 20
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
    top: 20
  },
  sandi: {
    color: "#875749",
    position: 'relative',
    top: 40
  }

});

export default Masuk;