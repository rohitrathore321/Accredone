import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, IconButton, Divider } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import globalStyles from "../../styles/globalStyles";
import CustomHeader from "../../components/customheader";
import CustomIconButton from "../../components/customIconButton";

const HomeScreen = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const menuItems = [
    { title: "My Assessments", sub: "View and manage tasks", icon: "bell" },
    { title: "My Cases", sub: "Track case progress", icon: "bell" },
    { title: "Contact Support", sub: "Get help from team", icon: "bell" },
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
        title="My Assessments"
        showRightIcon={false}
        showProfile={false}
      />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 2, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <Card style={[styles.statCard, { marginRight: 12 }]} onPress={() => navigation.navigate("Assessments")}>
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

        <View >
          {menuItems.map((item, index) => (
            <Card key={index} style={styles.menuCard}>
              <View style={globalStyles.centerContent}>
                <View style={globalStyles.alignIcon}>
                  <CustomIconButton iconName={item.icon} onPress={() => { }} height={60} width={60} />
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuSub}>{item.sub}</Text>
                  </View>
                </View>
                <IconButton icon="chevron-right" size={24} iconColor={theme.text} />
              </View>
            </Card>
          ))}
        </View>

        <Text style={styles.sectionHeading}>Recent Activity</Text>
        <Card style={styles.activityCard}>
          {activities.map((act, index) => (
            <View key={index}>
              <View style={styles.activityRow}>
                <View style={globalStyles.alignIcon}>
                  <CustomIconButton iconName={act.icon} onPress={() => { }} height={60} width={60} />
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.activityTitle}>{act.title}</Text>
                    <Text style={styles.activitySub}>{act.sub}</Text>
                  </View>
                </View>
              </View>
              {index < activities.length - 1 && <Divider style={styles.divider} />}
            </View>
          ))}
        </Card>
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
    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    statCard: {
      flex: 1,
      borderRadius: 14,
      elevation: 3,
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
      fontSize: 18,
      fontFamily: "Poppins-SemiBold",
      color: theme.text,
      marginVertical: 6,
    },
    activityCard: {
      borderRadius: 12,
      elevation: 2,
      backgroundColor: theme.card,
      padding: 12,
    },
    activityRow: {
      paddingVertical: 10,
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
    divider: {
      marginVertical: 6,
      color: theme.color,
    },
  });
