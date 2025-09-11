import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Card, Icon, IconButton } from "react-native-paper";
import CustomHeader from "../../components/customheader";
import { useAppTheme } from "../../hooks/colorTheme";
import CustomTextInput from "../../components/customTextInput";

const Assessments = ({navigation}:any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
    const [search, setSearch] = useState("");
    
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
    status: "Active",
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
    status: "Active",
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

 const getPriorityStyle = (priority: string) => {
    if (priority.includes("High")) {
      return { bg: "rgba(220,38,38,0.1)", color: "#dc2626" }; // red
    } else if (priority.includes("Medium")) {
      return { bg: "rgba(245,158,11,0.1)", color: "#d97706" }; // amber
    } else {
      return { bg: "rgba(22,163,74,0.1)", color: "#16a34a" }; // green
    }
  };

const renderItem = ({ item }: any) => {
    const priorityStyle = getPriorityStyle(item.priority);

    return (
      <Card
        style={styles.card}
        onPress={() => navigation.navigate("AssessmentDetail")}
      >
        <View style={styles.row}>
          {/* Left icon */}
          <View style={styles.iconWrapper}>
            <Icon source={item.icon} size={28} color="#2563eb" />
          </View>

          <View style={{ flex: 1 }}>
            {/* Title row */}
            <View style={styles.rowBetween}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            {/* Assessment ID + Role */}
            <View style={styles.rowBetween}>
              <Text style={styles.metaLeft}>
                {item.assessmentId} · {item.role}
              </Text>
              <Icon source="chevron-right" size={20} color="#6b7280" />
            </View>

            {/* Client + Location + Date */}
            <View style={styles.rowBetween}>
              <Text style={styles.metaLeft}>
                {item.client} · {item.location}
              </Text>
              <Text style={styles.metaRight}>{item.date}</Text>
            </View>

            {/* Priority + Duration */}
            <View style={styles.rowBetween}>
              <View
                style={[
                  styles.priorityBadge,
                  { backgroundColor: priorityStyle.bg },
                ]}
              >
                <Text
                  style={[
                    styles.priorityText,
                    { color: priorityStyle.color },
                  ]}
                >
                  {item.priority}
                </Text>
              </View>
              <Text style={styles.metaRight}>{item.duration}</Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
        <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="My Assessments"
       showRightIcon={true}  
       rightIconName ="plus"
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

      {/* Assessments List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Assessments;

const getStyles = (theme: any) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop:16,
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
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation:3,
    marginTop:-16,
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
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
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
  },
  summaryTitle: {
    fontSize: 12,
    color: '#4b5563',
    textAlign: 'center',
    marginTop: 2,
  },
  avatar: {
    backgroundColor: '#2563eb',
    marginRight: 12,
  },
  info: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4b5563',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meta: {
    fontSize: 12,
    color: '#374151',
  },
  tagRow: {
    flexDirection: 'row',
    marginTop: 8,
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  card: {
  marginBottom: 16,
  borderRadius: 12,
  padding: 12,
  elevation: 3,
  backgroundColor: "#fff",
  marginHorizontal: 16,
},
row: {
  flexDirection: "row",
  alignItems: "flex-start",
},
rowBetween: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 6,
},
iconWrapper: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "#e0f2fe",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12,
 alignSelf:'center',
},

statusBadge: {
  paddingHorizontal: 8,
  paddingVertical: 3,
  borderRadius: 12,
  backgroundColor: "rgba(37, 99, 235, 0.1)", // transparent
},
statusText: {
  fontSize: 12,
  color: "#2563eb",
  fontWeight: "500",
},
priorityBadge: {
  paddingHorizontal: 8,
  paddingVertical: 3,
  borderRadius: 12,
  backgroundColor: "rgba(220, 38, 38, 0.1)", // transparent red
},
priorityText: {
  fontSize: 12,
  fontWeight: "500",
},
metaLeft: {
  fontSize: 13,
  color: "#374151",
  flexShrink: 1,
},
metaRight: {
  fontSize: 13,
  color: "#6b7280",
},

});
