import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from  'react-native';
import LoginIcon from '../../../assets/images/LoginIcon.png'
import CostumButton from '../../components/CostumButton';
import CostumInput from '../../components/CostumInput';
import { useNavigation }  from '@react-navigation/native';


const LogInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const onSignInPress = () => {
        // validasi Email
        navigation.navigate('HomeScreen');
    }

    const onForgotPassword = () => {
        navigation.navigate('Forgot');
    }
    const onSignUp = () => {
        navigation.navigate('SignUp');
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
            placeholder="password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry 
            />

            <CostumButton text="Log In" onPress={onSignInPress} />

            <CostumButton 
            text="Forget Password" 
            onPress={onForgotPassword} 
            type="TERTIARY" 
            />

            <CostumButton 
            text="Don't have acount? SignUp" 
            onPress={onSignUp} 
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

export default LogInScreen;