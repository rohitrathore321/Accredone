import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CBdrawernavigator from '../drawer/cbdrawernavigator';

const DecisionMakerRoleStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="DecisionMaker" component={CBdrawernavigator} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  )
}

export default DecisionMakerRoleStack

const styles = StyleSheet.create({})