import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";

const Kantin = ({text, onPress}) => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.kantin} onPress = {onPress}>
                <Text>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 10,
        // padding: 20,
    },
    kantin:{
        padding: 50,
        marginVertical:20,
        backgroundColor: 'green',
    }
})

export default Kantin;