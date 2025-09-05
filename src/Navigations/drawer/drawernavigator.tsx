import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from '../../screens/home/homescreen';
import Notificationscreen from '../../screens/notification/notificationscreen';


const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Homescreen} />
          <Drawer.Screen name="Notificationscreen" component={Notificationscreen} />
      </Drawer.Navigator>
  )
}

export default Drawernavigator

const styles = StyleSheet.create({})