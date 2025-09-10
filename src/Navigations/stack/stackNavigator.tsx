import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Drawernavigator from '../drawer/drawernavigator';
import GraphChart from '../../screens/home/GraphChart';
import CircleChart from '../../screens/home/CircleChart';
import Upcoming from '../../screens/home/Upcoming'
import AssessmentTabs from '../../screens/assesments/assessmentDetails/AssessmentTabs';
import AssessmentDetail from '../../screens/assesments/assessmentDetails/AssessmentDetail';
import AssessmentPlanning from '../../screens/assesments/assessmentPlanning/AssessmentPlanning';
import ResourceAssessments from '../../screens/assesments/resourceAssessments/ResourceAssessments';
import Assessments from '../../screens/assesments/Assessments';
import MyCases from '../../screens/cab/myCases';
import CaseDetails from '../../screens/cab/casedetails';


const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="Home1" component={Drawernavigator} />
      <Stack.Screen name='graphChart' component={GraphChart} />
      <Stack.Screen name='circleChart' component={CircleChart} />
      <Stack.Screen name='Assessments' component={Assessments} />
      <Stack.Screen name='AssessmentDetail' component={AssessmentDetail} />
      <Stack.Screen name='AssessmentTabs' component={AssessmentTabs} />
      <Stack.Screen name='upcoming' component={Upcoming} />
      <Stack.Screen name='AssessmentPlanning' component={AssessmentPlanning} />
      <Stack.Screen name='ResourceAssessments' component={ResourceAssessments} />
      <Stack.Screen name='MyCases' component={MyCases} />
      <Stack.Screen name="CaseDetails" component={CaseDetails} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})