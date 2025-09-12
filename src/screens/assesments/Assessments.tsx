import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Card, Icon, IconButton } from "react-native-paper";
import CustomHeader from "../../components/customheader";
import { useAppTheme } from "../../hooks/colorTheme";
import CustomTextInput from "../../components/customTextInput";
import CustomCard from "../../components/customCards";
import CustomModal from "../../components/CustomModal";

const Assessments = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const modalItems = [
    { id: "1", icon: "plus-circle", label: "Create New Assessment", onPress: () => navigation.navigate("AssessmentPlanning") },
    { id: "2", icon: "content-duplicate", label: "Import Assessment", onPress: () => console.log("Duplicate") },
    { id: "3", icon: "filter-variant", label: "Filter Assessment", onPress: () => console.log("Share") },
    { id: "4", icon: "file-export", label: "Export All", onPress: () => console.log("Export") },
    { id: "5", icon: "cog", label: "Assessment Settings", onPress: () => navigation.navigate("ResourceAssessments") },
  ];

  const data = [
    {
      id: "1",
      title: "ISO 14001 Assessment",
      status: "Active",
      assessmentId: "TAS-001",
      role: "Lead Assessor",
      client: "Manufacturing Corp",
      location: "Oslo, Norway",
      date: "2024-11-27",
      duration: "3 days",
      priority: "High Priority",
      icon: "leaf",
    },
    {
      id: "2",
      title: "ISO 14001 Assessment",
      status: "Pending",
      assessmentId: "TAS-002",
      role: "Lead Assessor",
      client: "Manufacturing Corp",
      location: "Oslo, Norway",
      date: "2024-11-27",
      duration: "3 days",
      priority: "Medium Priority",
      icon: "leaf",
    },
    {
      id: "3",
      title: "ISO 14001 Assessment",
      status: "Completed",
      assessmentId: "TAS-003",
      role: "Lead Assessor",
      client: "Manufacturing Corp",
      location: "Oslo, Norway",
      date: "2024-11-27",
      duration: "3 days",
      priority: "Low Priority",
      icon: "leaf",
    },
  ];

  const summaryCards = [
    {
      id: "c1",
      title: "Active",
      value: "3",

    },
    {
      id: "c2",
      title: "Pending",
      value: "2",

    },
    {
      id: "c3",
      title: "Completed",
      value: "5",

    },
  ];

  const getStatusStyle = (status: string) => {
    if (status === "Active") {
      return {
        container: { backgroundColor: "rgba(34,197,94,0.1)" },
      };
    } else if (status === "Pending") {
      return {
        container: { backgroundColor: "rgba(245,158,11,0.1)" },
      };
    } else if (status === "Completed") {
      return {
        container: { backgroundColor: "rgba(56,189,248,0.1)" },
        text: { color: "#0ea5e9" },
      };
    } else {
      return {
        container: { backgroundColor: "rgba(107,114,128,0.1)" },
        text: { color: "#6b7280" },
      };
    }
  };

  const getPriorityStyle = (priority: string) => {
    if (priority.includes("High")) {
      return { container: { backgroundColor: "rgba(220,38,38,0.1)" }, text: { color: "#dc2626" } };
    } else if (priority.includes("Medium")) {
      return { container: { backgroundColor: "rgba(245,158,11,0.1)" }, text: { color: "#d97706" } };
    } else {
      return { container: { backgroundColor: "rgba(22,163,74,0.1)" }, text: { color: "#16a34a" } };
    }
  };


  const renderItem = ({ item }: any) => (
    <CustomCard
      title={item.title}
      status={item.status}
      assessmentId={item.assessmentId}
      role={item.role}
      client={item.client}
      location={item.location}
      date={item.date}
      duration={item.duration}
      priority={item.priority}
      icon={item.icon}
      statusStyle={getStatusStyle(item.status)}
      priorityStyle={getPriorityStyle(item.priority)}
      onPress={() => navigation.navigate("AssessmentDetail")}
      priorityBadge={true}
    />
  );


  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="My Assessments"
        showRightIcon={true}
        rightIconName="plus"
        rightIconOnpress={() => setModalVisible(true)}
        showProfile={false}
      />

      {/* Summary */}
      <View style={styles.searchRow}>
        <CustomTextInput
          placeholder="Search assessments..."
          value={search}
          onChangeText={setSearch}
          leftIconName="magnify"
          containerStyle={{ flex: 1, marginRight: 10 }}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Icon source="filter-variant" size={25} color={theme.primary} />
        </TouchableOpacity>
      </View>


      <View style={styles.summaryRow}>
        {summaryCards.map((s: any) => (
          <Card key={s.id} style={styles.summaryCard}>
            <View style={styles.summaryContent}>
              <Text style={styles.summaryValue}>{s.value}</Text>
              <Text style={styles.summaryTitle}>{s.title}</Text>
            </View>
          </Card>
        ))}
      </View>
      {/* Assessments List */}

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // contentContainerStyle={{ paddingBottom: 20 }}
          scrollEnabled={false}
        />
      </ScrollView>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Assessment Actions"
        items={modalItems}
      />
    </View>

  );
};

export default Assessments;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    searchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 16,

    },
    searchInput: {
      flexGrow: 1,
      borderWidth: 1,
      borderColor: '#a8a5a5',
      borderRadius: 12,
      backgroundColor: '#fff',
      marginRight: 9,
    },
    searchBtn: {
      width: 50,
      height: 50,
      borderRadius: 12,
      backgroundColor: theme.card,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
      marginTop: -16,
      // elevation:1,
    },

    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginBottom: 16,
    },
    summaryCard: {
      width: 110,
      height: 80,
      borderRadius: 12,
      backgroundColor: theme.card,
      elevation: 3,
      padding: 8,
    },
    summaryContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    summaryValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
    },
    summaryTitle: {
      fontSize: 12,
      color: theme.text,
      textAlign: 'center',
      marginTop: 2,
    },

  });
