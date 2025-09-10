import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notificationscreen from '../../screens/notification/notificationscreen';
import { appColorsCode } from '../../styles/appColorsCode';
import CustomDrawer from './customDrawer';
import HomeScreen from '../../screens/home/homescreen';

import MyCase from '../../screens/mycases/MyCase';
import Assessments from '../../screens/assesments/Assessments';


const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (

    <Drawer.Navigator
      screenOptions={{
        headerShown: false, drawerStyle: { backgroundColor: appColorsCode.primary, width: '75%' },
        drawerLabelStyle: { color: appColorsCode.white, }
      }}
      drawerContent={(props) => <CustomDrawer {...props}/>}
    >    
      <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="Assessments" component={Assessments} options={{headerShown:false}} />
          <Drawer.Screen name="MyCase" component={MyCase} options={{headerShown:false}} />
          <Drawer.Screen name="Notificationscreen" component={Notificationscreen} options={{headerShown:false}} />          
      </Drawer.Navigator>
         
  )
}

export default Drawernavigator

const styles = StyleSheet.create({})