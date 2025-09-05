import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CabHome from '../../screens/cab/cabHome';
import Notification from '../../screens/cab/notification';

const CBdrawernavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={CabHome} />
      <Drawer.Screen name="Notificationscreen" component={Notification} />
    </Drawer.Navigator>
  )
}

export default CBdrawernavigator

const styles = StyleSheet.create({})