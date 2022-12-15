import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuButton from '../button/menuButton';

const Pesan1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
        <Text style={styles.teks}>Kantin 1 Itera</Text>
      </View>
      <ScrollView>
        <Text style={styles.makan}>Makanan</Text>
        <MenuButton />
        <View style={styles.makanan}>
          <Text>Risol</Text>
        </View>
        <View style={styles.makanan}>
        </View>
        <View style={styles.makanan}>
        </View>
        <View style={styles.makanan}>
        </View>
        <View style={styles.makanan}>
        </View>
        <Text style={styles.minum}>Minuman</Text>
        <View style={styles.minuman}>
          <Text>Aqua Botol</Text>
        </View>
        <View style={styles.minuman}>
        </View>
        <View style={styles.minuman}>
        </View>
        <View style={styles.minuman}>
        </View>
        <View style={styles.minuman}>
        </View>
        <TouchableOpacity style={styles.pesanan} onPress={() =>  navigation.navigate('PickUp')}>
          <Text style={styles.pesan}>Pesan</Text>
        </TouchableOpacity>
      </ScrollView>
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
  makanan: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: '95%',
    height: 60,
    justifyContent: 'center',
    position: 'relative',
    top: 20,
    marginTop: 15,
    alignSelf: 'center'
  },
  makan: {
    position: 'relative',
    top: 20,
    left: 10
  },
  minuman: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: '95%',
    height: 60,
    justifyContent: 'center',
    position: 'relative',
    top: 20,
    marginTop: 15,
    alignSelf: 'center'
  },
  minum: {
    position: 'relative',
    top: 20,
    left: 10,
    marginTop: 20
  },
  pesanan: {
    alignItems: "center",
    backgroundColor: "#875749",
    width: '95%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  pesan: {
    color: '#ecf0f1'
  },


});

export default Pesan1;