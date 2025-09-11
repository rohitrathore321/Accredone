import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomTextInput from '../../components/customTextInput';


// ✅ Validation Schema
const ComplaintSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  complaintDetails: Yup.string().required("Complaint details are required"),
});

const ComplaintForm = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const handleSubmit = (values: any) => {
    console.log("Complaint Submitted:", values);
    // 🔗 API call here
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <Card style={styles.formCard}>
          <Card.Content>
            <Text style={styles.title}>File a Complaint</Text>
            <Text style={styles.subtitle}>
              We take all complaints seriously and will investigate promptly
            </Text>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                relationship: "",
                complaintAbout: "",
                contactedUs: "",
                referral: "",
                complaintDetails: "",
              }}
              validationSchema={ComplaintSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                  <CustomTextInput
                    label="First Name *"
                    placeholder="Enter your first name"
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    leftIconName="account"
                    
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={styles.error}>{errors.firstName}</Text>
                  )}

                  <CustomTextInput
                    label="Last Name *"
                    placeholder="Enter your last name"
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    leftIconName="account-outline"
                    
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={styles.error}>{errors.lastName}</Text>
                  )}

                  <CustomTextInput
                    label="Email Address *"
                    placeholder="your@email.com"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    leftIconName="email"
                    keyboardType="email-address"
                    
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}

                  <CustomTextInput
                    label="Relationship with SolzAB"
                    placeholder="e.g., Client, Employee, etc."
                    value={values.relationship}
                    onChangeText={handleChange("relationship")}
                    leftIconName="account-group"
                  />

                  <CustomTextInput
                    label="Complaint About"
                    placeholder="What is your complaint about?"
                    value={values.complaintAbout}
                    onChangeText={handleChange("complaintAbout")}
                    leftIconName="alert-circle-outline"
                  />

                  <CustomTextInput
                    label="Have you contacted us directly?"
                    placeholder="Yes/No - Please explain"
                    value={values.contactedUs}
                    onChangeText={handleChange("contactedUs")}
                    leftIconName="phone"
                  />

                  <CustomTextInput
                    label="Allow referral to relevant department?"
                    placeholder="Yes/No"
                    value={values.referral}
                    onChangeText={handleChange("referral")}
                    leftIconName="chevron-right"
                  />

                  <CustomTextInput
                    label="Complaint Details *"
                    placeholder="Please provide detailed information about your complaint..."
                    value={values.complaintDetails}
                    onChangeText={handleChange("complaintDetails")}
                    leftIconName="message-alert-outline"
                    multiline 
                    numberOfLines={4}
                    inputStyle={{textAlignVertical: 'top' }}
                    customContainerStyle={{ minHeight: 150, alignItems: 'flex-start' }}
                     
                  />
                  {touched.complaintDetails && errors.complaintDetails && (
                    <Text style={styles.error}>{errors.complaintDetails}</Text>
                  )}

                  <TouchableOpacity style={styles.submitBtn} onPress={() => handleSubmit()}>
                    <Text style={styles.submitBtnText}>Submit Complaint</Text>
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

export default ComplaintForm;

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
      fontFamily: 'Poppins-SemiBold',
      color: theme.text,
      marginBottom: 2,
    },
    subtitle: {
      fontSize: 14,
      fontFamily: 'Poppins-Light',
      color: theme.text,
      marginBottom: 16,
      marginTop: -7,
    },
    submitBtn: {
      marginTop: 8,
      backgroundColor: theme.primary,
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: 'center',
    },
    submitBtnText: {
      color: '#fff',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
    },
    error: {
     fontSize: 12,
      color: theme.error,
      marginBottom: 5,
      fontFamily: 'Poppins-Regular',
      marginTop: -15,
    },
  });
