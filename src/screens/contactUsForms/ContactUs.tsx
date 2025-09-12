import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import globalStyles from "../../styles/globalStyles";
import CustomHeader from "../../components/customheader";
import CustomIconButton from "../../components/customIconButton";
import { appColorsCode } from "../../styles/appColorsCode";

const ContactUs = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="ContactUs"
        showProfile={false}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, }}>
        <Card style={styles.menuCard} onPress={() => navigation.navigate("GeneralEnquiry")}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <CustomIconButton iconName={'help-circle'} onPress={() => { }} />
              <View style={{ marginLeft: 12 }}>
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
        <Card style={styles.menuCard} onPress={() => navigation.navigate("ApplicationEnquiry")}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <CustomIconButton iconName={'file-document'} onPress={() => { }} backgroundColor={appColorsCode.purple} />

              <View style={{ marginLeft: 12 }}>
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
        <Card style={styles.menuCard} onPress={() => navigation.navigate("ComplaintForm")}>
          <View style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <CustomIconButton iconName={'alert-circle'} onPress={() => { }} backgroundColor={appColorsCode.green} />

              <View style={{ marginLeft: 12 }}>
                <Text style={styles.menuTitle}>Complaint Form</Text>
                <Text style={styles.menuSub}>
                  Submit a complaint or feedback
                </Text>
              </View>
            </View>
            <IconButton icon="chevron-right" size={24} iconColor={theme.text} />
          </View>
        </Card>

      </ScrollView>
    </View>
  );
};

export default ContactUs;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
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
