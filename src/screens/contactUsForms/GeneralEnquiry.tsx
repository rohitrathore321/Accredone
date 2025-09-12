import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppTheme } from "../../hooks/colorTheme";
import CustomTextInput from "../../components/customTextInput";
import CustomHeader from "../../components/customheader";

const enquirySchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  organization: Yup.string().required("Organization is required"),
  topic: Yup.string().required("Topic is required"),
  message: Yup.string().required("Message is required"),
});

const GeneralEnquiry = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        topic: "",
        message: "",
      }}
      validationSchema={enquirySchema}
      onSubmit={(values) => {
        console.log("Form Submitted ✅", values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <CustomHeader
            showBackIcon={true}
            onPress={() => navigation.goBack()}
            title="General Enquiry"
            showProfile={false}
          />
          <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >
            <Card style={styles.formCard}>
              <Card.Content>
                <Text style={styles.title}>Send us your enquiry</Text>
                <Text style={styles.subtitle}>
                  We'll get back to you within 24 hours
                </Text>


                <>
                  {/* First Name */}
                  <CustomTextInput
                    label="First Name *"
                    placeholder="Enter your first name"
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    leftIconName="account"
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={styles.errorText}>{errors.firstName}</Text>
                  )}

                  {/* Last Name */}
                  <CustomTextInput
                    label="Last Name *"
                    placeholder="Enter your last name"
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    leftIconName="account-outline"
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={styles.errorText}>{errors.lastName}</Text>
                  )}

                  {/* Email */}
                  <CustomTextInput
                    label="Email Address *"
                    placeholder="Enter your email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    leftIconName="email"
                    keyboardType="email-address"
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  {/* Organization */}
                  <CustomTextInput
                    label="Organization *"
                    placeholder="Enter your organization"
                    value={values.organization}
                    onChangeText={handleChange("organization")}
                    leftIconName="office-building"
                  />
                  {touched.organization && errors.organization && (
                    <Text style={styles.errorText}>{errors.organization}</Text>
                  )}

                  {/* Topic */}
                  <CustomTextInput
                    label="Topic of Enquiry *"
                    placeholder="What's this about?"
                    value={values.topic}
                    onChangeText={handleChange("topic")}
                    leftIconName="comment-question-outline"
                  />
                  {touched.topic && errors.topic && (
                    <Text style={styles.errorText}>{errors.topic}</Text>
                  )}

                  {/* Message */}
                  <CustomTextInput
                    label="Message *"
                    placeholder="Tell us more about your enquiry..."
                    value={values.message}
                    onChangeText={handleChange("message")}
                    leftIconName="message-text"
                    multiline={true}
                    numberOfLines={4}
                    inputStyle={{ textAlignVertical: 'top' }}
                    customContainerStyle={{ minHeight: 150, alignItems: 'flex-start', marginBottom: 100 }}
                  />
                  {touched.message && errors.message && (
                    <Text style={styles.errorText}>{errors.message}</Text>
                  )}

                  {/* Submit Button */}
                </>
              </Card.Content>
              <Card.Content>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.submitBtnText}>Submit Enquiry</Text>
                </TouchableOpacity>

              </Card.Content>
            </Card>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default GeneralEnquiry;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    formCard: {
      borderRadius: 12,
      backgroundColor: theme.card,
      elevation: 3,
      marginHorizontal: 16,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      fontFamily: "Poppins-SemiBold",
      color: theme.text,
      marginBottom: 2,
    },
    subtitle: {
      fontSize: 14,
      fontFamily: "Poppins-Light",
      color: theme.text,
      marginBottom: 16,
      marginTop: -7,
    },
    errorText: {
      fontSize: 12,
      color: theme.error,
      marginBottom: 5,
      fontFamily: 'Poppins-Regular',
      marginTop: -15,
    },
    submitBtn: {
      marginTop: 8,
      backgroundColor: theme.primary,
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: "center",
    },
    submitBtnText: {
      color: "#fff",
      fontFamily: "Poppins-SemiBold",
      fontSize: 16,
    },
  });
