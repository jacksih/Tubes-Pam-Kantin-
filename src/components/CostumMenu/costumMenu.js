import React from 'react';
import { View, StyleSheet, Pressable, Text, Image } from 'react-native';

const Card = ({ text, onPress, img, harga}) => {
    return <View style={styles.card }>
        <Pressable onPress={onPress} style = {styles.isi}>
            <Image 
            style={styles.image}
            source={{uri:img}}
            />
            <Text style={[styles.text]}>{text}</Text>
            <Text style={[styles.text]}>Rp.{harga}.00,-</Text>
        </Pressable>
    </View>;
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: 'green',
        width:'100%',
        height: 'relative',
        margin: 10,
        padding: 15,
        backgroundColor: 'green',
        
    },
    isi:{
        flex: 1,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "center", // ignore this - we'll come back to it
        flexDirection: "row",
    },
    text:{
        // width: 100,
        // height: 100,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black',
        margin: 4
    },
    image:{
        width: 100,
        height: 100,
        margin: 4
    }
});

export default Card;
