import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import i18n from '../../language/i18next'
import { useTranslation } from 'react-i18next';

const setting = () => {
    const { t, i18n } = useTranslation();

    return (
        <View>
            <Text>setting</Text>
            <Button title="Switch to Hindi" onPress={() => i18n?.changeLanguage('hi')} />
            <Button title="Switch to English" onPress={() => i18n?.changeLanguage('en')} />
        </View>
    )
}

export default setting

const styles = StyleSheet.create({})