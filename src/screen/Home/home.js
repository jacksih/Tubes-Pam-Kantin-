import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Kantin from "../../components/CostumKantin/kantin";
import Header from "./header";

const Home = () => {
    const Kantin1 = () => {
        console.warn("Kantin1")
    }
    const Kantin2 = () => {
        console.warn("Kantin2")
    }

    return (
        <View style={styles.container} >
            <Header/>

            <Kantin text="Kantin1" onPress={Kantin1} />
            <Kantin text="Kantin2" onPress={Kantin2} />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems :'center',
        paddingVertical : 25,
        backgroundColor: '#F9FBFC',


    },
    
})

export default Home;