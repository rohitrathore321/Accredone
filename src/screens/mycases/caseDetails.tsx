import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppTheme } from '../../hooks/colorTheme';
import CustomHeader from '../../components/customheader';

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

    })