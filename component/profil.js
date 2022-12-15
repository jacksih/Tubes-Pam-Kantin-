import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Masuk from './Login';
import Axios from 'axios'

const Profil = ({ navigation }) => {
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    const getData = () => {
        const data = {
            nama,
            password
        }

        AmbilData();


    }

    // // untuk mngambil data
    const AmbilData = () => {
        Axios.get(' http://localhost:3000/Users')
            .then(res => {
                console.log('res get data: ', res)
                setUsers(res.data);
                // navigation.navigate('Login')
            })
    }
    return (
        <View style={styles.container}>
            <View style={styles.atas}>
                <Text style={styles.teks}>
                    Akun
                </Text>
            </View>

            <View style={styles.root} >

                <View style={styles.gambar}>
                    <Image
                        style={styles.image}
                        source={require('../assets/gambar/delivery.png')}
                    />
                </View>
                <View style={styles.keterangan}>
                    <View style={styles.text}>
                        <Text >{
                            users.map(user => {
                                
                            })
                        }</Text>
                        <Text></Text>
                    </View>

                </View>
            </View>

            <View style={styles.profil}>
                <Text>Nama: </Text>
                <Text>No Hp: </Text>
                <Text>Status: </Text>
                <Text>Password</Text>
            </View>

            <TouchableOpacity>
                <Text>Logout</Text>
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
    profil: {
        // alignItems: "center",
        backgroundColor: "#99d1d8",
        // width: '100%',
        // height: 60,
        // justifyContent: 'center',
        // position: 'relative',
        // top: 20,
        // left: 10,
        marginTop: 15
    },
    root: {
        flexDirection: 'row',
        margin: 5
    },
    gambar: {
        width: 70,
        height: 70,
        backgroundColor: '#99D1D8',
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'blue',
        borderRadius: 50
    },
    image: {
        width: 60,
        height: 60,
    },
    keterangan: {
        width: '100%',
        height: 70,
        backgroundColor: '#99D1D8',
        padding: 10,
        // flex: 1,
        flexDirection: 'row',

    },
    text: {
        width: '70%'
    },
});

export default Profil;