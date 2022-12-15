import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase'

const MenuButton = () => {
    const [nama, setNama] = useState('');
    const [gambar, setGambar] = useState('');
    const [harga, setHarga] = useState('');
    // const [users, setUsers] = useState([]);

    // const Ambil = async() => {
        
    // }

        const querySnapshot =  getDocs(collection(db, "makanan"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });



    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.gambar}>
                <Image
                    style={styles.image}
                    source={{uri: {gambar}}}
                />
            </View>
            <View style={styles.keterangan}>
                <View style={styles.text}>
                    <Text >{nama}</Text>

                </View>
            </View>
            <View style={styles.ganti}>
                <Text style={styles.text}>Rp {harga}.00,-</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
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