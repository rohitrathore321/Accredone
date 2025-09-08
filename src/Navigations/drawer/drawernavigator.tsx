import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notificationscreen from '../../screens/notification/notificationscreen';
import HomeScreen from '../../screens/home/homescreen';
import MyCase from '../../screens/MyCase';
import Assessments from '../../screens/assesments/Assesments';



const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="Home1" component={HomeScreen} options={{headerShown:false}}/>
          <Drawer.Screen name="Assessment" component={Assessments} options={{headerShown:false}} />
          <Drawer.Screen name="MyCase" component={MyCase} options={{headerShown:false}} />
          <Drawer.Screen name="Notificationscreen" component={Notificationscreen} options={{headerShown:false}} />          
      </Drawer.Navigator>
  )
}

export default Drawernavigator

const styles = StyleSheet.create({})