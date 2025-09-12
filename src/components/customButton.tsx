import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, } from "react-native";
import { ActivityIndicator, Icon } from "react-native-paper";
import { appColorsCode } from "../styles/appColorsCode";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    backgroundColor?: string;
    textColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    iconColor: string;
    iconName: string;
    iconSize: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    isLoading = false,
    backgroundColor = appColorsCode.primary,
    textColor = appColorsCode.white,
    style,
    textStyle,
    disabled = false,
    iconColor = appColorsCode.white,
    iconName,
    iconSize = 20
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.signInButtonAlt,
                { backgroundColor: disabled ? "#aaa" : backgroundColor },
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={isLoading || disabled}
        >
            {isLoading ? (
                <ActivityIndicator animating color={textColor} />
            ) : (
                <>
                    <Icon source={iconName} size={iconSize} color={iconColor} />
                    <Text style={[styles.signInButtonText, { color: textColor }, textStyle]}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    signInButtonAlt: {
        borderRadius: 12,
        padding: 12,
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: 'center'
    },
    signInButtonText: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 5,
        // fontWeight:'bold'
    },
});
