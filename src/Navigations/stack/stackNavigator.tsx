import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GraphChart from '../../screens/home/GraphChart';
import CircleChart from '../../screens/home/CircleChart';
import Upcoming from '../../screens/home/Upcoming'
import AssessmentDetail from '../../screens/assesments/assessmentDetails/AssessmentDetail';
import AssessmentPlanning from '../../screens/assesments/assessmentPlanning/AssessmentPlanning';
import ResourceAssessments from '../../screens/assesments/resourceAssessments/ResourceAssessments';
import Assessments from '../../screens/assesments/Assessments';
import BottomNavigator from '../bottom/bottomNavigator';
import HomeScreen from '../../screens/home/homescreen';
import FormStack from './formStack';
import caseDetails from '../../screens/mycases/caseDetails';


const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="CustomBottomTabs " component={BottomNavigator} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name='graphChart' component={GraphChart} />
      <Stack.Screen name='circleChart' component={CircleChart} />
      <Stack.Screen name='Assessments' component={Assessments} />
      <Stack.Screen name='AssessmentDetail' component={AssessmentDetail} />
      <Stack.Screen name='upcoming' component={Upcoming} />
      <Stack.Screen name='AssessmentPlanning' component={AssessmentPlanning} />
      <Stack.Screen name='ResourceAssessments' component={ResourceAssessments} />
      <Stack.Screen name="CaseDetails" component={caseDetails} />
      <Stack.Screen name="FormStack" component={FormStack} />

    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})