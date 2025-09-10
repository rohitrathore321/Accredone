import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Icon } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setAuthData, setToken } from "../../appstore/reducers/authSlice";
import CustomTextInput from "../../components/customTextInput";
import { useAppTheme } from "../../hooks/colorTheme";
import { appColorsCode } from "../../styles/appColorsCode";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../service/authService";
import ToastMessage from "../../components/toastMessage";

const LoginScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const colorTheme = useAppTheme();
    const styles = getStyles(colorTheme);

    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // false = hidden initially

    const [loginAuth, result] = useLoginMutation();

    console.log(result);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required."),
        password: Yup.string().required("Password is required."),
    });

    const handleLogin = async (values: { email: string; password: string }) => {
        const credentials = {
            email: values.email,
            password: values.password
        }
        try {
            const response: any = await loginAuth(credentials);
            console.log(response);

            if (response?.data) {
                dispatch(setToken(response.data.data?.authToken?.accessToken));
                dispatch(setAuthData(response.data.data));
                ToastMessage({ type: "success", title: "Login", subtitle: "Login Successfully" });
            } else {
                ToastMessage({ type: "error", title: "Error", subtitle: "Invalid credentials" });
            }
        } catch (err) {
            console.log(err);
            ToastMessage({ type: "error", title: "Error", subtitle: "Something went wrong" });
        }
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleSubmit, values, errors, submitCount }) => (
                <View style={styles.container}>
                    {submitCount > 0 && Object.keys(errors).length > 0 && (
                        <View style={styles.formErrorBox}>
                            <Text style={styles.formErrorText}>
                                {errors[Object.keys(errors)[0] as keyof typeof errors]}
                            </Text>
                        </View>
                    )}

                    <View style={styles.formContainer}>
                        <CustomTextInput
                            label="Email"
                            placeholder="student@example.com"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            leftIconName="account"
                        />

                        <CustomTextInput
                            label="Password"
                            placeholder="••••••"
                            value={values.password}
                            onChangeText={handleChange("password")}
                            leftIconName="lock"
                            secureTextEntry={showPassword}
                            rightIconName={showPassword ? "eye-off" : "eye"}
                            onPressRightIcon={() => setShowPassword(!showPassword)}
                        />

                        <View style={styles.rowBetween}>
                            <TouchableOpacity style={styles.row} onPress={() => setRemember(!remember)}>
                                <Icon
                                    source={remember ? "checkbox-marked" : "checkbox-blank-outline"}
                                    size={20}
                                    color={colorTheme.text}
                                />
                                <Text style={styles.rememberText}> Remember Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.forgetText}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.signInButton} onPress={() => handleSubmit()}>
                            {
                                result?.isLoading ? (
                                    <ActivityIndicator animating={true} color={appColorsCode.white} />
                                )
                                    : (
                                        <Text style={styles.signInButtonText}>Sign In</Text>
                                    )
                            }
                        </TouchableOpacity>

                        <View style={styles.dividerRow}>
                            <View style={styles.line} />
                            <Text style={styles.dividerText}>Or continue with</Text>
                            <View style={styles.line} />
                        </View>

                        <TouchableOpacity
                            style={[styles.signInButton, { flexDirection: "row", justifyContent: "center" }]}
                            onPress={() => handleSubmit()}
                        >
                            <Icon source="microsoft-windows" size={20} color={appColorsCode.white} />
                            <Text style={[styles.signInButtonText, { marginLeft: 10 }]}>
                                Sign In With Microsoft
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default LoginScreen;

const getStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: appColorsCode.white,
        },
        formContainer: {
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
        },
        rowBetween: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
        },
        rememberText: {
            fontSize: 14,
            color: theme.text,
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
        formErrorBox: {
            backgroundColor: appColorsCode.negative,
            padding: 10,
            marginBottom: 10,
        },
        formErrorText: {
            color: appColorsCode.white,
            textAlign: "center",
            fontWeight: "600",
        },
        signInButton: {
            backgroundColor: "#3b82f6",
            borderRadius: 12,
            padding: 16,
            alignItems: "center",
            marginTop: 10,
        },
        signInButtonText: {
            color: "white",
            fontSize: 16,
            fontWeight: "600",
        },
    });
