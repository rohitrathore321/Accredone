import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Card, Icon } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setAuthData, setToken } from "../../appstore/reducers/authSlice";
import CustomTextInput from "../../components/customTextInput";
import { useAppTheme } from "../../hooks/colorTheme";
import { appColorsCode } from "../../styles/appColorsCode";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../service/authService";
import ToastMessage from "../../components/toastMessage";
import CustomHeader from "../../components/customheader";

const LoginScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const theme = useAppTheme();
    const styles = getStyles(theme);

    const [showPassword, setShowPassword] = useState(false);

    const [loginAuth, result] = useLoginMutation();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required."),
        password: Yup.string().required("Password is required."),
    });

    const handleLogin = async (values: { email: string; password: string }) => {
        try {
            const response: any = await loginAuth(values);

            if (response?.data) {
                dispatch(setToken(response.data.data?.authToken?.accessToken));
                dispatch(setAuthData(response.data.data));
                ToastMessage({ type: "success", title: "Login", subtitle: "Login Successfully" });
            } else {
                ToastMessage({ type: "error", title: "Error", subtitle: "Invalid credentials" });
            }
        } catch {
            ToastMessage({ type: "error", title: "Error", subtitle: "Something went wrong" });
        }
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleSubmit, values, errors, submitCount, touched }) => (
                <>
                    <CustomHeader
                        showBackIcon
                        onPress={() => navigation.goBack()}
                        title="Sign In"
                        showRightIcon={false}
                        showProfile={false}
                    />
                    <View style={styles.container}>
                        <Card style={styles.formContainer}>

                            <Card.Content>

                                <CustomTextInput
                                    label="Email"
                                    placeholder="student@example.com"
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    leftIconName="account"
                                />
                                {touched.email && errors.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}

                                <CustomTextInput
                                    label="Password"
                                    placeholder="••••••"
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    leftIconName="lock"
                                    secureTextEntry={!showPassword}  // fixed logic
                                    rightIconName={showPassword ? "eye-off" : "eye"}
                                    onPressRightIcon={() => setShowPassword(!showPassword)}
                                />
                                {touched.password && errors.password && (
                                    <Text style={styles.errorText}>{errors.password}</Text>
                                )}


                                <TouchableOpacity style={styles.signInButton}
                                    //@ts-ignore
                                    onPress={handleSubmit}>
                                    {result?.isLoading ? (
                                        <ActivityIndicator animating color={appColorsCode.white} />
                                    ) : (
                                        <Text style={styles.signInButtonText}>Sign In</Text>
                                    )}
                                </TouchableOpacity>

                                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
                                    <Text style={styles.forgetText}>Forget Password?</Text>
                                </TouchableOpacity>

                                {/* Divider */}
                                <View style={styles.dividerRow}>
                                    <View style={styles.line} />
                                    <Text style={styles.dividerText}>OR</Text>
                                    <View style={styles.line} />
                                </View>

                                {/* Microsoft Button */}
                                <TouchableOpacity style={styles.signInButtonAlt}
                                    //@ts-ignore

                                    onPress={handleSubmit}>
                                    <Icon source="microsoft-windows" size={20} color={appColorsCode.white} />
                                    <Text style={[styles.signInButtonText, { marginLeft: 10 }]}>
                                        Sign In With Microsoft
                                    </Text>
                                </TouchableOpacity>
                            </Card.Content>
                        </Card>
                    </View>
                </>
            )}
        </Formik>
    );
};

export default LoginScreen;

const getStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
            // justifyContent: "center",
        },
        formContainer: {
            backgroundColor: theme.card,
            marginHorizontal: 16,
            borderRadius: 12,
            paddingVertical: 20,
            paddingHorizontal: 10,
        },
        forgetText: {
            fontSize: 14,
            color: theme.primary,
            fontWeight: "500",
        },
        dividerRow: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 25,
        },
        line: {
            flex: 1,
            height: 1,
            backgroundColor: theme.text,
        },
        dividerText: {
            marginHorizontal: 10,
            color: theme.text,
            fontSize: 14,
        },
        errorText: {
            fontSize: 12,
            color: theme.error,
            marginBottom: 5,
            fontFamily: 'Poppins-Regular',
            marginTop: -15,
        },
        signInButton: {
            backgroundColor: appColorsCode.primary,
            borderRadius: 12,
            padding: 16,
            alignItems: "center",
            marginTop: 10,
        },
        signInButtonAlt: {
            backgroundColor: appColorsCode.primary,
            borderRadius: 12,
            padding: 16,
            alignItems: "center",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
        },
        signInButtonText: {
            color: "white",
            fontSize: 16,
            fontWeight: "600",
        },
    });
