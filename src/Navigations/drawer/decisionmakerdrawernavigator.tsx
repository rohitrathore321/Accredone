import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../screens/decisionMaker/home';
import Notification from '../../screens/decisionMaker/notification';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Decisionmakerdrawernavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notificationscreen" component={Notification} />
    </Drawer.Navigator>
  )
}

export default Decisionmakerdrawernavigator

const styles = StyleSheet.create({})