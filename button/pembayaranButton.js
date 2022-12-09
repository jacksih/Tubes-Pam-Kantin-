import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'



const Pickupbutton = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gambar}>
                <Image
                    style={styles.image}
                    source={require('../assets/gambar/Cash.png')}
                />
            </View>
            <View style={styles.keterangan}>
                <View style={styles.text}>
                    <Text >Cash</Text>
                    <Text >Siapkan yang anda</Text>

                </View>
                <View style={styles.ganti}>
                    <Text style={styles.ganti}>Ganti</Text>
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
        flex: 1,
        flexDirection: 'row',
        
    },
    text: {
        width: '70%',
    },
    ganti: {
        width: '30%',
        width: 50,
        height: 25,
        color: 'white',
        backgroundColor: '#875749',
        textAlign: 'center'
    }
})

export default Pickupbutton