import React, {useState} from 'react';
import {View, Text, StyleSheet} from  'react-native';
import CostumButton from '../../components/CostumButton';
import CostumInput from '../../components/CostumInput';
import { useNavigation }  from '@react-navigation/native';

const ConfirmEmail = () => {
    
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmEmail = () => {
        navigation.navigate('LogIn');
    }
    
    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    }

    const onLoginPress = () => {
        navigation.navigate('LogIn');
    }
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Email</Text>

            <CostumInput 
            placeholder="Code" 
            value={code} 
            setValue={setCode} 
            />


            <CostumButton text="Konfirmasi Kode" onPress={onConfirmEmail} />

            <CostumButton  
            text="Back to SignUp" 
            onPress={onSignUpPress} 
            type="TERTIARY"
            />
            <Text>Have an Acount?
                <Text style={styles.text} onPress={onLoginPress} >Login</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems :'center',
        padding : 20,
        backgroundColor: '#F9FBFC'
    },
    text: {
        textDecorationLine: 'underline'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        marginTop: 40,
        color: '#051C20'
    }
})

export default ConfirmEmail;