import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Icon, List } from 'react-native-paper';
import { appColorsCode } from '../../styles/appColorsCode';

type RootDrawerParamList = {
    Notifications: undefined;
    SoluzioneDirectory: undefined;
    Attandance: undefined;
    Worklog: undefined;
    PlanMyDay: undefined;
    MyPlans: undefined;
    ProjectAllocation: undefined;
    ApplyLeave: undefined;
    LeaveRequest: undefined;
    LeaveBalance: undefined;
    LateArrivalTime: undefined;
    Breakes: undefined;
    OpenPositions: undefined;
    MyReferences: undefined;
    WorkFromHome: undefined;
    Feedback: undefined;
    Profile: undefined;
};

export default function CustomDrawer(props: any) {
    const navigation = useNavigation<NavigationProp<RootDrawerParamList>>();
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const handlePress = (id: string) => {
        setExpandedId(prev => (prev === id ? null : id));
    };


    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: appColorsCode.white }}>

            <Pressable
                android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
                // onPressIn={() => navigation.navigate('Dashboard')}
                onPress={() => props.navigation.closeDrawer()}
                style={styles.drawerBtn}>
                <Icon source="book-open-page-variant" color={appColorsCode.black} size={23} />
                <Text style={styles.drawerBtnTxt}>Dashboard</Text>
            </Pressable>


            <List.Accordion
                style={{
                    backgroundColor: appColorsCode.white,
                }}
                title="My Assessements"
                titleStyle={{ color: appColorsCode.black, fontFamily: 'Lato-Semibold' }}
                left={p => <List.Icon {...p} icon="folder" color={appColorsCode.black} />}
                right={p => (
                    <List.Icon
                        {...p}
                        icon={expandedId === 'work' ? 'chevron-down' : 'chevron-left'}
                        color={appColorsCode.black}
                    />
                )}
                expanded={expandedId === 'work'}
                onPress={() => handlePress('work')}>
                <List.Item
                    title="Assessment Details"
                    left={p => (
                        <List.Icon {...p} icon="plus-box-multiple" color={appColorsCode.black} />
                    )}
                    titleStyle={{ color: appColorsCode.black, fontFamily: 'Lato-Semibold' }}
                    style={{ marginLeft: 20, backgroundColor: appColorsCode.white, }}
                    //@ts-ignore
                    onPressIn={() => navigation.navigate('AssessmentDetail')}
                    onPress={() => props.navigation.closeDrawer()}
                />
                <List.Item
                    title="Assessment Planning"
                    left={p => (
                        <List.Icon {...p} icon="plus-box-multiple" color={appColorsCode.black} />
                    )}
                    titleStyle={{ color: appColorsCode.black, fontFamily: 'Lato-Semibold' }}
                    style={{ marginLeft: 20, backgroundColor: appColorsCode.white, }}
                    //@ts-ignore
                    onPressIn={() => navigation.navigate('AssessmentPlanning')}
                    onPress={() => props.navigation.closeDrawer()}
                />
                <List.Item
                    title="Resource Assessment"
                    left={p => (
                        <List.Icon {...p} icon="plus-box-multiple" color={appColorsCode.black} />
                    )}
                    titleStyle={{ color: appColorsCode.black, fontFamily: 'Lato-Semibold' }}
                    style={{ marginLeft: 20, backgroundColor: appColorsCode.white, }}
                    //@ts-ignore
                    onPressIn={() => navigation.navigate('ResourceAssessments')}
                    onPress={() => props.navigation.closeDrawer()}
                />
            </List.Accordion>

            <Pressable
                android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
                //@ts-ignore
                onPressIn={() => navigation.navigate('MyCases')}
                onPress={() => props.navigation.closeDrawer()}
                style={styles.drawerBtn}>
                <Icon source="book-open-page-variant" color={appColorsCode.black} size={23} />
                <Text style={styles.drawerBtnTxt}>My Cases</Text>
            </Pressable>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingLeft: 13,
        borderRadius: 8,
        minHeight: 45,
        marginTop: 10,
    },
    drawerBtnTxt: {
        marginLeft: 15,
        color: appColorsCode.black,
        flexWrap: 'wrap',
        width: 'auto',
        fontFamily: 'Lato-Semibold',
        fontSize: 16,
    },
});
