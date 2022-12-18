import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,Image,TouchableOpacity,ScrollView, CheckBox} from "react-native";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuButton from '../button/menuButton';

const DATA = [
  {
    title: 'Makanan',
    data: [
      {
        id: "1",
        text: "Bakso Goreng",
        harga: 'Rp.5000',
        isChecked: false,
        gambar: require('../assets/gambar/baksogoreng.jpg')
      },
      {
        id: "2",
        text: "Nasi Goreng",
        harga: 'Rp.10000',
        isChecked: false,
        gambar: require('../assets/gambar/nasigoreng.jpg')
      },

      {
        id: "3",
        text: "Tahu Goreng",
        harga: 'Rp.5000',
        isChecked: false,
        gambar: require('../assets/gambar/TahuGoreng.jpg')
      },
      {
        id: "4",
        text: "Donut",
        harga: 'Rp.2000',
        isChecked: false,
        gambar: require('../assets/gambar/Donut.jpg')
      },
      {
        id: "5",
        text: "Mie Goreng",
        harga: 'Rp.5000',
        isChecked: false,
        gambar: require('../assets/gambar/MieGoreng.jpg')
      },
    ],
  },
  {
    title: 'Minuman',
    data: [
      {
        id: "6",
        text: "Aqua Botol",
        harga: 'Rp.4000',
        isChecked: false,
        gambar: require('../assets/gambar/AquaBotol.jpg')
      },
      {
        id: "7",
        text: "Aqua Gelas",
        harga: 'Rp.1000',
        isChecked: false,
        gambar: require('../assets/gambar/AquaGelas.jpg')
      },

      {
        id: "8",
        text: "Teh Pucuk Harum",
        harga: 'Rp.5000',
        isChecked: false,
        gambar: require('../assets/gambar/TehPucukHarum.jpg')
      },
      {
        id: "9",
        text: "Teh Kotak",
        harga: 'Rp.5000',
        isChecked: false,
        gambar: require('../assets/gambar/TehKotak.jpg')
      },
      {
        id: "10",
        text: "Fruit Tea",
        harga: 'Rp.5000',
        isChecked: false,
        gambar: require('../assets/gambar/FruitTea.jpg')
      },
    ],
  }
];

const ListItem = ({ item, onPress, backgroundColor, textColor }) => {
  return (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={item.gambar} style={styles.logo}/>
    <Text style={[styles.makanan, textColor]}>{item.text} </Text>
    <Text style={[styles.harga1, textColor]}>{item.harga}</Text>
  </TouchableOpacity>
  );
};

const Pesan1 = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(DATA);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#875749" : "#99d1d8";
    const color = item.id === selectedId ? '#99d1d8' : '#875749';
    const value = item.id === selectedId ? true : false;
    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        select={value}
        selected={setSelectedId}
      />
    );
  };

  return(
  <View style={styles.container}>
      <View style={styles.atas}>
      <Text style={styles.teks}>
      Kantin 1 Itera
      </Text>
      </View>
      <ScrollView style={styles.scrolling}>
        <SectionList
        sections={DATA}
        renderItem={renderItem}
        renderSectionHeader={({section})=>(
          <Text style={styles.makan}>{section.title}</Text>
        )}
        keyExtractor={item=>item.id}
        extraData={selectedId}
        />
      </ScrollView>
        <TouchableOpacity style={styles.pesanan} onPress={() =>  navigation.navigate('PickUp')}>
          <Text style={styles.pesan}>Pesan</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  item: {
    width: '100%',
    height: 60,
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection:'row',
    position: 'relative',
    alignSelf: 'center',
    marginTop:15,
    borderWidth:1,
    borderColor:'gray'
  },
  scrolling: {
    marginBottom:10
  },
  logo: {
    height:50,
    width:50,
    marginLeft:10
  },
  harga1:{
    marginRight:10
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
  makan: {
    position: 'relative',
    left: 10,
    marginTop:10
  },
  pesanan: {
    alignItems: "center",
    backgroundColor: "#875749",
    width: '95%',
    height: 40,
    borderRadius: 30,
    alignSelf:'center',
    justifyContent:'center',
    marginBottom:10,
  },
  pesan: {
    color: '#ecf0f1'
  }
});

export default Pesan1;
