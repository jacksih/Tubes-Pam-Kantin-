import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const MenuButton = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gambar}>
                <Image
                    style={styles.image}
                    source={require('../assets/gambar/PickUp.png')}
                />
            </View>
            <View style={styles.keterangan}>
                <View style={styles.text}>
                    <Text >Nama</Text>

                </View>
            </View>
            <View style={styles.ganti}>
                <Text style={styles.text}>Harga</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        padding: 10
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
        width: '50%',
        height: 70,
        backgroundColor: '#99D1D8',
        padding: 10,
        // flex: 1,
        flexDirection: 'row',

    },
    text: {
        // width: '70%'
    },
    ganti: {
        width: '30%',
        height: 70,
        color: 'white',
        backgroundColor: '#99D1D8',
        textAlign: 'center',
        // alignItems: 'center',
    // justifyContent: 'center',
    }
})
export default MenuButton