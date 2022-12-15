import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../firebase';
import Axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Daftar = ({ navigation }) => {



  // const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        console.log('berhasil');
        navigation.navigate('Login')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        comsole.log(errorMessage)
        // ..
      });
  }

  // const handleSignUp = () =>{
  //   auth
  //     .createUserAndEmailWithPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log(user.email)
  //     })
  //     .catch(eror =>alert(eror.message))
  // }

  // const postData = () => {
  //   fetch('http://localhost:3000/posts', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password
  //     })
  //   });
  // }

  // const daftar = () => {
  //   const data = {
  //     nama,
  //     password
  //   }
  //   Axios.post(' http://localhost:3000/Users', data)
  //     .then(res => {
  //       console.log('res: ', res)
  //       navigation.navigate('Login')
  //       // setNama("")
  //       // setPassword("")
  //     })
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Daftar
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
      <TouchableOpacity style={styles.masuk}
        onPress={signup}>
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
    top: 20,
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

export default Daftar;