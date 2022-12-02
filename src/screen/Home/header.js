import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.text} >Kantin</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        borderRadius: 5,
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        textAlign :'center',

    }
})

export default Header;