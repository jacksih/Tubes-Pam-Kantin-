import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


const Awal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Kantin Itera
      </Text>
        <Image style={styles.logo} source={require('../assets/pojok.png')} />
        <TouchableOpacity style={styles.daftar} onPress={() =>  navigation.navigate('Signup')}>
          <Text style={styles.teks}>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.masuk} onPress={() =>  navigation.navigate('Login')}>
          <Text style={styles.teks}>Masuk</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  daftar: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: 250,
    height:45,
    justifyContent:'center',
    alignSelf:'center',
    position: 'relative',
    top: 270
  },
  masuk: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: 250,
    height:45,
    justifyContent:'center',
    alignSelf:'center',
    position: 'relative',
    top: 310
  },
  teks: {
    fontSize: 18,
    color: "#875749",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default Awal;