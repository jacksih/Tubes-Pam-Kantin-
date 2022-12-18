import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
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
        isChecked: false,
	      gambar : require('./assets/gambar/ChitatoLite.jpg')
      },
      {
        id: "2",
        text: "Oreo",
        harga: 'Rp.3000',
        isChecked: false,
	      gambar : require('./assets/gambar/Oreo.jpg')
      },

      {
        id: "3",
        text: "Sukro",
        harga: 'Rp.7000',
        isChecked: false,
	      gambar : require('./assets/gambar/Sukro.jpg')
      },
      {
        id: "4",
        text: "Nabati Richoco Wafer",
        harga: 'Rp.7000',
        isChecked: false,
	      gambar : require('./assets/gambar/richoco.jpg')
      },
      {
        id: "5",
        text: "Nabati Richeese Wafer",
        harga: 'Rp.7000',
        isChecked: false,
	      gambar : require('./assets/gambar/richeese.jpg')
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
        isChecked: false,
	      gambar : require('./assets/gambar/greentea.jpg')
      },
      {
        id: "7",
        text: "Teh Pucuk Harum",
        harga: 'Rp.4000',
        isChecked: false,
	      gambar : require('./assets/gambar/TehPucukHarum.jpg')
      },

      {
        id: "8",
        text: "Susu UHT Chocolate",
        harga: 'Rp.6000',
        isChecked: false,
	      gambar : require('./assets/gambar/chocolate.jpg')
      },
      {
        id: "9",
        text: "Susu UHT Strawberry",
        harga: 'Rp.6000',
        isChecked: false,
	      gambar : require('./assets/gambar/strawberry.jpg')
      },
      {
        id: "10",
        text: "Susu UHT Full Cream",
        harga: 'Rp.6000',
        isChecked: false,
	      gambar : require('./assets/gambar/fullcream.jpg')
      },
    ],
  }
];


const Pesan2 = ({navigation}) => {
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
