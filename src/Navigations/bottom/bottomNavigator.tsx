import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home/homescreen";
import MyCase from "../../screens/mycases/MyCase";
import Assessments from "../../screens/assesments/Assessments";
import CustomBottomTabs from "./CustomBottomTabs";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, }}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Assessments" component={Assessments} />
      <Tab.Screen name="Cases" component={MyCase} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
