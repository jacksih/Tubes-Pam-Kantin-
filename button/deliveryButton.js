import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';



const DeliveryButton = ({navigation}) => {
    return (
        <View >
            <View style={styles.inputlokasi}>
                <Text>Lokasi</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Lokasi'
                />
            </View >

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 5,
                    marginTop: 2
                }}
            />
            <View style={styles.container} >

                <View style={styles.gambar}>
                    <Image
                        style={styles.image}
                        source={require('../assets/gambar/delivery.png')}
                    />
                </View>
                <View style={styles.keterangan}>
                    <View style={styles.text}>
                        <Text >PickUp</Text>
                        <Text >Pesanan akan siap dalam</Text>

                    </View>
                    <TouchableOpacity style={styles.ganti} onPress={() => navigation.navigate('PickUp')}>
                        <Text style={styles.ganti}>Ganti</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        margin: 5
    },
    inputlokasi: {
        padding: 10
    },
    input: {
        height: 40,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        position: 'relative',
        margin: 10
    },
    gambar: {
        width: '20%',
        height: 70,
        backgroundColor: '#99D1D8',
        padding: 10,
        textAlign: 'center'
    },
    image: {
        width: 60,
        height: 60,
    },
    keterangan: {
        width: '80%',
        height: 70,
        backgroundColor: '#99D1D8',
        padding: 10,
        // flex: 1,
        flexDirection: 'row',

    },
    text: {
        width: '70%'
    },
    ganti: {
        width: '30%',
        width: 50,
        height: 25,
        color: 'white',
        backgroundColor: '#875749',
        textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
})

export default DeliveryButton