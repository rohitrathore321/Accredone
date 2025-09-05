import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../../screens/home/homescreen';
import Notificationscreen from '../../screens/notification/notificationscreen';


const Tab = createBottomTabNavigator();


const BottomNavigator = () => {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Homescreen} />
          <Tab.Screen name="Profile" component={Notificationscreen} />
      </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})