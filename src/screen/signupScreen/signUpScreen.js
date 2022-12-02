import React, {useState} from 'react';
import {View, Text, StyleSheet} from  'react-native';
import CostumButton from '../../components/CostumButton';
import CostumInput from '../../components/CostumInput';
import { useNavigation }  from '@react-navigation/native';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [noWa, setNoWa] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const navigation = useNavigation();
    

    const onSignUpPress = () => {
        navigation.navigate('Confirm');
    }

    const onForgotPassword = () => {
        console.warn("Sign Up by google")
    }
    const onSignIn = () => {
        navigation.navigate('SignIn');
    }
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create An Acount</Text>

            <CostumInput 
            placeholder="email" 
            value={email} 
            setValue={setEmail} 
            />
            <CostumInput 
            placeholder="No Wa" 
            value={noWa} 
            setValue={setNoWa} 
            />
            <CostumInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
            />

            <CostumInput
            placeholder="password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry 
            />

            <CostumInput
            placeholder="Re-password" 
            value={repassword} 
            setValue={setRePassword}
            secureTextEntry 
            />

            <CostumButton text="Daftar" onPress={onSignUpPress} />

            <CostumButton 
            text="Sign in Google" 
            onPress={onForgotPassword}
            type="TERTIARY" 
            />

            <CostumButton 
            text="Have an acount? SignIn" 
            onPress={onSignIn} 
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
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        marginTop: 40,
        color: '#051C20'
    }
})

export default SignUpScreen;