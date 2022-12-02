import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Header from "../Home/header";
import Card from "../../components/CostumMenu/costumMenu";

const Menu = () => {

    const pressMenu = () => {
        console.warn('Menu');
    }
    return(
        <View style = {styles.container}>
            <Header/>
            <Text style={styles.jenis}>Makanan</Text>
            <Card 
            style={styles.card}
            text = "Nasi Goreng"
            img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlw96O1EDV_Pn9PYBPxqE_Curcw4xu6YXU6g&usqp=CAU'
            harga = '10.000'
            onPress={pressMenu}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems :'center',
        paddingVertical : 25,
        backgroundColor: '#F9FBFC',
        padding: 15
    },
    card:{
        margin: 40
    }
})

export default Menu;