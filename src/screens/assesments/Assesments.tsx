import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Card, Avatar, IconButton } from "react-native-paper";

const Assessments = () => {
  
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

  const renderItem = ({ item }:any) => (
    <Card style={styles.card} mode="elevated">
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
            <IconButton icon="calendar" size={18} />
            <Text style={styles.meta}>{item.date}</Text>
          </View>
          <View style={styles.metaRow}>
            <IconButton icon="map-marker" size={18} />
            <Text style={styles.meta}>{item.location}</Text>
          </View>
          <View style={styles.metaRow}>
            <IconButton icon="clock-outline" size={18} />
            <Text style={styles.meta}>{item.time}</Text>
          </View>

          {/* Status + Priority + ISO */}
          <View style={styles.tagRow}>
            <Text style={[styles.tag, { backgroundColor: "#d1fae5" }]}>
              {item.status}
            </Text>
            <Text style={[styles.tag, { backgroundColor: "#fee2e2" }]}>
              {item.priority}
            </Text>
            <Text style={[styles.tag, { backgroundColor: "#e0f2fe" }]}>
              {item.isoCode}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Assessments</Text>
      <Text style={styles.subheadingText}>
        Manage your assessment assignments and progress
      </Text>

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
    padding: 16,
    backgroundColor:"#f5f6fa",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subheadingText: {
    color: "gray",
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 16,
    padding: 12,
    elevation: 3,
    backgroundColor:"#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    backgroundColor: "#2563eb",
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4b5563",
    marginBottom: 6,
  },
  subheading: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  meta: {
    fontSize: 12,
    color: "#374151",
  },
  tagRow: {
    flexDirection: "row",
    marginTop: 8,
    flexWrap: "wrap",
  },
  tag: {
    fontSize: 12,
    marginRight: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    overflow: "hidden",
    fontWeight: "500",
  },
});
