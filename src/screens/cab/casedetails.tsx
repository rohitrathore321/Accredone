import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { appColorsCode } from '../../styles/appColorsCode';

const dummyCase = {
    assignedTo: 'John Doe',
    assignedRole: 'Support Specialist',
    description:
        'Application for multi-site ISO 45001 certification across different locations.',
    caseId: 'CASE-2024-008',
    type: 'Cases.Application',
    status: 'inProgress',
    priority: 'high',
    created: 'Jan 19, 2024, 02:15 PM',
    lastUpdated: 'Jan 24, 2024, 09:50 PM',
    messages: 4,
    daysOpen: 600,
    responseTime: '2.4 hours avg',
    notes: 2,
    documents: 2,
};

const TABS = ['Overview', 'Timeline', 'Documents', 'Notes'];

export default function CaseDetails() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [selectedStatus, setSelectedStatus] = useState('Overview');

    const filterByStatus = (status: string) => {
        setSelectedStatus(status);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Assignment Banner */}
            <View style={styles.banner}>
                <View>
                    <Text style={styles.bannerTitle}>Assigned to {dummyCase.assignedTo}</Text>
                    <Text style={styles.bannerSubtitle}>
                        {dummyCase.assignedRole} • Available for updates
                    </Text>
                </View>
                <TouchableOpacity style={styles.reassignBtn}>
                    <Text style={styles.reassignText}>Reassign</Text>
                </TouchableOpacity>
            </View>
            <SegmentedButtons
                value={selectedStatus}
                onValueChange={filterByStatus}
                buttons={TABS.map(status => ({
                    value: status,
                    label: status,
                    style: {
                        backgroundColor:
                            selectedStatus === status
                                ? appColorsCode.primary
                                : appColorsCode.white,
                    },
                    labelStyle: {
                        color:
                            selectedStatus === status
                                ? appColorsCode.white
                                : appColorsCode.black,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 11,
                    },
                }))}
                style={{ marginVertical: 8, }}
                // theme={{
                //     colors: { primary: appColorsCode.white },
                // }}
            />
            {/* Tabs */}
            {/* <View style={styles.tabs}>
                {TABS.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text
                            style={[styles.tabText, activeTab === tab && styles.activeTabText]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View> */}

            {/* Case Details */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Case Details</Text>
                <Text style={styles.description}>{dummyCase.description}</Text>

                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.label}>Case ID:</Text>
                        <Text style={styles.value}>{dummyCase.caseId}</Text>
                        <Text style={styles.label}>Type:</Text>
                        <Text style={styles.value}>{dummyCase.type}</Text>
                        <Text style={styles.label}>Status:</Text>
                        <Text style={[styles.badge, styles.inProgress]}>{dummyCase.status}</Text>
                        <Text style={styles.label}>Priority:</Text>
                        <Text style={[styles.badge, styles.high]}>{dummyCase.priority}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Created:</Text>
                        <Text style={styles.value}>{dummyCase.created}</Text>
                        <Text style={styles.label}>Last Updated:</Text>
                        <Text style={styles.value}>{dummyCase.lastUpdated}</Text>
                        <Text style={styles.label}>Assigned To:</Text>
                        <Text style={styles.value}>{dummyCase.assignedTo}</Text>
                        <Text style={styles.label}>Messages:</Text>
                        <Text style={styles.value}>{dummyCase.messages}</Text>
                    </View>
                </View>
            </View>

            {/* Quick Actions */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Quick Actions</Text>
                <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionText}>Add Note</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionText}>Update Status</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.actionText}>Archive Case</Text>
                </TouchableOpacity>
            </View>

            {/* Case Statistics */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Case Statistics</Text>
                <Text style={styles.statsItem}>
                    Response Time: <Text style={styles.statsValue}>{dummyCase.responseTime}</Text>
                </Text>
                <Text style={styles.statsItem}>
                    Days Open: <Text style={styles.statsValue}>{dummyCase.daysOpen}</Text>
                </Text>
                <Text style={styles.statsItem}>
                    Notes: <Text style={styles.statsValue}>{dummyCase.notes}</Text>
                </Text>
                <Text style={styles.statsItem}>
                    Documents: <Text style={styles.statsValue}>{dummyCase.documents}</Text>
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 10,
    },
    banner: {
        backgroundColor: '#d1f7d6',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    bannerTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    bannerSubtitle: {
        fontSize: 13,
        color: '#555',
        marginTop: 4,
    },
    reassignBtn: {
        backgroundColor: '#28a745',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    reassignText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#e9ecef',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#fff',
    },
    tabText: {
        color: '#6c757d',
        fontWeight: '500',
    },
    activeTabText: {
        color: '#000',
        fontWeight: '700',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        marginBottom: 10,
        color: '#555',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    col: {
        width: '48%',
    },
    label: {
        fontSize: 13,
        fontWeight: '500',
        marginTop: 8,
        color: '#6c757d',
    },
    value: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginTop: 4,
        overflow: 'hidden',
    },
    inProgress: {
        backgroundColor: '#ffc107',
    },
    high: {
        backgroundColor: '#dc3545',
    },
    actionBtn: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 8,
    },
    actionText: {
        fontWeight: '600',
    },
    statsItem: {
        fontSize: 14,
        marginTop: 6,
    },
    statsValue: {
        fontWeight: '600',
    },
});
