import React, { useState } from "react";
import {ScrollView, StyleSheet, Text, View } from "react-native";
import CustomHeader from "../../../components/customheader";
import DetailCard from "../../../components/detailCard";
import { appColorsCode } from "../../../styles/appColorsCode";
import DescriptionCard from "../../../components/descriptionCard";
import QuickActionCard from "../../../components/quickActionCard";
import { Button, Card } from "react-native-paper";
import { useAppTheme } from "../../../hooks/colorTheme";
import {ProgressView} from "@react-native-community/progress-view";
import CustomModal from "../../../components/CustomModal";


const AssessmentDetail = ({ navigation }: any) => {
    const theme = useAppTheme();
    const styles = getStyles(theme);
  const [modalVisible, setModalVisible] = useState(false);

  const modalItems = [
  { id: "1", icon: "calendar-edit", label: "Edit Assessment", onPress: () => navigation.navigate("AssessmentPlanning") },
  { id: "2", icon: "content-duplicate", label: "Duplicate Assessment", onPress: () => console.log("Duplicate") },
  { id: "3", icon: "share-variant", label: "Share Assessment", onPress: () => console.log("Share") },
  { id: "4", icon: "file-export", label: "Export Assessment", onPress: () => console.log("Export") },
  { id: "5", icon: "archive-arrow-down", label: "Archive Assessment", onPress: () => navigation.navigate("ResourceAssessments") },
  { id: "6", icon: "delete", label: "Delete Assessment", onPress: () => navigation.navigate("ResourceAssessments") },
  ];
  
  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="Assessment Detail"
        showRightIcon={true}
        rightIconName="dots-vertical"
        rightIconOnpress={() => setModalVisible(true)}
        showProfile={false}

      />
      <ScrollView
        style={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={false}>
        <DetailCard
          title="ISO 14001 Assessment"
          status="active"
          statusColor={appColorsCode.green}
          details={[
            {label: 'Assessment ID', value: 'TAS-001'},
            {label: 'Your Role', value: 'Lead Assessor'},
            {label: 'Client', value: 'Manufacturing Corp'},
            {label: 'Location', value: 'Oslo, Norway'},
            {label: 'Assessment Date', value: '2024-11-27'},
            {label: 'Duration', value: '3 days'},
            {label: 'Priority', value: 'high Priority'},
          ]}
        />

        <DescriptionCard
          title="Assessment Description"
          subtitle="Environmental management system assessment for manufacturing facility with focus on sustainability practices. This assessment will evaluate the organization's compliance with ISO 14001:2015 requirements and identify opportunities for environmental performance improvement."
        />

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.heading}>Assessment Progress</Text>

            <View style={styles.row}>
              <Text style={styles.text}>Planning Phase</Text>
              <Text style={styles.text}>100%</Text>
            </View>
            <ProgressView
              progressTintColor="#5faa5f"
              trackTintColor="#c8c8ce"
              progress={1}
            />

            <View style={styles.row}>
              <Text style={styles.text}>Assessment Phase</Text>
              <Text style={styles.text}>75%</Text>
            </View>
            <ProgressView
              progressTintColor="#198eee"
              trackTintColor="#c8c8ce"
              progress={0.7}
            />

            <View style={styles.row}>
              <Text style={styles.text}>Reporting Phase</Text>
              <Text style={styles.text}>25%</Text>
            </View>
            <ProgressView
              progressTintColor="orange"
              trackTintColor="#c8c8ce"
              progress={0.2}
            />
            <View style={styles.row}>
              <Text style={styles.text}>Certification</Text>
              <Text style={styles.text}>0%</Text>
            </View>
            <ProgressView
              progressTintColor="#5faa5f"
              trackTintColor="#c8c8ce"
              progress={0}
            />
          </Card.Content>
        </Card>

        <QuickActionCard
          actions={[
            {
              label: 'Planning',
              icon: 'calendar-month',
              onPress: () => console.log('Planning'),
            },
            {
              label: 'Documents',
              icon: 'file-document',
              onPress: () => console.log('Documents'),
            },
            {
              label: 'Notes',
              icon: 'note-text-outline',
              onPress: () => console.log('Notes'),
            },
            {
              label: 'Report',
              icon: 'chart-bar',
              onPress: () => console.log('Report'),
            },
          ]}
        />

        <View style={styles.buttonRow}>
          <Button
            mode="contained"
            icon="calendar-month"
            onPress={() => navigation.navigate('AssessmentPlanning')}
            buttonColor={theme.primary}
            textColor="white"
            style={styles.signInButton}>
            Plan Assessment
          </Button>

          <Button
            mode="contained"
            icon="account-multiple"
            onPress={() => navigation.navigate('ResourceAssessments')}
            buttonColor={appColorsCode.purple}
            textColor="white"
            style={styles.contactButton}>
            Assign Resource
          </Button>
        </View>
      </ScrollView>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Assessment Options"
        items={modalItems}
      />
    </View>
  );
};

export default AssessmentDetail;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    buttonRow: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    card: {
      backgroundColor: theme.card,
      borderRadius: 12,
      marginTop:8,
      marginBottom:8,
    },
    
    heading: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: theme.text,
    },
    text: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: theme.text,
    },
    row:{
    flexDirection:'row',
    justifyContent:'space-between',
           },
  });
