import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import globalStyles from "../../styles/globalStyles";
import appColorsCode from "../../styles/appColorsCode";

const ContactUs = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.menuSection} >
        <Card style={styles.menuCard}  onPress={() => navigation.navigate("GeneralEnquiry")}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <IconButton
                icon="help-circle"
                size={24}
                iconColor="white"
                style={[styles.iconStyle, { backgroundColor: theme.primary }]}
              />
              <View>
                <Text style={styles.menuTitle}>General Enquiry</Text>
                <Text style={styles.menuSub}>
                  General questions about our services
                </Text>
              </View>
            </View>
            <IconButton icon="chevron-right" size={24} iconColor={theme.text} />
          </View>
        </Card>

        {/* Application Enquiry */}
        <Card style={styles.menuCard}  onPress={() => navigation.navigate("ApplicationEnquiry")}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <IconButton
                icon="file-document"
                size={24}
                iconColor="white"
                style={[
                  styles.iconStyle,
                  { backgroundColor: appColorsCode.appColorsCode.purple },
                ]}
              />
              <View>
                <Text style={styles.menuTitle}>Application Enquiry</Text>
                <Text style={styles.menuSub}>
                  Questions about your application
                </Text>
              </View>
            </View>
            <IconButton icon="chevron-right" size={24} iconColor={theme.text} />
          </View>
        </Card>

        {/* Complaint Form */}
        <Card style={styles.menuCard}  onPress={() => navigation.navigate("ComplaintForm")}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <IconButton
                icon="alert-circle"
                size={24}
                iconColor="white"
                style={[styles.iconStyle, { backgroundColor: "#2ecc71" }]}
              />
              <View>
                <Text style={styles.menuTitle}>Complaint Form</Text>
                <Text style={styles.menuSub}>
                  Submit a complaint or feedback
                </Text>
              </View>
            </View>
            <IconButton icon="chevron-right" size={24} iconColor={theme.text} />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default ContactUs;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 16,
    },
    iconStyle: {
      borderRadius: 50,
      padding: 4,
      marginRight: 12,
    },
    // Menu Cards
    menuSection: {
      marginBottom: 20,
      marginTop:16,
    },
    menuCard: {
      marginBottom: 12,
      borderRadius: 12,
      elevation: 2,
      backgroundColor: theme.card,
      padding: 8,
    },
    menuTitle: {
      fontSize: 15,
      fontFamily: "Poppins-SemiBold",
      color: theme.text,
    },
    menuSub: {
      fontSize: 12,
      fontFamily: "Poppins-Light",
      color: theme.text,
    },
  });
