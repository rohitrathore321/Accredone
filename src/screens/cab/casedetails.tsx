import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppTheme } from '../../hooks/colorTheme';
import CustomHeader from '../../components/customheader';
import { Card, Divider, Icon, IconButton } from 'react-native-paper';
import globalStyles from '../../styles/globalStyles';
import CustomIconButton from '../../components/customIconButton';
import { appColorsCode } from '../../styles/appColorsCode';

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

                <Card style={styles.menuCard} onPress={() => navigation.navigate('CaseDetails')}>
                    <Card.Content style={{}}>
                        <View style={globalStyles.flexRow}>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold', fontSize: 18 }]}>Question About Assement</Text>
                            <View style={[styles.tag, { backgroundColor: appColorsCode.orange }]}>
                                <Text style={[styles.txt]}>{'open'}</Text>
                            </View>
                        </View>
                    </Card.Content>
                    <View style={{ height: 1, backgroundColor: appColorsCode.gray, margin: 16 }} />

                    <Card.Content style={[globalStyles.flexRow,]}>
                        <View>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Case Id : </Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Type : </Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Priority : </Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Assigned To : </Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Created : </Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Last Updated : </Text>
                        </View>
                        <View>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]}>Case-2024-001</Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]}>General Enquiry</Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]}>Medium</Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]}>Sarah John</Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]}>15 jan, 2024</Text>
                            <Text style={[styles.txt, { fontFamily: 'Poppins-Regular', }]}>17 jan, 2024</Text>

                        </View>
                    </Card.Content>
                </Card>

                <Card.Title
                    title="Card Title"
                    titleStyle={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}
                    subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam doloremque adipisci reprehenderit voluptate, voluptas assumenda eius debitis ea in, modi inventore corrupti. Hic ex, veritatis alias corporis quae libero ducimus."
                    subtitleStyle={{
                        fontSize: 14,
                        fontFamily: "Poppins-Regular",
                    }}
                    subtitleNumberOfLines={0}
                    style={[styles.menuCard, { padding: 16 }]}
                />

                <Card style={styles.menuCard} onPress={() => navigation.navigate('CaseDetails')}>
                    <Card.Content style={{}}>
                        <Text style={[styles.txt, { fontFamily: 'Poppins-SemiBold', fontSize: 16 }]}>Quick Actions</Text>
                        <View style={globalStyles.flexRow}>
                            <TouchableOpacity style={[globalStyles.flexCenter, styles.btn]}>
                                <Icon source='plus' size={25} color={appColorsCode.primary} />
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Add Notes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[globalStyles.flexCenter, styles.btn]}>
                                <Icon source='plus' size={25} color={appColorsCode.primary} />
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Add Notes</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={globalStyles.flexRow}>
                            <TouchableOpacity style={[globalStyles.flexCenter, styles.btn]}>
                                <Icon source='plus' size={25} color={appColorsCode.primary} />
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Add Notes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[globalStyles.flexCenter, styles.btn]}>
                                <Icon source='plus' size={25} color={appColorsCode.primary} />
                                <Text style={[styles.txt, { fontFamily: 'Poppins-Light', }]}>Add Notes</Text>
                            </TouchableOpacity>
                        </View>
                    </Card.Content>
                </Card>

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