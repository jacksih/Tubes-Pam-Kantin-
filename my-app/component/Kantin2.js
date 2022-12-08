import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import Constants from 'expo-constants';

const Pesan2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
      <Text style={styles.teks}>
      Kantin 2 Itera
      </Text>
      </View>
      <Text style={styles.makan}>Makanan</Text>
      <View style={styles.makanan}>
      <Text>
      Mie Goreng
      </Text>
      </View>
      <View style={styles.makanan}>
      </View>
      <Text style={styles.minum}>Minuman</Text>
      <View style={styles.minuman}>
      <Text>
      Aqua Gelas
      </Text>
      </View>
      <View style={styles.minuman}>
      </View>
      <TouchableOpacity style={styles.pesanan}>
      <Text style={styles.pesan}>Pesan</Text>
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
  makanan: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: '90%',
    height: 60,
    justifyContent:'center',
    position: 'relative',
    top:20,
    left:10,
    marginTop:15   
  },
  makan: {
    position: 'relative',
    top:20,
    left: 10
  },
  minuman: {
    alignItems: "center",
    backgroundColor: "#99d1d8",
    width: '90%',
    height: 60,
    justifyContent:'center',
    position: 'relative',
    top:20,
    left:10,
    marginTop:15   
  },
  minum: {
    position: 'relative',
    top:20,
    left: 10,
    marginTop:20
  },
  pesanan: {
    alignItems: "center",
    backgroundColor: "#875749",
    width: '100%',
    height: 40,
    justifyContent:'center',
    position: 'relative',
    top:40,
    borderRadius:50  
  },
  pesan: {
    color: '#ecf0f1'
  }


});

export default Pesan2;