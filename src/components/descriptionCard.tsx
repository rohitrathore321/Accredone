import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { useAppTheme } from '../hooks/colorTheme';


interface descriptionCardProps {
    title: string,
    subtitle: string
}
const DescriptionCard = ({ title, subtitle }: descriptionCardProps) => {
    const theme = useAppTheme();
    const styles = getStyles(theme);

    return (
        <Card.Title
            title={title}
            titleStyle={{ fontSize: 16, fontFamily: "Poppins-SemiBold", color: theme.text, }}
            subtitle={subtitle}
            subtitleStyle={{ fontSize: 14, fontFamily: "Poppins-Regular",  color: theme.text,}}
            subtitleNumberOfLines={0}
            style={[styles.menuCard, { padding: 16 }]}
        />
    )
}

export default DescriptionCard

const getStyles = (theme: any) =>
    StyleSheet.create({
        menuCard: {
            marginVertical: 6,
            borderRadius: 15,
            elevation: 5,
            backgroundColor: theme.card,
        },
    })