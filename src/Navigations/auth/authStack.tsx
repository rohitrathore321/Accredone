import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSceen from './loginScreen';
import EntryScreen from './EntryScreen';
import FormStack from '../stack/formStack';


const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Entry" component={EntryScreen} />
            <AuthStack.Screen name="login" component={LoginSceen} />
            <AuthStack.Screen name="FormStack" component={FormStack} />
        </AuthStack.Navigator>
    );
};

export default AuthStackScreen;
