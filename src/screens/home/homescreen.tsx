import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import globalStyles from "../../styles/globalStyles";
import CustomHeader from "../../components/customheader";
import CustomIconButton from "../../components/customIconButton";
import { LineChart } from "react-native-gifted-charts";
import CircleChart from "./CircleChart";
import { appColorsCode } from "../../styles/appColorsCode";

const ActivityList = ({ title, activities }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <Card style={styles.activityCard}>
      <Text style={styles.sectionHeading}>{title}</Text>
      {activities.map((act: any, index: number) => (
        <View key={index}>
          <View style={styles.activityRow}>
            <View style={globalStyles.alignIcon}>
              <CustomIconButton iconName={act.icon} height={60} width={60} />
              <View style={styles.activityTextWrapper}>
                <Text style={styles.activityTitle}>{act.title}</Text>
                <Text style={styles.activitySub}>{act.sub}</Text>
              </View>
            </View>
          </View>
          {index < activities.length - 1 && (
            <View style={styles.divider} />
          )}
        </View>
      ))}
    </Card>
  );
};

const HomeScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

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

  const activities = [
    { title: "Assessment Completed", sub: "2 hours ago", icon: "check-circle" },
    { title: "New Case Assigned", sub: "1 day ago", icon: "alert-circle" },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon
        onPress={() => navigation.goBack()}
        title="DashBoard"
        showRightIcon={false}
        showProfile={false}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Row Cards */}
        <View style={styles.topRow}>
          <Card
            style={[styles.statCard, { marginRight: 12 }]}
            onPress={() => navigation.navigate("Assessments")}
          >
            <View style={styles.statContent}>
              <CustomIconButton iconName="bell" onPress={() => { }} />
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Active Assessments</Text>
            </View>
          </Card>

          <Card style={styles.statCard}>
            <View style={styles.statContent}>
              <CustomIconButton iconName="bell" onPress={() => { }} />
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Open Cases</Text>
            </View>
          </Card>
        </View>

        {/* Circle chart */}
        <CircleChart />

        {/* Line Chart */}
        <View style={styles.graphWrapper}>
          <Text style={styles.sectionHeading}>Monthly Data Comparison</Text>
          <LineChart
            data={blueLine}
            data2={grayLine}
            height={250}
            spacing={50}
            initialSpacing={0}
            color1={appColorsCode.orange}  
            color2={appColorsCode.green}
            hideRules={false}
            showVerticalLines={true}
            yAxisColor={theme.text}
            xAxisColor={theme.text}
            yAxisTextStyle={{ color: theme.text }}
            xAxisLabelTextStyle={{ color: theme.text }}
            dataPointsHeight={12}
            dataPointsWidth={12}
            dataPointsColor1={appColorsCode.orange}
            dataPointsColor2={appColorsCode.green}
            thickness={3}
            backgroundColor={theme.card} // dynamic background
          />
        </View>

        {/* Activity Lists (Reused component) */}
        <ActivityList title="Upcoming Assessments" activities={activities} />
        <ActivityList title="Recent Activity" activities={activities} />

      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingBottom: 100,
    },

    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 8,
    },
    statCard: {
      flex: 1,
      borderRadius: 12,
      elevation: 5,
      backgroundColor: theme.card,
    },
    statContent: {
      alignItems: "center",
      paddingVertical: 20,
    },
    statNumber: {
      fontSize: 20,
      fontFamily: "Poppins-SemiBold",
      color: theme.text,
    },
    statLabel: {
      fontSize: 13,
      fontFamily: "Poppins-Light",
      color: theme.text,
    },
    menuCard: {
      marginBottom: 12,
      borderRadius: 12,
      elevation: 2,
      backgroundColor: theme.card,
      padding: 8,
    },
    menuTitle: {
      fontSize: 15,
      fontFamily: "Poppins-SemiBold",
      color: theme.text,
    },
    menuSub: {
      fontSize: 12,
      fontFamily: "Poppins-Light",
      color: theme.text,
    },
    sectionHeading: {
      fontSize: 16,
      fontFamily: "Poppins-Bold",
      color: theme.text,
      marginVertical: 6,
    },
    activityCard: {
      borderRadius: 15,
      elevation: 5,
      backgroundColor: theme.card,
      padding: 12,
      marginTop: 8,
    },
    activityRow: {
      paddingVertical: 10,
    },
    activityTextWrapper: {
      marginLeft: 12,
    },
    activityTitle: {
      fontSize: 14,
      fontFamily: "Poppins-SemiBold",
      color: theme.text,
    },
    activitySub: {
      fontSize: 12,
      fontFamily: "Poppins-Light",
      color: theme.text,
    },
    graphWrapper: {
      backgroundColor: theme.card,
      borderRadius: 15,
      padding: 12,
      elevation: 5,
    },
    divider: {
      height: 1,
      backgroundColor: appColorsCode.gray,
      marginVertical: 8,
      color: theme.color,
    },
  });
