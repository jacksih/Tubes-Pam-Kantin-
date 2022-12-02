import React, {useState} from 'react';
import {View, Text, StyleSheet} from  'react-native';
import CostumButton from '../../components/CostumButton';
import CostumInput from '../../components/CostumInput';
import { useNavigation }  from '@react-navigation/native';

const ForgotPassword = () => {
    
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const onSendEmail = () => {
        navigation.navigate('Reset');
    }
    
    const onSignInPress = () => {
        navigation.navigate('LogIn');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Forgot Password</Text>

            <CostumInput 
            placeholder="Email" 
            value={email} 
            setValue={setEmail} 
            />


            <CostumButton text="Send" onPress={onSendEmail} />

            <CostumButton  
            text="Back to LogIn" 
            onPress={onSignInPress} 
            type="TERTIARY"
            />
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

export default ForgotPassword;