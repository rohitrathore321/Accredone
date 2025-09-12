import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Icon, IconButton, } from 'react-native-paper';
import { useAppTheme } from '../hooks/colorTheme';
import { appColorsCode } from '../styles/appColorsCode';

interface CustomTextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  leftIconName?: string;
  rightIconName?: string;
  onPressRightIcon?: () => void;
  editable?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: any;
  containerStyle?: any;
  inputStyle?: any;
  customContainerStyle?: any;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  autoFocus = false,
  secureTextEntry = false,
  leftIconName,
  rightIconName,
  onPressRightIcon,
  editable = true,
  readOnly = false,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
  containerStyle,
  inputStyle,
  customContainerStyle,
}) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  return (
    <View style={[styles.inputGroup, containerStyle]}>
      {label ? <Text style={styles.inputLabel}>{label}</Text> : null}

      <View style={[styles.inputContainer, customContainerStyle]}>
        {leftIconName ? (
          <View
            style={{
              justifyContent: 'center',
              marginRight: 8,
              marginTop: multiline ? 14 : 0,
            }}>
            <Icon source={leftIconName} size={18} color={appColorsCode.lightGray} />
          </View>
        ) : null}

        <TextInput
          style={[styles.mobileInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={appColorsCode.lightGray}
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          secureTextEntry={secureTextEntry}
          editable={editable && !readOnly}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
        />

        {rightIconName ? (
          <IconButton
            icon={rightIconName}
            iconColor={appColorsCode.lightGray}
            size={20}
            onPress={onPressRightIcon}
          />
        ) : null}
      </View>
    </View>
  );
};

export default CustomTextInput;

const getStyles = (theme: any) =>
  StyleSheet.create({
    inputGroup: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 14,
      color: theme.text,
      marginBottom: 8,
      fontFamily: 'Poppins-regular'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.background,
      borderRadius: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: appColorsCode.lightGray,
      height: 48,
    },
    inputIcon: {
      marginHorizontal: 8,
    },
    mobileInput: {
      flex: 1,
      fontSize: 16,
      color: theme.text,
      // backgroundColor: 'transparent',
    },
  });
