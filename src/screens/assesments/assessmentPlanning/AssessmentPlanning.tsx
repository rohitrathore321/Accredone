import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../../../components/customheader";
import DetailCard from "../../../components/detailCard";
import { appColorsCode } from "../../../styles/appColorsCode";
import { Button, Card, Divider, Icon } from "react-native-paper";
import { useAppTheme } from "../../../hooks/colorTheme";
import CustomIconButton from "../../../components/customIconButton";

const AssessmentPlanning = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const activities = [
    {
      id: "1",
      title: "Pre-assessment File Review",
      description:
        "The review ensures all required documents, forms and data are in place",
      time: "Feb 26, 2025 • 11:30 AM - 1:30 PM",
      status: "Scheduled",
      statusColor: "#39a4d6",
      icon: "file-document",
    },
    {
      id: "2",
      title: "Opening Meeting",
      description: "Opening task discussion meeting",
      time: "Feb 26, 2025 • 9:00 AM - 10:00 AM",
      status: "Confirmed",
      statusColor: "#7db15b",
      icon: "account-group",
    },
    {
      id: "3",
      title: "Pre-closing Meeting",
      description: "Assessment Reviewing meeting",
      time: "Feb 27, 2025 • 3:00 PM - 3:30 PM",
      status: "Scheduled",
      statusColor: "#39a4d6",
      icon: "account-multiple",
    },
    {
      id: "4",
      title: "Closing Meeting",
      description: "Retrospective updates meeting",
      time: "Feb 27, 2025 • 4:30 PM - 5:00 PM",
      status: "Scheduled",
       statusColor: "#39a4d6",
      icon: "calendar-check",
    },
  ];

  const renderActivity = ({ item }: any) => (
    <View>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <CustomIconButton iconName={item.icon}  style={{ alignSelf: "center" }} onPress={() => {}} />
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text
            style={[styles.txt, { fontFamily: "Poppins-SemiBold" }]}
            numberOfLines={0}
          >
            {item.title}
          </Text>
          <Text
            style={[styles.txt, { fontFamily: "Poppins-Regular" }]}
            numberOfLines={0}
          >
            {item.description}
          </Text>
          <Text
            style={[styles.txt, { fontFamily: "Poppins-Regular" }]}
            numberOfLines={0}
          >
            {item.time}
          </Text>
          <Text
            style={[
              styles.colored,
              {
                fontFamily: "Poppins-SemiBold",
                backgroundColor: `${item.statusColor}20`, 
                color: item.statusColor,
              },
            ]}
            numberOfLines={0}
          >
            {item.status}
          </Text>
        </View>
      </View>
      <Divider style={{ marginTop: 10,backgroundColor: "#D3D3D3"  }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="Assessment Planning"
        showRightIcon={false}
        showProfile={false}
      />
      <ScrollView
        style={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={false}>
        {/* Top Detail Card */}
        <DetailCard
          title="ISO 14001 Assessment"
          details={[
            {label: 'Assessment ID', value: '2025-598x'},
            {label: 'Client', value: 'TechCorp Solutions'},
            {label: 'Standard', value: 'ISO 9001:2015'},
            {label: 'Assessment Type', value: 'Initial Assessment'},
          ]}
        />

        {/* Activities Section */}
        <Card style={styles.menuCard}>
          <Card.Content>
            <View style={styles.buttonPlan}>
              <Text
                style={[
                  styles.txt,
                  {
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginRight: 8,
                  },
                ]}>
                Assessment Activities
              </Text>
              <TouchableOpacity
                style={styles.addActivityButton}
                onPress={() => console.log('Add Activity')}>
                <Icon
                  source="plus-circle-outline" 
                  size={20}
                  color="#3b82f6"
                />
                <Text style={styles.addActivityText}>Add Activity</Text>
              </TouchableOpacity>
            </View>
            <Card style={[styles.menuCard, {elevation: 24, marginTop: 8}]}>
              <Card.Content>
                <FlatList
                  data={activities}
                  renderItem={renderActivity}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>

        {/* Bottom Buttons */}
        <View style={styles.buttonRow}>
          <Button
            mode="contained"
            icon="account-multiple"
            onPress={() => navigation.navigate('ResourceAssessments')}
            buttonColor={appColorsCode.purple}
            textColor="white"
            style={styles.signInButton}>
            Assign Resource
          </Button>

          <Button
            mode="contained"
            icon="content-save"
            onPress={() => console.log('Save Plan')}
            buttonColor={theme.primary}
            textColor="white"
            style={styles.contactButton}>
            Save Plan
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default AssessmentPlanning;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    buttonRow: {
      marginTop: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    signInButton: {
      flex: 1,
      marginRight: 4,
      padding: 3,
      borderRadius: 12,
    },
    contactButton: {
      flex: 1,
      marginLeft: 4,
      padding: 3,
      borderRadius: 12,
    },
    menuCard: {
      marginVertical: 6,
      borderRadius: 15,
      elevation: 3,
      backgroundColor: theme.card,
    },
    txt: {
      color: theme.text,
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      flexWrap: "wrap",
    },
    buttonPlan: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    colored: {
      marginTop: 4,
      alignSelf: "flex-start",
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 2,
      overflow: "hidden",
      fontSize: 12,
    },
    addActivityButton: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#3b82f6",
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
    addActivityText: {
      marginLeft: 6,
      color: "#3b82f6",
      fontFamily: "Poppins-SemiBold",
      fontSize: 14,
    },

  });
