import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppTheme } from '../../hooks/colorTheme';
import CustomHeader from '../../components/customheader';
import { Card, Divider, Icon, IconButton } from 'react-native-paper';
import globalStyles from '../../styles/globalStyles';
import CustomIconButton from '../../components/customIconButton';
import { appColorsCode } from '../../styles/appColorsCode';
import DescriptionCard from '../../components/descriptionCard';
import QuickActionCard from '../../components/quickActionCard';
import DetailCard from '../../components/detailCard';

const caseDetails = ({ navigation }: any) => {
    const theme = useAppTheme();
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <CustomHeader
                showBackIcon={true}
                onPress={() => navigation.goBack()}
                title="My Cases"
                showRightIcon={false}
                showProfile={false}
            />
            <ScrollView style={{ paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <DetailCard
                    title="Question About Assessment"
                    status="Open"
                    statusColor={appColorsCode.orange}
                    details={[
                        { label: "Case Id", value: "Case-2024-001" },
                        { label: "Type", value: "General Enquiry" },
                        { label: "Priority", value: "Medium" },
                        { label: "Assigned To", value: "Sarah John" },
                        { label: "Created", value: "15 Jan, 2024" },
                        { label: "Last Updated", value: "17 Jan, 2024" },
                    ]}
                />

                <DescriptionCard
                    title="Card Title"
                    subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam doloremque adipisci reprehenderit voluptate, voluptas assumenda eius debitis ea in, modi inventore corrupti. Hic ex, veritatis alias corporis quae libero ducimus."
                />

                <QuickActionCard
                    actions={[
                        { label: "Add Notes", icon: "note-plus", onPress: () => console.log("Notes") },
                        { label: "Upload File", icon: "file-upload", onPress: () => console.log("Upload") },
                        { label: "Schedule", icon: "calendar", onPress: () => console.log("Schedule") },
                        { label: "Task", icon: "check-circle", onPress: () => console.log("Task") },
                    ]}
                />
                <Card style={styles.menuCard} onPress={() => navigation.navigate('CaseDetails')}>
                    <Card.Content >
                        <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold', fontSize: 16, }]}>Case Timeline</Text>
                        <View style={[{ marginTop: 10, flexDirection: 'row' }]}>
                            <CustomIconButton iconName={'check-circle'} onPress={() => { }} />
                            <View style={{ marginLeft: 12, flex: 1, }}>
                                <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold' }]} numberOfLines={0}>{'case status Update in Process'}</Text>
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]} numberOfLines={0}>{'sarah john assiged to case and began agin'}</Text>
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]} numberOfLines={0}>{'Jan 16, 2024 - 10:15 AM'}</Text>
                            </View>
                        </View>
                        <View style={[{ marginTop: 10, flexDirection: 'row' }]}>
                            <CustomIconButton iconName={'check-circle'} onPress={() => { }} />
                            <View style={{ marginLeft: 12, flex: 1, }}>
                                <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold' }]} numberOfLines={0}>{'case status Update in Process'}</Text>
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]} numberOfLines={0}>{'sarah john assiged to case and began agin'}</Text>
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]} numberOfLines={0}>{'Jan 16, 2024 - 10:15 AM'}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

                <Card style={styles.menuCard} onPress={() => navigation.navigate('CaseDetails')}>
                    <Card.Content >
                        <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold', fontSize: 16, }]}>Documents</Text>
                        <View style={[globalStyles.alignIcon, { marginTop: 10, flexDirection: 'row' }]}>
                            <CustomIconButton iconName={'note-text'} onPress={() => { }} height={40} width={40} />
                            <View style={[globalStyles.centerContent, { marginLeft: 12, flex: 1, }]}>
                                <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold' }]} numberOfLines={0}>{'case status Update in Process'}</Text>
                                <IconButton
                                    icon="cloud-download"
                                    iconColor={appColorsCode.primary}
                                    size={25}
                                    onPress={() => console.log('Pressed')}
                                />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: appColorsCode.gray, marginVertical: 8 }} />
                        <View style={[globalStyles.alignIcon, { marginTop: 10, flexDirection: 'row' }]}>
                            <CustomIconButton iconName={'note-text'} onPress={() => { }} height={40} width={40} />
                            <View style={[globalStyles.centerContent, { marginLeft: 12, flex: 1, }]}>

                                <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold' }]} numberOfLines={0}>{'case status Update in Process'}</Text>
                                <IconButton
                                    icon="cloud-download"
                                    iconColor={appColorsCode.primary}
                                    size={25}
                                    onPress={() => console.log('Pressed')}
                                />
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    )
}

export default caseDetails

const getStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        menuCard: {
            marginVertical: 6,
            borderRadius: 15,
            elevation: 5,
            backgroundColor: theme.card,
        },
        txt: {
            color: theme.text,
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            flexWrap: 'wrap',
        },
        tag: {
            paddingVertical: 3,
            paddingHorizontal: 8,
            borderRadius: 5,
        },
        btn: {
            backgroundColor: appColorsCode.gray,
            padding: 16,
            width: 150,
            borderRadius: 15,
            borderColor: appColorsCode.gray2,
            borderWidth: 0.5,
            marginVertical: 10
        }
    })