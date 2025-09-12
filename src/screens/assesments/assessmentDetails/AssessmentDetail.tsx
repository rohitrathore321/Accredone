import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CustomHeader from "../../../components/customheader";
import DetailCard from "../../../components/detailCard";
import { appColorsCode } from "../../../styles/appColorsCode";
import DescriptionCard from "../../../components/descriptionCard";
import QuickActionCard from "../../../components/quickActionCard";


const AssessmentDetail = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="Assessment Detail"
        showRightIcon={false}  
        showProfile={false}   
      />
      <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>

        <DetailCard
          title="Question About Assessment"
          status="Open"
          statusColor={appColorsCode.orange}
          details={[
            { label: "Case Id", value: "Case-2024-001" },
            { label: "Type", value: "General Enquiry" },
            { label: "Priority", value: "Medium" },
            { label: "Assigned To", value: "Sarah John" },
            { label: "Created", value: "15 Jan, 2024" },
            { label: "Last Updated", value: "17 Jan, 2024" },
          ]}
        />

        <DescriptionCard
          title="Card Title"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam doloremque adipisci reprehenderit voluptate, voluptas assumenda eius debitis ea in, modi inventore corrupti. Hic ex, veritatis alias corporis quae libero ducimus."
        />

        <QuickActionCard
          actions={[
            { label: "Add Notes", icon: "note-plus", onPress: () => console.log("Notes") },
            { label: "Upload File", icon: "file-upload", onPress: () => console.log("Upload") },
            { label: "Schedule", icon: "calendar", onPress: () => console.log("Schedule") },
            { label: "Task", icon: "check-circle", onPress: () => console.log("Task") },
          ]}
        />
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
});
