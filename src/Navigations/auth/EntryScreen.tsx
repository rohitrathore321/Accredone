import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button, IconButton } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import appColorsCode from "../../styles/appColorsCode";

const EntryScreen = ({ navigation }: any) => {
    const colorTheme = useAppTheme();
    const styles = getStyles(colorTheme);
  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Welcome Card */}
      <Card style={styles.welcomeCard}>
        <Card.Content>
          <Text style={styles.title}>Welcome to AccredApp</Text>
          <Text style={styles.subtitle}>
            Streamline your assessment management with our comprehensive platform
            designed for modern accreditation needs.
          </Text>

          {/* Buttons Row */}
          <View style={styles.buttonRow}>
            <Button
              mode="contained"
              style={styles.signInButton}
              icon="login"
              onPress={() => navigation.navigate("login")}
            >
              Sign In
            </Button>

            <Button
              mode="outlined"
              style={styles.contactButton}
              icon="phone"
              onPress={() => navigation.navigate('FormStack', { screen: 'ContactUs' })}
            >
              Contact Us
            </Button>
          </View>
        </Card.Content>
      </Card>

      {/* Features Heading */}
      <Text style={styles.featuresHeading}>Key Features</Text>

      {/* Feature 1 */}
      <Card style={styles.featureCard}>
        <Card.Content style={styles.featureContent}>
          <IconButton icon="shield-lock" size={30} />
          <Text style={styles.featureTitle}>Secure Management</Text>
          <Text style={styles.featureDesc}>
            End-to-end encrypted processes with comprehensive audit trails
          </Text>
        </Card.Content>
      </Card>

      {/* Feature 2 */}
      <Card style={styles.featureCard}>
        <Card.Content style={styles.featureContent}>
          <IconButton icon="certificate" size={30}/>
          <Text style={styles.featureTitle}>Accreditation Excellence</Text>
          <Text style={styles.featureDesc}>
            Streamlined workflows for ISO standards and certification
          </Text>
        </Card.Content>
      </Card>

      {/* Feature 3 */}
      <Card style={styles.featureCard}>
        <Card.Content style={styles.featureContent}>
          <IconButton icon="account-group" size={30} />
          <Text style={styles.featureTitle}>Team Collaboration</Text>
          <Text style={styles.featureDesc}>
            Real-time collaboration tools for assessors and teams
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
    </View>
  );
};

export default EntryScreen;

const getStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    welcomeCard: {
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 12,
      elevation: 3,
      backgroundColor: theme.card,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 22,
      fontFamily: 'Poppins-SemiBold',
      color: theme.text,
    },

    subtitle: {
      fontSize: 14,
      fontFamily: 'Poppins-Light',
      color: theme.text,
      marginTop: -5,
      marginBottom: 10,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    signInButton: {
      flex: 1,
      marginRight: 8,
      color: theme.primary,
    },
    contactButton: {
      flex: 1,
      marginLeft: 8,
    },

    featuresHeading: {
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold',
      color: theme.text,
      marginBottom: 12,
      marginHorizontal: 16,
    },
    featureCard: {
      marginBottom: 16,
      borderRadius: 12,
      elevation: 2,
      backgroundColor: theme.card,
      marginHorizontal: 16,
    },
    featureContent: {
      alignItems: 'center',
    },
    featureTitle: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      color: theme.text,
    },
    featureDesc: {
      fontSize: 13,
      fontFamily: 'Poppins-Light',
      color: theme.text,
      textAlign: 'center',
    },
  });
}
