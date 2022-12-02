import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfirmEmail from '../screen/ConfirmEmail/confirmEmail';
import ForgotPassword from '../screen/ForgotPassword/ForgotPassword';
import ResetPassword from '../screen/ResetPassword/ResetPassword';
import LogInScreen from '../screen/LoginScreen/Login';
import SignUpScreen from '../screen/signupScreen/signUpScreen';
import HomeScreen from '../screen/HomeScreen';
// import Home from '../screen/Home/home';
// import Menu from '../screen/Menu/menu';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LogIn" component={LogInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Confirm" component={ConfirmEmail} />
                <Stack.Screen name="Forgot" component={ForgotPassword} />
                <Stack.Screen name="Reset" component={ResetPassword} />

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;