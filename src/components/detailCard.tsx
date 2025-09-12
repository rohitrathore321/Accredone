import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { appColorsCode } from "../styles/appColorsCode";
import { useAppTheme } from "../hooks/colorTheme";
import globalStyles from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

interface DetailItem {
    label: string;
    value: string;
}

interface CaseCardProps {
    title: string;
    status: string;
    details: DetailItem[];
    statusColor?: string;
    onPress?: () => void;
}

const DetailCard: React.FC<CaseCardProps> = ({
    title,
    status,
    details,
    statusColor = appColorsCode.orange,
    onPress,
}) => {
    const theme = useAppTheme();
    const navigation = useNavigation<any>();
    const styles = getStyles(theme);

    return (
        <Card
            style={styles.menuCard}
            onPress={onPress ?? (() => navigation.navigate("CaseDetails"))}
        >
            <Card.Content>
                {/* Title + Status Tag */}
                <View style={globalStyles.flexRow}>
                    <Text style={[styles.txt, styles.title]}>{title}</Text>
                    <View style={[styles.tag, { backgroundColor: statusColor }]}>
                        <Text style={[styles.txt, styles.tagText]}>{status}</Text>
                    </View>
                </View>
            </Card.Content>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Dynamic Details */}
            <Card.Content style={[globalStyles.flexRow]}>
                <View style={styles.labelCol}>
                    {details.map((item, index) => (
                        <Text key={index} style={styles.label}>
                            {item.label} :
                        </Text>
                    ))}
                </View>

                <View style={styles.valueCol}>
                    {details.map((item, index) => (
                        <Text key={index} style={styles.value}>
                            {item.value}
                        </Text>
                    ))}
                </View>
            </Card.Content>
        </Card>
    );
};

export default DetailCard;

const getStyles = (theme: any) =>
    StyleSheet.create({
        menuCard: {
            marginVertical: 6,
            borderRadius: 15,
            elevation: 4,
            backgroundColor: theme.card,
        },
        txt: {
            color: theme.text,
            fontFamily: "Poppins-Regular",
            flexWrap: "wrap",
        },
        title: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 18,
            flex: 1,
        },
        tag: {
            borderRadius: 12,
            paddingHorizontal: 10,
            paddingVertical: 4,
            marginLeft: 8,
            alignSelf: "center",
        },
        tagText: {
            fontFamily: "Poppins-Light",
            fontSize: 12,
            color: appColorsCode.white,
        },
        divider: {
            height: 1,
            backgroundColor: appColorsCode.gray,
            marginHorizontal: 16,
            marginVertical: 8,
        },
        labelCol: {
            marginRight: 20,
        },
        valueCol: {},
        label: {
            fontFamily: "Poppins-Light",
            fontSize: 14,
            color: theme.text,
            marginBottom: 4,
        },
        value: {
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            color: theme.text,
            marginBottom: 4,
        },
    });
