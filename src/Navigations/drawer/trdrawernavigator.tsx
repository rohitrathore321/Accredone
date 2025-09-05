import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notification from '../../screens/technicalResource/notification';
import Home from '../../screens/technicalResource/home';

const TRdrawernavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notificationscreen" component={Notification} />
    </Drawer.Navigator>
  )
}

export default TRdrawernavigator

const styles = StyleSheet.create({})