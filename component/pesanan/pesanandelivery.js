import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import PembayaranButton from '../../button/pembayaranButton'
import DeliveryButton from '../../button/deliveryButton'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

const Garis = () => {
    return (
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 5,
                marginTop: 2
            }}
        />

    )
}

const PesananDelivery = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.text}>Pesanan</Text>
                <Text style={styles.jumlah} >Jumlah</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Risoles Mayo</Text>
                <Text style={styles.jumlah} >1</Text>
            </View>

            <Garis />
            <DeliveryButton />
            <Garis />



            <View>
                <Text style={styles.text}>Rincian Pembayaran</Text>
                <View style={styles.container}>
                    <Text style={styles.text}>Harga</Text>
                    <Text style={styles.jumlah}>Rp 10.000</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Ongkir</Text>
                    <Text style={styles.jumlah}>Rp 5.000</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.jumlah}>Rp 15.000</Text>
                </View>
                <Garis />
            </View>

            <View>
                <Text style={styles.text}>Tipe Pembayaran</Text>
                <PembayaranButton />
            </View>

            <TouchableOpacity style={styles.pesanButton} onPress={() => navigation.navigate('Struck')}>
                <Text style={styles.pesan}>Pesan</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        flex: 1,
        backgroundColor: '#E6E6E6'
    },
    container: {
        // marginTop: 20,
        flexDirection: 'row',

    },
    text: {
        fontSize: 20,
        width: '60%',
        height: 50,
        // backgroundColor: 'green',
        padding: 10,
        textAlign: 'center'
    },
    jumlah: {
        fontSize: 20,
        width: '40%',
        // backgroundColor: 'blue',
        height: 50,
        padding: 10,
        textAlign: 'center'
    },
    tipe: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    pesanButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#875749',
        borderRadius: 50,
        borderColor: 'black',
    },
    pesan: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',

    }
})

export default PesananDelivery;