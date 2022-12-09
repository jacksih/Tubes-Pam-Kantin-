import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


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

const StrukPembayaran = () => {
    return (
        <View style={styles.container}>
            <View style={styles.atas} >
                <Text style={styles.textA}>Kantin Itera</Text>
            </View>

            <View style={styles.struk}>
                <Text style={styles.rincian}>Rincian Pesanan</Text>
                <Garis />

                <View style={styles.pembayaran}>
                    <Text style={styles.text}>Harga</Text>
                    <Text style={styles.jumlah}>Rp 10.000</Text>
                </View>
                <View style={styles.pembayaran}>
                    <Text style={styles.text}>Ongkir</Text>
                    <Text style={styles.jumlah}>Rp 5.000</Text>
                </View>
                <Garis />
                <View style={styles.pembayaran}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.jumlah}>Rp 15.000</Text>
                </View>
            </View>
                <View style={styles.Cek}>
                    <Text style={styles.pesan}>Cek Struk Pembayaran</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        flex: 1
    },
    rincian: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    atas: {
        width: '100%',
        height: 50,
        backgroundColor: '#99D1D8',
    },
    textA: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    struk: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 20,
        flex: 1
    },
    pembayaran: {
        // flex: 1,
        flexDirection: 'row'
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
    
    Cek: {
        width: '100%',
        height: 40,
        backgroundColor: '#875749',
        borderRadius: 50,
        borderColor: 'black',
        marginBottom: 20
    },
    pesan: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
})

export default StrukPembayaran