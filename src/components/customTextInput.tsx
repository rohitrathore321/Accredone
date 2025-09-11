import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Icon, IconButton, } from 'react-native-paper';
import { useAppTheme } from '../hooks/colorTheme';

interface CustomTextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  leftIconName?: string;         // e.g., "document-text"
  rightIconName?: string;        // e.g., "eye"
  onPressRightIcon?: () => void; // for right icon actions
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
            <Icon source={leftIconName} size={18} color="#94a3b8" />
          </View>
        ) : null}

        <TextInput
          style={[styles.mobileInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={'#9ca3af'}
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          secureTextEntry={secureTextEntry}
          editable={editable && !readOnly}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          // underlineColor="transparent"
          // activeUnderlineColor="transparent"
        />

        {rightIconName ? (
          <IconButton
            icon={rightIconName}
            iconColor={'#94a3b8'}
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
    fontWeight: '500',
    color: theme.text,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:theme.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    // borderColor: '#e5e7eb',
    // height: 48,
    borderColor: '#f9fafb',
    height: 48,
  },
  inputIcon: {
    marginHorizontal: 8,
  },
  mobileInput: {
    flex: 1,
    fontSize: 16,
    color: theme.text,
    backgroundColor: 'transparent',
  },
});
