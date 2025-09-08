import React, { useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon, IconButton } from "react-native-paper";
import { LineChart } from "react-native-gifted-charts";

import Carousel from "react-native-reanimated-carousel";
import { ScrollView } from "react-native-gesture-handler";
import CircleChart from "../CircleChart";
import Upcoming from "../Upcoming";


const { width } = Dimensions.get("window");

const HomeScreen = ({ navigation }: any) => {
  // Dummy API-like data
  const cards = useMemo(
    () => [
      {
        title: "Total Assessments",
        value: "214",
        percentage: "+12%",
        colors: ["rgba(33,150,243,0.9)", "rgba(33,150,243,0.7)"],
        textColor: "white",
        badgeBg: "rgba(33,150,243,0.85)",
      },
      {
        title: "Pending Reviews",
        value: "75",
        percentage: "+8%",
        colors: ["rgba(255,87,34,0.9)", "rgba(255,87,34,0.7)"],
        textColor: "white",
        badgeBg: "rgba(255,87,34,0.85)",
      },
      {
        title: "Overdue",
        value: "3",
        percentage: "-2%",
        colors: ["rgba(233,30,99,0.9)", "rgba(233,30,99,0.7)"],
        textColor: "white",
        badgeBg: "rgba(233,30,99,0.85)",
      },
      {
        title: "Completion Rate",
        value: "92%",
        percentage: "+5%",
        colors: ["rgba(76,175,80,0.9)", "rgba(76,175,80,0.7)"],
        textColor: "white",
        badgeBg: "rgba(76,175,80,0.85)",
      },
    ],
    []
  );

  const blueLine = [
    { value: 20, label: "Jan" },
    { value: 45, label: "Feb" },
    { value: 28, label: "Mar" },
    { value: 80, label: "Apr" },
    { value: 99, label: "May" },
    { value: 43, label: "Jun" },
  ];

  const grayLine = [
    { value: 15, label: "Jan" },
    { value: 35, label: "Feb" },
    { value: 55, label: "Mar" },
    { value: 60, label: "Apr" },
    { value: 85, label: "May" },
    { value: 70, label: "Jun" },
  ];

  const renderCard = ({ item }: any) => (
     <LinearGradient colors={item.colors} style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardValue}>{item.value}</Text>
      <View
        style={[
          styles.badge,
          { backgroundColor: item.percentage.includes("-") ? "rgba(255,0,0,0.15)" : "rgba(0,255,0,0.15)" },
        ]}
      >
        <Text
          style={[
            styles.cardPercentage,
            { color: item.percentage.includes("-") ? "#ffffff" : "#ffffff" },
          ]}
        >
          {item.percentage}
        </Text>
      </View>
    </LinearGradient>

  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            source="menu"
            size={28}
            color="#333"
          />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <IconButton
            icon="bell-outline"
            size={26}
            iconColor="#333"
            style={styles.iconBtn}
          />
        </TouchableOpacity>
        
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=47' }}
              style={styles.profileImg}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.welcome}>Welcome to AccredApp 👋</Text>
        <Text style={styles.subtitle}>
          Your reviewing and assessments dashboard
        </Text>
      </View>

   <View style={styles.topRow}>
        <Carousel
          loop
          autoPlay
          autoPlayInterval={2500}
          width={width * 0.50}
          height={150}
          data={cards}
          renderItem={({ item }: any) => renderCard({ item })}
          style={{ borderRadius: 20 }}
        />
        <View style={styles.circleWrapper}>
          <CircleChart />
        </View>
      </View>


      {/* Cards + Graph */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }} 
      >
        <View>
          {/* Graph Section */}
          <View style={styles.graphWrapper}>
            <Text style={styles.graphTitle}>Monthly Data Comparison</Text>
            <LineChart
              data={blueLine}
              data2={grayLine}
              height={220}
              spacing={40}
              initialSpacing={40}
              color1="blue"
              color2="gray"
              hideRules={false}
              showVerticalLines={true}
              yAxisColor="lightgray"
              xAxisColor="lightgray"
              yAxisTextStyle={{ color: 'black' }}
              xAxisLabelTextStyle={{ color: 'black' }}
              dataPointsHeight={6}
              dataPointsWidth={6}
              dataPointsColor1="blue"
              dataPointsColor2="gray"
              thickness={3}
            />
          </View>
          <Upcoming />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f5f6fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBtn: {
    marginRight: 12,
  },
  profileImg: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  greeting: {
    marginBottom: 16,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
     marginHorizontal: 3,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
   marginHorizontal: 3,
  },

  // Carousel + Circle row
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  circleWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },

  // Card design
  card: {
    padding:10,
    borderRadius: 15,
    height: 150,
    justifyContent: "center",
    marginRight:1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  badge: {
    marginTop: 8,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  cardPercentage: {
    fontSize: 13,
    fontWeight: "600",
  },

  // Graph
  graphWrapper: {
    marginHorizontal: 3,
    backgroundColor: "#fdffff",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    marginBottom:10,
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
});

