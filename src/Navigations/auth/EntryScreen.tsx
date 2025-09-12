import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import CustomIconButton from "../../components/customIconButton";
import CustomHeader from "../../components/customheader";

const EntryScreen = ({ navigation }: any) => {
  const colorTheme = useAppTheme();
  const styles = getStyles(colorTheme);

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="AccredApp"
        showRightIcon={false}
        rightIconName="plus"
        showProfile={false}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

        <Card style={styles.welcomeCard}>
          <Card.Content>
            <Text style={styles.title}>Welcome to AccredApp</Text>
            <Text style={styles.subtitle}>Streamline your assessment management with our comprehensive platformdesigned for modern accreditation needs.</Text>

            <Button mode="contained" style={styles.signInButton} icon="login" onPress={() => navigation.navigate("login")}>
              Sign In
            </Button>
            <Button mode="outlined" icon="phone" onPress={() => navigation.navigate('FormStack', { screen: 'ContactUs' })}>
              Contact Us
            </Button>
          </Card.Content>
        </Card>

        <>
          <Text style={styles.featuresHeading}>Key Features</Text>
        </>

        <Card style={styles.featureCard}>
          <Card.Content >
            <CustomIconButton iconName={'check-circle'} onPress={() => { }} />
            <Text style={styles.featureTitle}>Secure Management</Text>
            <Text style={styles.featureDesc}>End-to-end encrypted processes with comprehensive audit trails</Text>
          </Card.Content>
        </Card>

        <Card style={styles.featureCard}>
          <Card.Content>
            <CustomIconButton iconName={'check-circle'} onPress={() => { }} />
            <Text style={styles.featureTitle}>Accreditation Excellence</Text>
            <Text style={styles.featureDesc}>Streamlined workflows for ISO standards and certification</Text>
          </Card.Content>
        </Card>

        <Card style={styles.featureCard}>
          <Card.Content >
            <CustomIconButton iconName={'check-circle'} onPress={() => { }} />
            <Text style={styles.featureTitle}>Team Collaboration</Text>
            <Text style={styles.featureDesc}>Real-time collaboration tools for assessors and teams</Text>
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
      marginVertical: 8,
      borderRadius: 12,
      elevation: 5,
      backgroundColor: theme.card,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: theme.text,
      textAlign: 'center'
    },
    subtitle: {
      fontSize: 14,
      fontFamily: 'Poppins-Light',
      color: theme.text,
      textAlign: 'center'
    },
    signInButton: {
      color: theme.primary,
      marginVertical: 8,
      marginTop: 20
    },
    featuresHeading: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      color: theme.text,
      marginHorizontal: 16,
      // marginVertical: 8
    },
    featureCard: {
      marginTop: 8,
      borderRadius: 12,
      elevation: 5,
      backgroundColor: theme.card,
      marginHorizontal: 16,
    },
    featureTitle: {
      fontSize: 14,
      fontFamily: 'Poppins-SemiBold',
      color: theme.text,
      marginTop: 10
    },
    featureDesc: {
      fontSize: 12,
      fontFamily: 'Poppins-Light',
      color: theme.text,
    },
  });
}
