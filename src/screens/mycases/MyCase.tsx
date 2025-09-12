import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customheader'
import { useAppTheme } from '../../hooks/colorTheme';
import { Card, Icon } from 'react-native-paper';
import { appColorsCode } from '../../styles/appColorsCode';
import CustomCard from '../../components/customCards';


const MyCase = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

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
      priorityStyle={getStatusStyle(item.status)}
      onPress={() => navigation.navigate("CaseDetails")}
      priorityBadge={false}
    />

  );


  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="My Cases"
        showRightIcon={false}
        showProfile={false}
      />

      <View style={styles.cardBox}>
        <Card style={styles.card}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Icon source="folder" size={25} color={theme.primary} />
            <Text style={[styles.txt, { marginTop: 5 }]}>12</Text>
            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>open</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Icon source="clock" size={25} color={theme.primary} />
            <Text style={[styles.txt, { marginTop: 5 }]}>12</Text>
            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>In Progress</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Icon source="check-circle" size={25} color={appColorsCode.green} />
            <Text style={[styles.txt, { marginTop: 5 }]}>12</Text>
            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>Resolved</Text>

          </Card.Content>
        </Card>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />


    </View>
  )
}

export default MyCase

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    cardBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      marginHorizontal: 16,

    },
    card: {
      width: '30%',
      height: 120,
      justifyContent: 'center',
      backgroundColor: theme.card,
      borderRadius: 15,
    },
    txt: {
      color: theme.text,
      fontFamily: 'Poppins-Regular',
      // textAlign: 'center',
      fontSize: 14,
    },
    menuCard: {
      marginVertical: 6,
      borderRadius: 15,
      elevation: 5,
      backgroundColor: theme.card,
    },
    tag: {
      paddingVertical: 3,
      paddingHorizontal: 8,
      borderRadius: 15,
    },
  })