import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

type CustomIconButtonProps = {
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    height?: number;
    width?: number;
    backgroundColor?: string;
    onPress?: () => void;
};

const CustomIconButton = ({
    iconName,
    iconSize = 20,
    iconColor = 'white',
    backgroundColor = '#3b82f6',
    height = 50,
    width = 50,
    onPress,
}: CustomIconButtonProps) => {
    return (
        <View style={[styles.container,
        {
            backgroundColor,
            width: width,
            height: height,
        }]}>
            <IconButton
                icon={iconName}
                size={iconSize}
                iconColor={iconColor}
                // style={styles.icon}
                onPress={onPress}
            />
        </View>
    );
};

export default CustomIconButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    },

});
