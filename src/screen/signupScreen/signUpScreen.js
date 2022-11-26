import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from  'react-native';
import LoginIcon from '../../../assets/images/LoginIcon.png'
import CostumButton from '../../components/CostumButton';
import CostumInput from '../../components/CostumInput';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [noWa, setNoWa] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const onSignInPress = () => {
        console.warn("sign in")
    }

    const onForgotPassword = () => {
        console.warn("Sign Up by google")
    }
    const onSignIn = () => {
        console.warn("SignIn")
    }
    return (
        <View style={styles.root}>
            <Image 
            source={LoginIcon} 
            style={styles.LoginIcon} 
            />

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

            <CostumButton text="Sign Up" onPress={onSignInPress} />

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
    LoginIcon:{
        width : 150,
        height : 150
    }
})

export default SignUpScreen;