import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { useAppTheme } from "../../hooks/colorTheme";

const tabs = {
    Home: { label: "Home", icon: "home" },
    Assessments: { label: "Assessments", icon: "briefcase" },
    Cases: { label: "Cases", icon: "folder" },
};

const CustomBottomTabs = ({ state, descriptors, navigation }: any) => {
    const theme = useAppTheme();
    const styles = getStyles(theme);
    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];
                // @ts-ignore
                const tab = tabs[route.name] || { label: route.name, icon: "circle" };

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={[styles.tabItem, isFocused && styles.activeTab]}
                    >
                        <Icon
                            source={tab.icon}
                            size={24}
                            color={isFocused ? "#2563eb" : "#94a3b8"}
                        />
                        <Text
                            style={[
                                styles.tabLabel,
                                { color: isFocused ? "#2563eb" : "#94a3b8" },
                            ]}
                        >
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomBottomTabs;

const getStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: theme.surface,
            borderTopWidth: 1,
            borderTopColor: theme.surface,
            bottom: 0,
            position: "absolute",
            right: 0,
            left: 0,
            height: 60,
        },
        tabItem: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
            paddingHorizontal: 32,
            borderRadius: 12,
        },
        activeTab: {
            backgroundColor: "#e0e7ff",
        },
        tabLabel: {
            fontSize: 12,
            marginTop: 4,
        },
    });
