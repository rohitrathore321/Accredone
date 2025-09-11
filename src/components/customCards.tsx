import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";
import { Card, Icon } from "react-native-paper";
import { useAppTheme } from "../hooks/colorTheme";
import CustomIconButton from "./customIconButton";

type CustomCardProps = {
  title: string;
  status: string;
  assessmentId: string;
  role: string;
  client: string;
  location: string;
  date: string;
  duration: string;
  priority: string;
  icon: string;
  onPress?: () => void;

  statusStyle?: { container?: ViewStyle; text?: TextStyle };
  priorityStyle?: { container?: ViewStyle; text?: TextStyle };
};

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  status,
  assessmentId,
  role,
  client,
  location,
  date,
  duration,
  priority,
  icon,
  onPress,
  statusStyle,
  priorityStyle,
}) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.row}>

        <View style={styles.iconWrapper}>
          <CustomIconButton iconName={icon} iconSize={20} />
        </View>

        <View style={{ flex: 1 }}>

          <View style={styles.rowBetween}>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.statusBadge, statusStyle?.container]}>
              <Text style={[styles.statusText, statusStyle?.text]}>
                {status}
              </Text>
            </View>
          </View>


          <View style={styles.rowBetween}>
            <Text style={styles.metaLeft}>
              {assessmentId} · {role}
            </Text>
            <Icon source="chevron-right" size={20} color={theme.text} />
          </View>

       
          <View style={styles.rowBetween}>
            <Text style={styles.metaLeft}>
              {client} · {location}
            </Text>
            <Text style={styles.metaRight}>{date}</Text>
          </View>

       
          <View style={styles.rowBetween}>
            <View style={[styles.priorityBadge, priorityStyle?.container]}>
              <Text style={[styles.priorityText, priorityStyle?.text]}>
                {priority}
              </Text>
            </View>
            <Text style={styles.metaRight}>{duration}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default CustomCard;

const getStyles = (theme: any) =>
  StyleSheet.create({
    card: {
      marginBottom: 16,
      borderRadius: 12,
      padding: 12,
      elevation: 3,
      backgroundColor: theme.card,
      marginHorizontal: 16,
    },
    row: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    rowBetween: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 6,
    },
    iconWrapper: {
      marginRight: 12,
      alignSelf: "center",
    },
    title: {
      fontSize: 16,
      color: theme.text,
      marginBottom: 2,
      fontFamily: "Poppins-SemiBold",
    },
    statusBadge: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 15,
      backgroundColor: "transparent", 
    },
    statusText: {
      fontSize: 12,
      fontWeight: "500",
      color: theme.text,
    },
    priorityBadge: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 12,
      backgroundColor: "transparent", 
    },
    priorityText: {
      fontSize: 12,
      fontWeight: "500",
      fontFamily: "Poppins-Regular",
      color: theme.text,
    },
    metaLeft: {
      fontSize: 13,
      color: theme.text,
      flexShrink: 1,
      fontFamily: "Poppins-Regular",
    },
    metaRight: {
      fontSize: 13,
      color: theme.text,
      fontFamily: "Poppins-Regular",
    },
  });
