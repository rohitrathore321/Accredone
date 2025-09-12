import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppTheme } from "../../hooks/colorTheme";
import CustomTextInput from "../../components/customTextInput";
import CustomHeader from "../../components/customheader";

// ✅ Validation Schema
const enquirySchema = Yup.object().shape({
  legalEntityName: Yup.string().required("Legal entity name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  accreditationSought: Yup.string(),
  anticipatedMarkets: Yup.string(),
});

const ApplicationEnquiry = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="Application Enquiry"
        showProfile={false}
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.formCard}>
          <Card.Content>
            {/* Heading */}
            <Text style={styles.title}>Application Support</Text>
            <Text style={styles.subtitle}>
              Get help with your accreditation application
            </Text>

            <Formik
              initialValues={{
                legalEntityName: "",
                email: "",
                firstName: "",
                lastName: "",
                accreditationSought: "",
                anticipatedMarkets: "",
              }}
              validationSchema={enquirySchema}
              onSubmit={(values) => {
                console.log("Form Submitted ✅", values);
                // 🔗 Make API call here
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <CustomTextInput
                    label="Legal Entity Name *"
                    placeholder="Enter your legal entity name"
                    leftIconName="domain"
                    value={values.legalEntityName}
                    onChangeText={handleChange("legalEntityName")}
                  />
                  {touched.legalEntityName && errors.legalEntityName && (
                    <Text style={styles.errorText}>{errors.legalEntityName}</Text>
                  )}

                  <CustomTextInput
                    label="Email Address *"
                    placeholder="your@email.com"
                    leftIconName="email"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeText={handleChange("email")}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <CustomTextInput
                    label="First Name *"
                    placeholder="Enter your first name"
                    leftIconName="account"
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={styles.errorText}>{errors.firstName}</Text>
                  )}

                  <CustomTextInput
                    label="Last Name *"
                    placeholder="Enter your last name"
                    leftIconName="account-outline"
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={styles.errorText}>{errors.lastName}</Text>
                  )}

                  <CustomTextInput
                    label="Accreditation Sought"
                    placeholder="e.g. ISO 9001, ISO 14001 etc"
                    leftIconName="certificate"
                    value={values.accreditationSought}
                    onChangeText={handleChange("accreditationSought")}
                  />

                  <CustomTextInput
                    label="Anticipated Markets"
                    placeholder="e.g., Europe, North America, Asia"
                    leftIconName="earth"
                    value={values.anticipatedMarkets}
                    onChangeText={handleChange("anticipatedMarkets")}
                  />

                  {/* Submit Button */}
                  <TouchableOpacity style={styles.submitBtn} onPress={() => handleSubmit()}>
                    <Text style={styles.submitBtnText}>Submit Enquiry</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default ApplicationEnquiry;

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
      marginTop: 16,
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
