import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import TabHome from '../stacks/TabHome';
import MainTab from '../stacks/MainTab';
import RecoverPassword from '../screens/RecoverPassword';
import PasswordCode from '../screens/PasswordCode';
import NewPassword from '../screens/NewPassword';
import Register from '../screens/Register';
const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator
        initialRouteName="Preload" 
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TabHome" component={TabHome} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword}/>
        <Stack.Screen name="PasswordCode" component={PasswordCode}/>
        <Stack.Screen name="NewPassword" component={NewPassword}/>
    </Stack.Navigator>
    
);