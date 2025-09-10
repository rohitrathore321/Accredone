import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button, IconButton } from "react-native-paper";
import AssessmentTabs from "./AssessmentTabs";
import CustomHeader from "../../../components/customheader";


const AssessmentDetail = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="Assessment Detail"
        showNotification={false}  
        showProfile={false}   
      />

      <View style={styles.alertBox}>
          <IconButton icon="alert-circle" iconColor="#e74c3c" size={24} />
          <View style={{ flex: 1 }}>
            <Text style={styles.alertTitle}>Action Required</Text>
            <Text style={styles.alertText}>
              Please review the assessment details and accept or reject the
              assignment.
            </Text>
          </View>
        </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>
          ISO 14001:2015 Surveillance Assessment
        </Text>


        {/* Accept / Reject Buttons */}
        <View style={styles.actionRow}>
          <Button
            mode="contained"
            icon="check"
            style={styles.flexBtn}
            buttonColor="#27ae60"
            onPress={() => navigation.goBack()}
          >
            Accept Assignment
          </Button>
          <Button
            mode="outlined"
            icon="close"
            style={styles.flexBtn}
            textColor="#e74c3c"
            onPress={() => navigation.goBack()}
          >
            Reject Assignment
          </Button>
        </View>

        {/* Status Cards */}
        <View style={styles.statusRow}>
          <Card style={styles.statusCard}>
            <Card.Content>
              <IconButton icon="progress-clock" size={24} iconColor="#2980b9" />
              <Text style={styles.statusText}>Pending Assignment</Text>
            </Card.Content>
          </Card>
          <Card style={styles.statusCard}>
            <Card.Content>
              <IconButton icon="calendar-clock" size={24} iconColor="#8e44ad" />
              <Text style={styles.statusText}>2 days</Text>
            </Card.Content>
          </Card>
          <Card style={styles.statusCard}>
            <Card.Content>
              <IconButton icon="alert-decagram" size={24} iconColor="#e67e22" />
              <Text style={styles.statusText}>High Priority</Text>
            </Card.Content>
          </Card>
          <Card style={styles.statusCard}>
            <Card.Content>
              <IconButton icon="progress-check" size={24} iconColor="#27ae60" />
              <Text style={styles.statusText}>6% Progress</Text>
            </Card.Content>
          </Card>
        </View>

        <AssessmentTabs />
      </ScrollView>
    </View>
  );
};

export default AssessmentDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  scrollContent: {
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2c3e50",
  },
  alertBox: {
    flexDirection: "row",
    backgroundColor: "#fceae9",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  alertTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#e74c3c",
  },
  alertText: {
    fontSize: 13,
    color: "#2c3e50",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  flexBtn: {
    flex: 1,
    marginHorizontal: 5,
  },
  statusRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statusCard: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  statusText: {
    fontSize: 13,
    color: "#2c3e50",
  },
});
