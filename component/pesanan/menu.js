import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MenuButton from '../../button/menuButton'

const Menu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.atas} >
                <Text style={styles.textA}>Kantin Itera</Text>
            </View>
            <Text>Makanan</Text>
            <MenuButton />

            <Text>Minuman</Text>
            <MenuButton />

            <View style={styles.Cek}>
                <Text style={styles.pesan}>Pesan</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        flex: 1
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

export default Menu