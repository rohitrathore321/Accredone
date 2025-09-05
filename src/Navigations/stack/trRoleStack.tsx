import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TRdrawernavigator from '../drawer/trdrawernavigator';

const TRRoleStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="technicalResource" component={TRdrawernavigator} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  )
}

export default TRRoleStack

const styles = StyleSheet.create({})