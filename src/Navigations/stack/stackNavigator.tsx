import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Drawernavigator from '../drawer/drawernavigator';
import GraphChart from '../../screens/GraphChart';
import CircleChart from '../../screens/CircleChart';
import Upcoming from '../../screens/Upcoming';


const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="Home1" component={Drawernavigator} />
      <Stack.Screen name='graphChart' component={GraphChart}/>
     <Stack.Screen name='circleChart' component={CircleChart}/>
     <Stack.Screen name='upcoming' component={Upcoming}/>
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})