import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setAuthData, setToken } from "../../appstore/reducers/authSlice";
import CustomTextInput from "../../components/customTextInput";
import { useAppTheme } from "../../hooks/colorTheme";
import { appColorsCode } from "../../styles/appColorsCode";
import { Formik } from "formik";
import * as Yup from "yup";
import globalStyles from "../../styles/globalStyles";
import { useLoginMutation } from "../../service/authService";
import ToastMessage from "../../components/toastMessage";
import { t } from 'i18next';

const LoginScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const colorTheme = useAppTheme();
    const styles = getStyles(colorTheme);

    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const [loginAuth, result] = useLoginMutation()

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .email("Invalid email")
            .required("Username is required."),
        password: Yup.string().required("Password is required."),
    });

    const handleLogin = async (values: { username: string; password: string }) => {
        // Example login logic
        // dispatch(setToken("fakeToken123"));
        // console.log(values);

        const credentials = {
            email: "shivansh.c@solzit.com",
            password: "Samya@100"
        }
        try {
            const response: any = await loginAuth(credentials);
            if (response?.data) {
                dispatch(setToken(response?.data?.data?.authToken?.accessToken));
                dispatch(setAuthData(response?.data?.data));
                ToastMessage({ type: "success", title: "Login ", subtitle: "Login Successfully" });
            } else {
                console.log('Login failed:', response?.error);
                ToastMessage({ type: "error", title: "Error", subtitle: "Something went wrong" });
            }
        } catch (err) {
            console.log(err);

        }
    };

    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                submitCount
            }) => (
                <View style={styles.container}>

                    {submitCount > 0 && Object.keys(errors).length > 0 && (
                        <View style={styles.formErrorBox}>
                            <Text style={styles.formErrorText}>{errors[Object.keys(errors)[0] as keyof typeof errors]}</Text>
                        </View>
                    )}
                    <View style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}>
                        <Text style={styles.title}>Welcome Back</Text>
                        <Text style={styles.subtitle}>Welcome back to AccredOneApp</Text>

                        <CustomTextInput
                            label="Username"
                            value={values.username}
                            autoFocus
                            secureTextEntry={false}
                            onChangeText={handleChange("username")}
                            onBlur={handleBlur("username")}
                            leftIconName="email"
                            editable
                            accessibilityLabelLeft="Email"
                            accessibilityLabelRight="Blank"
                        />


                        <CustomTextInput
                            label="Password"
                            value={values.password}
                            secureTextEntry={showPassword}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            leftIconName="lock"
                            rightIconName={showPassword ? "eye-off" : "eye"}
                            editable
                            onPress={() => setShowPassword(!showPassword)}
                            accessibilityLabelLeft="Lock"
                            accessibilityLabelRight="Eye"
                        />
                        <View style={styles.rowBetween}>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={() => setRemember(!remember)}
                            >
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

                        <TouchableOpacity
                            style={{ marginTop: 20 }}
                            //@ts-ignore
                            onPress={handleSubmit}
                        >
                            <LinearGradient
                                colors={["#6366f1", "#9333ea", "#db2777"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientBtn}
                            >
                                <Text style={styles.btnText}>Sign in with Email</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <View style={styles.dividerRow}>
                            <View style={styles.line} />
                            <Text style={styles.dividerText}>Or continue with</Text>
                            <View style={styles.line} />
                        </View>

                        <TouchableOpacity
                            style={styles.msBtn}
                            onPress={() => {
                                dispatch(setToken("123"));
                            }}
                        >
                            <Image
                                source={require("../../assests/logo/microftLogo.jpg")}
                                style={styles.msLogo}
                            />
                            <Text style={styles.msText}> Sign in with Microsoft</Text>
                        </TouchableOpacity>

                        <View style={styles.commonText}>
                            <Text style={styles.dividerText}>
                                Use your organization account for single sign-on
                            </Text>
                        </View>
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
            backgroundColor: theme.background,
        },
        title: {
            fontSize: 28,
            // fontWeight: "700",
            color: theme.text,
            textAlign: "center",
            fontFamily: 'Poppins-Italic'
        },
        subtitle: {
            fontSize: 16,
            color: theme.text,
            textAlign: "center",
            marginBottom: 30,
        },
        rowBetween: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
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
        gradientBtn: {
            paddingVertical: 15,
            borderRadius: 30,
            alignItems: "center",
            shadowColor: "#6200ee",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
        btnText: {
            color: appColorsCode.white,
            fontSize: 16,
            fontWeight: "600",
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
        msBtn: {
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 30,
            paddingVertical: 12,
            justifyContent: "center",
            backgroundColor: "#f6f7fb",
        },
        msLogo: {
            width: 22,
            height: 22,
            resizeMode: "contain",
            marginRight: 8,
        },
        msText: {
            fontSize: 15,
            color: appColorsCode.black,
            fontWeight: "500",
        },
        commonText: {
            marginTop: 10,
            alignItems: "center",
        },
        errorText: {
            fontSize: 12,
            color: appColorsCode.negative,
            marginTop: 4,
            marginBottom: 8,
        },
        formErrorBox: {
            backgroundColor: appColorsCode.negative,
            padding: 10,
            marginBottom: 10,
        },
        formErrorText: {
            color: appColorsCode.white,
            fontFamily: 'Lato-Bold',
            textAlign: 'center',
        },
    });
