import React from "react";
import {ScrollView, StyleSheet, View } from "react-native";
import CustomHeader from "../../../components/customheader";
import DetailCard from "../../../components/detailCard";
import { appColorsCode } from "../../../styles/appColorsCode";
import DescriptionCard from "../../../components/descriptionCard";
import QuickActionCard from "../../../components/quickActionCard";
import { Button } from "react-native-paper";
import { useAppTheme } from "../../../hooks/colorTheme";



const AssessmentDetail = ({ navigation }: any) => {
    const theme = useAppTheme();
    const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="Assessment Detail"
        showRightIcon={false}
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
      padding:3,
      borderRadius:12,
    },
    contactButton: {
      flex: 1,
      marginLeft:4,
      padding:3,
       borderRadius:12,
    },
  });
