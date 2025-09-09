import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { appColorsCode } from '../styles/appColorsCode';
import { SCREEN_WIDTH } from '../styles/screen';
import { useAppTheme } from '../hooks/colorTheme';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  autoFocus = false,
  secureTextEntry = false,
  leftIconName = false,
  rightIconName = false,
  onPress,
  lefticon = true,
  editable = false,
  readOnly = false,
  onLayout,
  multiline = false,
  style,
  keyboardType = 'default',
  contentStyle,
  numberOfLines,
  accessibilityLabelRight,
  accessibilityLabelLeft
}: any) => {
    const colorTheme = useAppTheme();

  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        accessibilityLabel='Custom Text Input'
        textColor={colorTheme.text}
        outlineColor={colorTheme.primary}
        activeOutlineColor={colorTheme.primary}
        placeholderTextColor={colorTheme.background}
        editable={editable}
        // disabled={disable}
        readOnly={readOnly}
        onLayout={onLayout}
        keyboardType={keyboardType}
        contentStyle={contentStyle}
        numberOfLines={numberOfLines}
        multiline={multiline}
        outlineStyle={{
          borderRadius: 5,
          borderWidth: 1
        }}
        left={
          lefticon ? (
            <TextInput.Icon
              icon={leftIconName}
              size={25}
              color={colorTheme.text}
              accessibilityLabel={accessibilityLabelLeft}
            />
          ) : null
        }
        right={
          <TextInput.Icon
            icon={rightIconName}
            size={25}
            color={colorTheme.text}
            onPress={onPress}
            accessibilityLabel={accessibilityLabelRight}
          />
        }
        style={[styles.input, style]}
        theme={{
          colors: {
            primary: colorTheme.primary,
            background: colorTheme.background,
            outline: colorTheme.primary,
            outlineVariant: colorTheme.primary,
            tertiaryContainer: colorTheme.primary,
            onSurfaceVariant: colorTheme.primary,
          },
        }}
      />
    </View>
  );
};
export default CustomTextInput;

const styles =
  StyleSheet.create({
    input: {
      width: SCREEN_WIDTH - 32,
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: 8,
    },
  });
