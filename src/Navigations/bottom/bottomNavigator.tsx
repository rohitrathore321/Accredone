import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import HomeScreen from '../../screens/home/homescreen';
import MyCase from '../../screens/MyCase';
import Assesments from '../../screens/assesments/Assesments';



const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={styles.fabContainer}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <View style={styles.fab}>{children}</View>
  </TouchableOpacity>
);

const BottomNavigator = () => {
return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#0748fa",
        tabBarInactiveTintColor: "#999",
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }:any) => (
            <Icon source="home-outline" color={color} size={size} />
          ),
        }}
      />

      {/* FAB center button (Assessment) */}
      <Tab.Screen
        name="Assessment"
        component={Assesments}
        options={{
          tabBarLabel: "Assessment",
          tabBarIcon: ({ color }:any) => (
            <Icon source="file-document-outline" color="white" size={26} />
          ),
          tabBarButton: (props:any) => <CustomTabButton {...props} />,
        }}
      />

      {/* My Case */}
      <Tab.Screen
        name="MyCase"
        component={MyCase}
        options={{
          tabBarLabel: "My Case",
          tabBarIcon: ({ color, size }:any) => (
            <Icon source="message-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    height: 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    elevation: 6,
  },
  fabContainer: {
    top: -30, // raise button above tab bar
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: "#0748fa",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
});
