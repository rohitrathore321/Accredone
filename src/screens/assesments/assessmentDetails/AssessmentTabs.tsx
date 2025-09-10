import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Card, Icon, IconButton } from "react-native-paper";

const TABS = ["Overview", "Team", "Criteria", "Obligations", "Documents", "History"];

const AssessmentTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );

  const SectionHeading = ({ icon, title }: { icon: string; title: string }) => (
    <View style={styles.sectionHeader}>
      <Icon source={icon} size={20} color="#2980b9" />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const GradientAvatar = ({initials}: {initials: string}) => (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.avatar}>
      <Text style={styles.avatarText}>{initials}</Text>
    </LinearGradient>
  );

  const StatusBadge = ({ text, color }: { text: string; color: string }) => (
    <View style={[styles.statusBadge, { backgroundColor: color + "20" }]}>
      <Text style={{ color, fontSize: 12, fontWeight: "600" }}>{text}</Text>
    </View>
  );


  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <Card style={styles.card}>
              <Card.Content>
                <SectionHeading
                  icon="file-document"
                  title="Assessment Information"
                />
                <InfoRow label="Assessment ID" value="2025-524s" />
                <InfoRow label="Type" value="Surveillance" />
                <InfoRow label="Date" value="2024-07-28" />
                <InfoRow label="Duration" value="2 days" />
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Content>
                <SectionHeading
                  icon="office-building"
                  title="Organization Details"
                />
                <InfoRow label="Client" value="ACCDE Certification Body" />
                <InfoRow label="Location" value="Oslo, Norway" />
                <InfoRow label="Contact" value="assessment@accde.no" />
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Content>
                <SectionHeading icon="account-tie" title="Assigned Assessor" />

                <View style={styles.teamRow}>
                  <GradientAvatar initials="RK" />
                  <View style={styles.memberInfo}>
                    <Text style={styles.name}>Rakesh Kumar</Text>
                    <Text style={styles.subText}>Lead Assessor</Text>
                  </View>
                  <StatusBadge text="Lead Assessor" color="#a5a7a6" />
                </View>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Content>
                <SectionHeading icon="calendar" title="Key Dates" />
                <InfoRow label="Assignment Date" value="9/9/2025" />
                <InfoRow label="Due Date" value="Jul 30, 2024" />
                <InfoRow label="Report Due" value="Aug 5, 2024" />
              </Card.Content>
            </Card>
          </>
        );

      case 'Team':
        return (
          <Card style={styles.card}>
            <Card.Content>
              <SectionHeading icon="account-group" title="Assessment Team" />

              <View style={styles.teamRow}>
                <GradientAvatar initials="RK" />
                <View style={styles.memberInfo}>
                  <Text style={styles.name}>Rakesh Kumar</Text>
                  <Text style={styles.subText}>Lead Assessor</Text>
                </View>
                <StatusBadge text="Assigned" color="#2980b9" />
              </View>

              <View style={styles.teamRow}>
                <GradientAvatar initials="SJ" />
                <View style={styles.memberInfo}>
                  <Text style={styles.name}>Sarah Johnson</Text>
                  <Text style={styles.subText}>Technical Expert</Text>
                </View>
                <StatusBadge text="Confirmed" color="#27ae60" />
              </View>

              <View style={styles.teamRow}>
                <GradientAvatar initials="MC" />
                <View style={styles.memberInfo}>
                  <Text style={styles.name}>Michael Chen</Text>
                  <Text style={styles.subText}>Observer</Text>
                </View>
                <StatusBadge text="Pending" color="#e67e22" />
              </View>
            </Card.Content>
          </Card>
        );

      case 'Criteria':
        return (
          <Card style={styles.card}>
            <Card.Content>
              <SectionHeading
                icon="check-decagram"
                title="Assessment Criteria"
              />

              <View style={styles.teamRow}>
                <View style={styles.memberInfo}>
                  <Text style={styles.name}>ISO 14001:2015</Text>
                  <Text style={styles.subText}>
                    Environmental Management Systems
                  </Text>
                </View>
                <StatusBadge text="Active" color="#27ae60" />
              </View>

              <View style={styles.teamRow}>
                <View style={styles.memberInfo}>
                  <Text style={styles.name}>ISO 9001:2015</Text>
                  <Text style={styles.subText}>Quality Management Systems</Text>
                </View>
                <StatusBadge text="Active" color="#27ae60" />
              </View>
            </Card.Content>
          </Card>
        );

      case 'Obligations':
        return (
          <Card style={styles.card}>
            <Card.Content>
              <SectionHeading
                icon="clipboard-list"
                title="Assessment Obligations"
              />

              <View style={styles.teamRow}>
                <View style={styles.memberInfo}>
                  <Text style={styles.name}>
                    Environmental Impact Assessment
                  </Text>
                  <Text style={styles.subText}>
                    Complete environmental impact assessment
                  </Text>
                </View>
                <StatusBadge text="Pending" color="#e67e22" />
              </View>
              <InfoRow label="Scope" value="Obligation EMS" />
              <InfoRow label="Type" value="Scheme Report" />

              <View style={styles.divider} />
              <View style={styles.teamRow}>
                <View style={styles.memberInfo}>
                  <Text style={styles.name}>Quality Management Systems</Text>
                  <Text style={styles.subText}>
                    Review quality procedures and documentation
                  </Text>
                </View>
                <StatusBadge text="In Progress" color="#707070" />
              </View>
              <InfoRow label="Scope" value="Obligation EMS" />
              <InfoRow label="Type" value="Scheme Report" />
            </Card.Content>
          </Card>
        );

      case 'Documents':
        return (
          <Card style={styles.card}>
            <Card.Content>
              <SectionHeading
                icon="file-download"
                title="Assessment Documents"
              />

              <View style={styles.teamRow}>
                <Icon source="file-document" size={22} color="#a4cbf1" />
                <View style={[styles.memberInfo, {marginLeft: 9}]}>
                  <Text style={styles.name}>Assessment Plan.pdf</Text>
                  <Text style={styles.subText}>2.4 MB.PDF</Text>
                </View>
                <Icon source="download" size={22} color="#000000" />
              </View>

              <View style={styles.teamRow}>
                <Icon source="file-document" size={22} color="#a4cbf1" />
                <View style={[styles.memberInfo, {marginLeft: 9}]}>
                  <Text style={styles.name}>Previous Report.pdf</Text>
                  <Text style={styles.subText}>1.8 MB.PDF</Text>
                </View>
                <Icon source="download" size={22} color="#000000" />
              </View>

              <View style={styles.teamRow}>
                <Icon source="file-document" size={22} color="#a4cbf1" />
                <View style={[styles.memberInfo, {marginLeft: 9}]}>
                  <Text style={styles.name}>Checklist.xlsx</Text>
                  <Text style={styles.subText}>156 KB.Excel</Text>
                </View>
                <Icon source="download" size={22} color="#000000" />
              </View>
            </Card.Content>
          </Card>
        );

      case 'History':
        return (
          <Card style={styles.card}>
            <Card.Content>
              <SectionHeading icon="history" title="Assessment History" />
              <View style={styles.divider} />
              <View
                style={styles.historyRow}>
                <Text style={styles.name}>Assessment Assigned</Text>
                <Text style={styles.name}>2024-07-25</Text>
              </View>
              <Text style={styles.subText}>by System</Text>

              <View style={styles.divider} />
              <View
                style={styles.historyRow}>
                <Text style={styles.name}>Assessment Created</Text>
                <Text style={styles.name}>2024-07-25</Text>
              </View>
              <Text style={styles.subText}>by Admin</Text>

              <View style={styles.divider} />
              <View
                style={styles.historyRow}>
                <Text style={styles.name}>Client Request received</Text>
                <Text style={styles.name}>2024-07-25</Text>
              </View>
              <Text style={styles.subText}>by Client Services</Text>
            </Card.Content>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <View>
      {/* Tabs */}
      <FlatList
        horizontal
        data={TABS}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === item && styles.activeTabBtn]}
            onPress={() => setActiveTab(item)}
          >
            <Text style={[styles.tabText, activeTab === item && styles.activeTabText]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        style={{ marginVertical: 10 }}
      />

      {/* Tab Content */}
      {renderTabContent()}
    </View>
  );
};

export default AssessmentTabs;

/** --- Styles --- **/
const styles = StyleSheet.create({
  tabBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#ecf0f1",
  },
  activeTabBtn: {
    backgroundColor: "#0748fa",
  },
  tabText: {
    fontSize: 14,
    color: "#2c3e50",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#34495e",
    marginLeft: 5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#7f8c8d",
  },
  infoValue: {
    fontSize: 13,
    color: "#2c3e50",
    flexWrap: "wrap",
  },
  divider: {
    height: 1,
    backgroundColor: "#ecf0f1",
    marginVertical: 8,
  },
  /** Custom UI **/
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  teamRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  memberInfo: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  subText: {
    fontSize: 12,
    color: "#7f8c8d",
  },
  criteriaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  docRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  docText: {
    flex: 1,
    marginLeft: 8,
    color: "#2c3e50",
    fontSize: 14,
  },
  historyRow:{
    flexDirection: 'row',
     justifyContent: 'space-between'
  },
});
