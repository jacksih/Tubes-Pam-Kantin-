import React, {useState} from 'react';
import {View, Text, StyleSheet} from  'react-native';
import CostumButton from '../../components/CostumButton';
import CostumInput from '../../components/CostumInput';
import { useNavigation }  from '@react-navigation/native';

const ResetPassword = () => {
    
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    const navigation = useNavigation();

    const onSendEmail = () => {
        navigation.navigate('LogIn');
    }
    
    const onSignInPress = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Reset Password</Text>

            <CostumInput 
            placeholder="Code" 
            value={code} 
            setValue={setCode} 
            />

            <CostumInput
            placeholder="Enter new password" 
            value={newPassword} 
            setValue={setNewPassword}
            secureTextEntry 
            />

            <CostumInput
            placeholder="Confirm New password" 
            value={reNewPassword} 
            setValue={setReNewPassword}
            secureTextEntry 
            />

            <CostumButton text="Reset Password" onPress={onSendEmail} />

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

export default ResetPassword;