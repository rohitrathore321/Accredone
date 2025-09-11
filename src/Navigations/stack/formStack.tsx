import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GeneralEnquiry from '../../screens/contactUsForms/GeneralEnquiry';
import ApplicationEnquiry from '../../screens/contactUsForms/ApplicationEnquiry';
import ComplaintForm from '../../screens/contactUsForms/ComplaintForm';
import ContactUs from '../../screens/contactUsForms/ContactUs';


const FormStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="GeneralEnquiry" component={GeneralEnquiry} />
      <Stack.Screen name="ApplicationEnquiry" component={ApplicationEnquiry} />
      <Stack.Screen name='ComplaintForm' component={ComplaintForm} />
    </Stack.Navigator>
  )
}

export default FormStack

