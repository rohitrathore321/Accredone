import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, IconButton, Divider, Button } from "react-native-paper";
import { useAppTheme } from "../../../hooks/colorTheme";
import CustomHeader from "../../../components/customheader";
import CustomIconButton from "../../../components/customIconButton";
import globalStyles from "../../../styles/globalStyles";
import DescriptionCard from "../../../components/descriptionCard";

const ResourceAssessments = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const menuItems = [
    { title: "Sarah Johnson", sub: "Lead Assessor",status:"Available" , icon: "bell" },
    { title: "Michael Chen", sub: "Technical Assessor",status:"Available" , icon: "bell" },
    { title: "Emma Wilson", sub: "Quality Assessor",status:"Busy" , icon: "bell" },
     { title: "David Lee", sub: "Environmental Assessor",status:"Available" , icon: "bell" },
  ];

  const activities = [
    { title: "Sarah Johnson", sub: "Lead Assessor",status:"Opening Meeting, File Review" , icon: "bell" },
    { title: "Michael Chen", sub: "Technical Assessor",status:"Technical Review, Closing Meeting" , icon: "bell" },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon
        onPress={() => navigation.goBack()}
        title="Resource Assignment"
        showRightIcon={false}
        showProfile={false}
      />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 2, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
       
        <DescriptionCard
          title="Assessment Team"
          subtitle="Assign team members to different activities in this assessment"
        />

      

<Card style={{ backgroundColor: theme.card ,marginBottom:16 ,borderRadius:15,marginTop:10}}>
  <Card.Content>
     <Text style={styles.sectionHeading}>Available Team Members</Text>
    {menuItems.map((item, index) => (
      <View key={index}>
        <View style={globalStyles.centerContent}>
          <View style={globalStyles.alignIcon}>
            <CustomIconButton
              iconName={item.icon}
              onPress={() => {}}
              height={60}
              width={60}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSub}>{item.sub}</Text>
              <Text
                style={[
                  styles.menuSub,
                  { color: item.status === "Available" ? "green" : theme.error },
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
          <IconButton icon="account-plus" size={24} iconColor={theme.primary} />
        </View>

        {index < menuItems.length - 1 && (
          <Divider
            style={{
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#D3D3D3",
            }}
          />
        )}
      </View>
    ))}
  </Card.Content>
</Card>


       <Card style={{backgroundColor:theme.card,borderRadius:15}}>
        <Card.Content>
           <Text style={styles.sectionHeading}>Assigned Team</Text>
          {activities.map((act, index) => (
            <View key={index}>
              <View style={[globalStyles.centerContent,{}]}>
                <View style={globalStyles.alignIcon}>
                  <CustomIconButton iconName={act.icon} onPress={() => { }} height={60} width={60} />
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.activityTitle}>{act.title}</Text>
                    <Text style={styles.activitySub}>{act.sub}</Text>
                     <Text style={[styles.menuSub,{color:theme.primary}]}>{act.status}</Text>
                  </View>
                </View>
                  <IconButton icon="close-circle" size={24} iconColor={theme.error} />
              </View>
              {index < activities.length &&  <Divider style={{ marginTop:10,marginBottom:10,backgroundColor: "#D3D3D3"  }} />}
            </View>
          ))}
        
        </Card.Content>
       </Card>
        <View style={{marginTop:10}}>
          <Button
            mode="contained"
            icon="content-save"
            onPress={() => console.log("Save Plan")}
            buttonColor={theme.primary}
            textColor="white"
            style={styles.contactButton}
          >
            Save Assignment
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResourceAssessments;

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
     contactButton: {
      flex: 1,
      marginLeft: 4,
      padding: 3,
      borderRadius: 12,
    },
  });
