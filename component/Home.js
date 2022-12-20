import React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import Constants from 'expo-constants';

const Utama = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
      <Text style={styles.teks}>
      Kantin Itera
      </Text>
      </View>
      <Image style={styles.logo} source={require('../assets/pojok.png')}/>
      <TouchableOpacity style= {styles.kantin1} onPress={() =>  navigation.navigate('Kantin1')}>
      <Text> Kantin 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.kantin2} onPress={() =>  navigation.navigate('Kantin2')}> 
      <Text> Kantin 2</Text>
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
  atas: {
    height: 54,
    width: '100%',
    backgroundColor: '#99d1d8',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teks: {
    color: '#875749',
    fontWeight: 'bold',
    fontSize: 20
  },
  kantin1: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: 120,
    height: 120,
    justifyContent:'center',
    position: 'absolute',
    top: 180,
    left: 20
  },
  kantin2: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: 120,
    height: 120,
    justifyContent:'center',
    position: 'absolute',
    top: 180,
    right: 20
  },
  logo: {
    height: 360,
    width: 400,
    position: 'absolute',
    right:0,
    bottom:0
  },

});

export default Utama;