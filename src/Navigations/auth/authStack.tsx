import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSceen from './loginScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="login" component={LoginSceen} />
        </AuthStack.Navigator>
    );
};

export default AuthStackScreen;
