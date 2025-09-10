import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/customheader';
import { Card } from 'react-native-paper';
import { useAppTheme } from '../../hooks/colorTheme';
import globalStyles from '../../styles/globalStyles';
import { appColorsCode } from '../../styles/appColorsCode';

// Dummy Data
const cases = [
    {
        id: 'CASE-2024-008',
        title: 'Multi-site certification inquiry',
        createdBy: 'John Doe',
        date: 'Jan 19, 2024',
        messages: 4,
        status: 'inProgress',
        priority: 'High',
    },
    {
        id: 'CASE-2024-007',
        title: 'Certification renewal process',
        createdBy: 'Mark Wilson',
        date: 'Jan 22, 2024',
        messages: 1,
        status: 'Open',
        priority: 'Medium',
    },
    {
        id: 'CASE-2024-006',
        title: 'Delayed assessment report',
        createdBy: 'Lisa Anderson',
        date: 'Jan 18, 2024',
        messages: 8,
        status: 'inProgress',
        priority: 'High',
    },
    {
        id: 'CASE-2024-005',
        title: 'ISO 14001 certification query',
        createdBy: 'Robert Taylor',
        date: 'Jan 20, 2024',
        messages: 2,
        status: 'Open',
        priority: 'Medium',
    },
    {
        id: 'CASE-2024-002',
        title: 'New accreditation application',
        createdBy: 'Michael Chen',
        date: 'Jan 10, 2024',
        messages: 7,
        status: 'inProgress',
        priority: 'High',
    },
];

const getStatusColor = (status: any) => {
    switch (status) {
        case 'Open':
            return '#007bff'; // blue
        case 'inProgress':
            return '#f0ad4e'; // orange
        default:
            return '#6c757d'; // gray
    }
};

const getPriorityColor = (priority: any) => {
    switch (priority) {
        case 'High':
            return '#dc3545'; // red
        case 'Medium':
            return '#ffc107'; // yellow
        default:
            return '#6c757d'; // gray
    }
};

const CaseItem = ({ item, styles, navigation }: any) => (
    <Card style={styles.card}>
        <Card.Content>
            <View style={globalStyles.centerContent}>
                <Text style={styles.caseId} onPress={() => { navigation.navigate('CaseDetails') }}>{item.id}</Text>
                <View style={styles.badgeRow}>
                    <View style={[styles.badge, { backgroundColor: getStatusColor(item.status) }]}>
                        <Text style={styles.badgeText}>{item.status}</Text>
                    </View>
                    <View style={[styles.badge, { backgroundColor: getPriorityColor(item.priority) }]}>
                        <Text style={styles.badgeText}>{item.priority}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>
                Created by : {item.createdBy}{' - '}{item.date}{' - '}{item.messages} messages
            </Text>
        </Card.Content>
    </Card >
);

const MyCases = ({ navigation }: any) => {
    const colorTheme = useAppTheme();
    const styles = getStyles(colorTheme);

    return (
        <View style={styles.container}>
            <CustomHeader
                title='My Cases'
                onPress={() => navigation.goBack()}
                showProfile={false}
                showBackIcon={true}
                showRightIcon={true}
                rightIconName='plus'
                rightIconOnpress={() => { }}
            />
            <FlatList
                data={cases}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CaseItem item={item} styles={styles} navigation={navigation} />}
                contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}
            />
        </View>
    );
}

export default MyCases;

const getStyles = (theme: any) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        card: {
            backgroundColor: theme.card,
            borderRadius: 15,
            marginVertical: 8,
            shadowColor: theme.shadow,
            elevation: 5,
        },
        caseId: {
            color: appColorsCode.primary,
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
            textDecorationLine: 'underline'
        },
        badgeRow: {
            flexDirection: 'row',
            gap: 8,
        },
        badge: {
            borderRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 4,
            marginLeft: 6,
        },
        badgeText: {
            color: appColorsCode.white,
            textTransform: 'capitalize',
            fontFamily: 'Poppins-Bold',
            fontSize: 10,
        },
        title: {
            marginTop: 8,
            fontSize: 14,
            color: theme.text,
            fontFamily: 'Poppins-Medium',

        },
        subtitle: {
            marginTop: 4,
            fontSize: 12,
            color: theme.text,
        },
    });
};
