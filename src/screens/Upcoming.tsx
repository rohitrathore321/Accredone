import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {Icon} from "react-native-paper";

const upcomingData = [

  {
    id: "1",
    title: "ISO 14001 Surveillance",
    priority: "High",
    priorityColor: "#FF6B6B", // red
    company: "Tetra Pak Processing",
    short: "TP",
    date: "2024-07-15",
    time: "09:00",
    mode: "On-Site",
  },
  {
    id: "2",
    title: "ISO 9001 Reassessment",
    priority: "Medium",
    priorityColor: "#9E9E9E", // gray
    company: "Nordic Industries",
    short: "NI",
    date: "2024-07-16",
    time: "14:00",
    mode: "Remote",
  },
  {
    id: "3",
    title: "ISO 45001 Initial Assessment",
    priority: "High",
    priorityColor: "#FF6B6B", // red
    company: "SafeWork Solutions",
    short: "SS",
    date: "2024-07-18",
    time: "10:30",
    mode: "On-Site",
  },
];

const recentData = [
  {
    id: "1",
    action: "Completed Assessment",
    title: "ISO 14001 - GreenTech Ltd",
    timeAgo: "2 hours ago",
    icon: "check-circle",
    color: "#10B981", // green
  },
  {
    id: "2",
    action: "Report Submitted",
    title: "ISO 9001 - Manufacturing Corp",
    timeAgo: "1 day ago",
    icon: "file-document",
    color: "#3B82F6", // blue
  },
  {
    id: "3",
    action: "Non-conformity Raised",
    title: "ISO 45001 - SafeWork Inc",
    timeAgo: "2 days ago",
    icon: "alert-circle",
    color: "#F59E0B", // amber
  },
  {
    id: "4",
    action: "Certificate Approved",
    title: "ISO 27001 - TechSec Ltd",
    timeAgo: "3 days ago",
    icon: "certificate",
    color: "#6366F1", // indigo
  },
];

const Upcoming = () => {
  const renderUpcomingCard = ({ item }: any) => (
    <TouchableOpacity style={[styles.card, { borderLeftColor: item.priorityColor }]}>
      <View style={styles.leftCircle}>
        <Text style={styles.shortText}>{item.short}</Text>
      </View>

      {/* Info section */}
      <View style={styles.info}>
        {/* Title + Priority in same row */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={[styles.priorityBadge, { backgroundColor: item.priorityColor }]}>
            <Text style={styles.priorityText}>{item.priority}</Text>
          </View>
        </View>

        <Text style={styles.company}>{item.company}</Text>
        <Text style={styles.datetime}>
          {item.date} • {item.time} • {item.mode}
        </Text>
      </View>

      {/* Navigation icon */}
      <Icon source="chevron-right" size={28} color="#444" />
    </TouchableOpacity>
  );

  const renderRecentCard = ({ item }: any) => (
    <View style={styles.recentCard}>
      <View style={[styles.iconCircle, { backgroundColor: item.color + "22" }]}>
        <Icon source={item.icon} size={22} color={item.color} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.recentAction}>{item.action}</Text>
        <Text style={styles.recentTitle}>{item.title}</Text>
        <Text style={styles.recentTime}>{item.timeAgo}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Upcoming Section */}
      <View style={styles.header}>
        <Text style={styles.heading}>Upcoming Assessments</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={upcomingData}
        keyExtractor={(item) => "upcoming-" + item.id}
        renderItem={renderUpcomingCard}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      {/* Recent Activity Section */}
      <View style={styles.header}>
        <Text style={styles.heading}>Recent Activity</Text>
      </View>

      <FlatList
        data={recentData}
        keyExtractor={(item) => "recent-" + item.id}
        renderItem={renderRecentCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
     marginHorizontal: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 8,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3B82F6",
  },
  // Upcoming Cards
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    // elevation: 1,
    borderLeftWidth: 4,
  },
  leftCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E0E7FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  shortText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E3A8A",
  },
  info: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    flex: 1,
    paddingRight: 8,
  },
  company: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  datetime: {
    fontSize: 13,
    color: "#777",
  },
  priorityBadge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  priorityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  // Recent Activity Cards
  recentCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  recentAction: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  recentTitle: {
    fontSize: 14,
    color: "#444",
    marginBottom: 2,
  },
  recentTime: {
    fontSize: 12,
    color: "#777",
  },
});
