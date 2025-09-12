import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Card, Icon } from "react-native-paper";
import { appColorsCode } from "../styles/appColorsCode";
import { useAppTheme } from "../hooks/colorTheme";
import globalStyles from "../styles/globalStyles";

interface ActionItem {
    label: string;
    icon: string;
    onPress: () => void;
}

interface QuickActionCardProps {
    actions: ActionItem[];
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ actions }) => {
    const theme = useAppTheme();
    const styles = getStyles(theme);

    return (
        <Card style={styles.menuCard}>
            <Card.Content>
                <Text style={[styles.txt, styles.heading]}>Quick Actions</Text>

                <View style={styles.grid}>
                    {actions.map((action, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[globalStyles.flexCenter, styles.btn]}
                            onPress={action.onPress}
                        >
                            <Icon source={action.icon} size={28} color={appColorsCode.primary} />
                            <Text style={[styles.txt, styles.btnLabel]}>{action.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Card.Content>
        </Card>
    );
};

export default QuickActionCard;

const getStyles = (theme: any) =>
    StyleSheet.create({
        menuCard: {
            marginVertical: 6,
            borderRadius: 15,
            elevation: 5,
            backgroundColor:theme.card,
            paddingVertical: 8,
        },
        txt: {
            color: theme.text,
            fontFamily: "Poppins-Regular",
        },
        heading: {
            color: theme.text,
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            marginBottom: 12,
        },
        grid: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
        },
        btn: {
            backgroundColor:theme.card,
            paddingVertical: 16,
            width: "47%", // ensures 2 in a row
            borderRadius: 15,
            borderColor: appColorsCode.gray2,
            borderWidth: 0.5,
            marginBottom: 12,
        },
        btnLabel: {
            fontSize: 14,
            fontFamily: "Poppins-Light",
            marginTop: 6,
        },
    });
