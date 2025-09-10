import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Card, Icon, IconButton } from "react-native-paper";
import CustomHeader from "../../components/customheader";

const Assessments = ({navigation}:any) => {
  const data = [
    {
      id: "1",
      cardCode: "TA-001",
      company: "Allied Services",
      title: "Report Reviewer - ISO 9001",
      subheading:
        "Quality management system review for service organization with international operations.",
      date: "Nov 27, 2024",
      location: "Stockholm, Sweden",
      time: "2 days",
      status: "Active",
      priority: "Medium",
      isoCode: "ISO 9001",
      short: "AS",
    },
    {
      id: "2",
      cardCode: "2024-145",
      company: "Baltic Industries",
      title: "Technical Expert - ISO 14001",
      subheading:
        "Environmental management system assessment for renewable energy sector.",
      date: "Aug 25, 2024",
      location: "Riga, Latvia",
      time: "5 days",
      status: "Completed",
      priority: "Low",
      isoCode: "ISO 14001",
      short: "BI",
    },
    {
      id: "3",
      cardCode: "2024-144",
      company: "Mediterranean Co",
      title: "Observer - ISO 9001",
      subheading:
        "Quality management system observation for automotive manufacturing.",
      date: "Jul 18, 2024",
      location: "Rome, Italy",
      time: "3 days",
      status: "Active",
      priority: "High",
      isoCode: "ISO 9001",
      short: "MC",
    },
  ];

  const summaryCards = [
    {
      id: "c1",
      title: "Completed",
      value: "3",
      icon: "check-circle",
      color: "#16a34a",
    },
    {
      id: "c2",
      title: "Pending",
      value: "2",
      icon: "clock-outline",
      color: "#f59e0b",
    },
    {
      id: "c3",
      title: "Active Assessments",
      value: "5",
      icon: "clipboard-list",
      color: "#2563eb",
    },
  ];

  const renderItem = ({ item }: any) => (
    <Card style={styles.card} onPress={()=>navigation.navigate('AssessmentDetail')}>
      <View style={styles.row}>
        {/* Circle with Short Code */}
        <Avatar.Text size={48} label={item.short} style={styles.avatar} />

        {/* Card Info */}
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.company}>{item.company}</Text>
          <Text style={styles.subheading}>{item.subheading}</Text>

          {/* Date + Location + Time */}
          <View style={styles.metaRow}>
            <IconButton icon="calendar" size={18} iconColor="#374151" />
            <Text style={styles.meta}>{item.date}</Text>
          </View>
          <View style={styles.metaRow}>
            <IconButton icon="map-marker" size={18} iconColor="#374151" />
            <Text style={styles.meta}>{item.location}</Text>
          </View>
          <View style={styles.metaRow}>
            <IconButton icon="clock-outline" size={18} iconColor="#374151" />
            <Text style={styles.meta}>{item.time}</Text>
          </View>

          {/* Status + Priority + ISO */}
          <View style={styles.tagRow}>
            <View style={[styles.tag, { backgroundColor: "#d1fae5" }]}>
              <Text style={styles.tagText}>{item.status}</Text>
            </View>

            <View style={[styles.tag, { backgroundColor: "#fee2e2" }]}>
              <Text style={styles.tagText}>{item.priority}</Text>
            </View>

            <View style={[styles.tag, { backgroundColor: "#e0f2fe" }]}>
              <Text style={styles.tagText}>{item.isoCode}</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
        <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="My Assessments"
         showNotification={false}  
        showProfile={false}
      />
      {/* <Text style={styles.heading}>My Assessments</Text> */}
      <Text style={styles.subheadingText}>
        Manage your assessment assignments and progress
      </Text>

      {/* Search */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search assessments..."
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Icon source="filter" size={25} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Summary */}
      <View style={styles.summaryRow}>
        {summaryCards.map((s: any) => (
          <Card key={s.id} style={styles.summaryCard}>
            <View style={styles.summaryContent}>
              <IconButton icon={s.icon} iconColor={s.color} size={25} />
              <Text style={styles.summaryValue}>{s.value}</Text>
              <Text style={styles.summaryTitle}>{s.title}</Text>
            </View>
          </Card>
        ))}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    marginHorizontal: 16,
  },
  subheadingText: {
    color: 'gray',
    marginBottom: 8,
    marginHorizontal: 16,
    marginTop:3,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#a8a5a5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    marginRight: 9,
  },
  searchBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 120,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
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
  card: {
    marginBottom: 16,
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
});
