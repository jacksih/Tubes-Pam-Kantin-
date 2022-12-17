import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, CheckBox } from 'react-native';
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
        isChecked: false
      },
      {
        id: "2",
        text: "Nasi Goreng",
        harga: 'Rp.10000',
        isChecked: false
      },

      {
        id: "3",
        text: "Tahu Goreng",
        harga: 'Rp.5000',
        isChecked: false
      },
      {
        id: "4",
        text: "Donut",
        harga: 'Rp.2000',
        isChecked: false
      },
      {
        id: "5",
        text: "Mie Goreng",
        harga: 'Rp.5000',
        isChecked: false
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
        isChecked: false
      },
      {
        id: "7",
        text: "Aqua Gelas",
        harga: 'Rp.1000',
        isChecked: false
      },

      {
        id: "8",
        text: "Teh Pucuk Harum",
        harga: 'Rp.5000',
        isChecked: false
      },
      {
        id: "9",
        text: "Teh Kotak",
        harga: 'Rp.5000',
        isChecked: false
      },
      {
        id: "10",
        text: "Fruit Tea",
        harga: 'Rp.5000',
        isChecked: false
      },
    ],
  }
];

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

  const ListItem = ({ item, onPress, backgroundColor, textColor, select, selected}) => {
  return (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={item.gambar} style={styles.logo}/>
    <Text style={[styles.makanan, textColor]}>{item.text} </Text>
    <Text style={[styles.harga1, textColor]}>{item.harga}</Text>
    <CheckBox value={select} onValueChange={selected}/>
  </TouchableOpacity>
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
