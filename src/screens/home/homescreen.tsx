import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, IconButton, Divider } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import globalStyles from "../../styles/globalStyles";

const HomeScreen = ({navigation}:any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const roundIcon = (bg: string) => ({
    backgroundColor: bg,
    borderRadius: 50,
    padding: 4,
    marginBottom: 10,
  });

  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ===== Top Stats ===== */}
      <View style={styles.topRow}>
        <Card style={styles.statCard} onPress={()=>navigation.navigate('Assessments')}>
          <View style={styles.statContent}>
            <View style={roundIcon(theme.primary)}>
              <IconButton icon="clipboard" size={28} iconColor="white" />
            </View>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Active Assessments</Text>
          </View>
        </Card>

        <Card style={styles.statCard}>
          <View style={styles.statContent}>
            <View style={roundIcon(theme.error || "#3498db")}>
              <IconButton icon="folder" size={28} iconColor="white" />
            </View>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Open Cases</Text>
          </View>
        </Card>
      </View>

      {/* ===== Menu Section ===== */}
      <View style={styles.menuSection}>
        <Card style={styles.menuCard}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
               <View style={[roundIcon(theme.primary),{    marginRight: 12,}]}>
                <IconButton icon="clipboard" size={24} iconColor="white" />
              </View>
              <View>
                <Text style={styles.menuTitle}>My Assessments</Text>
                <Text style={styles.menuSub}>View and manage tasks</Text>
              </View>
            </View>
            <IconButton icon="chevron-right" size={24} iconColor={theme.text}/>
          </View>
        </Card>

        <Card style={styles.menuCard}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
             <View style={[roundIcon(theme.primary),{    marginRight: 12,}]}>
                <IconButton icon="briefcase" size={24} iconColor="white" />
              </View>
              <View>
                <Text style={styles.menuTitle}>My Cases</Text>
                <Text style={styles.menuSub}>Track case progress</Text>
              </View>
            </View>
            <IconButton icon="chevron-right" size={24} iconColor={theme.text}/>
          </View>
        </Card>

        <Card style={styles.menuCard}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <View style={[roundIcon("#2ecc71"),{    marginRight: 12,}]}>
                <IconButton icon="headset" size={24} iconColor="white" />
              </View>
              <View>
                <Text style={styles.menuTitle}>Contact Support</Text>
                <Text style={styles.menuSub}>Get help from team</Text>
              </View>
            </View>
            <IconButton icon="chevron-right" size={24} iconColor={theme.text} />
          </View>
        </Card>
      </View>

      {/* ===== Recent Activity ===== */}
      <Text style={styles.sectionHeading}>Recent Activity</Text>
      <Card style={styles.activityCard}>
        <View>
          <View style={styles.activityRow}>
            <View style={globalStyles.alignIcon}>
              <View style={[roundIcon(theme.primary),{    marginRight: 12,}]}>
                <IconButton icon="check-circle" size={22} iconColor="white" />
              </View>
              <View>
                <Text style={styles.activityTitle}>Assessment Completed</Text>
                <Text style={styles.activitySub}>2 hours ago</Text>
              </View>
            </View>
          </View>
          <Divider style={styles.divider}  />

          <View style={styles.activityRow}>
            <View style={globalStyles.alignIcon}>
              <View style={[roundIcon("#f39c12"),{    marginRight: 12,}]}>
                <IconButton icon="alert-circle" size={22} iconColor="white" />
              </View>
              <View>
                <Text style={styles.activityTitle}>New Case Assigned</Text>
                <Text style={styles.activitySub}>1 day ago</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

export default HomeScreen;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 16,
    },
    // Top Stats
    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    statCard: {
      flex: 1,
      marginHorizontal: 6,
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

    // Menu Cards
    menuSection: {
      marginBottom: 20,
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

    // Recent Activity
    sectionHeading: {
      fontSize: 18,
      fontFamily: "Poppins-SemiBold",
      color: theme.text,
      marginBottom: 12,
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
      color:theme.color,
    },
  });
