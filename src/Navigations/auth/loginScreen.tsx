import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setToken } from "../../appstore/reducers/authSlice";

const LoginSceen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    return (
        <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Welcome back to AccredOneApp</Text>

            {/* Card */}
            <View style={styles.card}>
                {/* Email Input */}
                <View
                    style={[
                        styles.inputRow,
                        { borderBottomWidth: 1, borderBottomColor: '#ddd' },
                    ]}
                >
                    <Icon source="email-outline" size={22} color="#888" />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputRow}>
                    <Icon source="lock-outline" size={22} color="#888" />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            </View>

            {/* Remember & Forget */}
            <View style={styles.rowBetween}>
                <TouchableOpacity
                    style={styles.row}
                    onPress={() => setRemember(!remember)}
                >
                    <Icon
                        source={remember ? 'checkbox-marked' : 'checkbox-blank-outline'}
                        size={20}
                        color="black"
                    />
                    <Text style={styles.rememberText}> Remember Me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgetText}>Forget Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Gradient Button */}
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => { navigation.navigate('drawer') }}>
                <LinearGradient
                    //   colors={['#0652f7', '#6440b1']}
                    colors={["#6366f1", "#9333ea", "#db2777"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientBtn}
                >
                    <Text style={styles.btnText}>Sign in with Email</Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
                <View style={styles.line} />
                <Text style={styles.dividerText}>Or continue with</Text>
                <View style={styles.line} />
            </View>

            {/* Microsoft Button */}
            <TouchableOpacity style={styles.msBtn} onPress={() => { dispatch(setToken('123')); }}>
                {/* <Icon name="microsoft" size={22} color="#000" /> */}
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
    );
};

export default LoginSceen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#222",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 30,
    },
    card: {
        backgroundColor: "#f6f7fb",
        borderRadius: 16,
        padding: 20,
        elevation: 4,
        marginBottom: 15,
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: "#333",
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
        color: "#444",
    },
    forgetText: {
        fontSize: 14,
        color: "#0748fa",
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
        color: "#fff",
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
        backgroundColor: "#ddd",
    },
    dividerText: {
        marginHorizontal: 10,
        color: "#888",
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
        color: "#000",
        fontWeight: "500",
    },
    commonText: {
        marginTop: 10,
        alignItems: "center",
    },
    commonTextOne: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
    },
});