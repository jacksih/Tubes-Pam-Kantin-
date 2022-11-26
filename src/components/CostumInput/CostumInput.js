import React from 'react';
import {View, Text, TextInput, StyleSheet} from  'react-native';

const CostumInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style = {styles.container}>
            
            <TextInput 
            value = {value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input} 
            secureTextEntry={secureTextEntry}
            />
            
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        // height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        
    }

})
export default CostumInput;