import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { IconButton } from 'react-native-paper';

type CustomIconButtonProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  height?: number;
  width?: number;
  backgroundColor?: string;
  style?: ViewStyle;  
  onPress?: () => void;
};

const CustomIconButton = ({
  iconName,
  iconSize = 20,
  iconColor = 'white',
  backgroundColor = '#3b82f6',
  height = 50,
  width = 50,
  style,
  onPress,
}: CustomIconButtonProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          width,
          height,
          borderRadius: Math.min(width, height) / 2, 
        },
        style,
      ]}
    >
      <IconButton
        icon={iconName}
        size={iconSize}
        iconColor={iconColor}
        style={styles.icon}
        onPress={onPress}
      />
    </View>
  );

};

export default CustomIconButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 0, // ✅ remove extra padding
    alignSelf: 'center',
  },

});
