import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,Image,TouchableOpacity,ScrollView, CheckBox} from "react-native";
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
const DATA = [
  {
    title: 'Makanan',
    data: [
      {
        id: "1",
        text: "Chitato Lite",
        harga: 'Rp.3000',
	      gambar : require('../assets/gambar/ChitatoLite.jpg') 
      },
      {
        id: "2",
        text: "Oreo",
        harga: 'Rp.3000',
	      gambar : require('../assets/gambar/Oreo.jpg')
      },

      {
        id: "3",
        text: "Sukro",
        harga: 'Rp.7000',
	      gambar : require('../assets/gambar/Sukro.jpg')
      },
      {
        id: "4",
        text: "Nabati Richoco Wafer",
        harga: 'Rp.7000',
	      gambar : require('../assets/gambar/richoco.jpg')
      },
      {
        id: "5",
        text: "Nabati Richeese Wafer",
        harga: 'Rp.7000',
	      gambar : require('../assets/gambar/richeese.jpg')
      },
    ],
  },
  {
    title: 'Minuman',
    data: [
      {
        id: "6",
        text: "Nu Green Tea",
        harga: 'Rp.4000',
  	    gambar : require('../assets/gambar/greentea.jpg')
      },
      {
        id: "7",
        text: "Teh Pucuk Harum",
        harga: 'Rp.4000',
	      gambar : require('../assets/gambar/TehPucukHarum.jpg')
      },

      {
        id: "8",
        text: "Susu UHT Chocolate",
        harga: 'Rp.6000',
	      gambar : require('../assets/gambar/chocolate.jpg')
      },
      {
        id: "9",
        text: "Susu UHT Strawberry",
        harga: 'Rp.6000',
	      gambar : require('../assets/gambar/strawberry.jpg')
      },
      {
        id: "10",
        text: "Susu UHT Full Cream",
        harga: 'Rp.6000',
	      gambar : require('../assets/gambar/fullcream.jpg')
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

const Pesan2 = ({navigation}) => {
	const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#875749" : "#99d1d8";
    const color = item.id === selectedId ? '#99d1d8' : '#875749';

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
      <Text style={styles.teks}>
      Kantin 2 Itera
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
      <TouchableOpacity style={styles.pesanan} onPress={() =>  navigation.navigate('Deliveri')}>
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

export default Pesan2;
