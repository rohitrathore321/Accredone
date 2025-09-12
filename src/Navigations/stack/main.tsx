import React, { memo, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus, Platform, Settings, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { store } from '../../appstore/store/store';
import { updateConnection, updateProcess } from '../../appstore/reducers/appStateSlice';
import { setToken } from '../../appstore/reducers/authSlice';
import Interceptor from '../../service/interceptor';
import StackNavigator from './stackNavigator';
import AuthStack from '../auth/authStack';
import { appColorsCode } from '../../styles/appColorsCode';
import { useAppTheme } from '../../hooks/colorTheme';

const MainScreen = () => {
    const dispatch = useDispatch();
    const theme = useAppTheme();
    const styles = getStyles(theme);

    const appState = useRef(AppState.currentState);
    const [appReady, setAppReady] = useState(false);

    const auth = useSelector((state: any) => state.auth?.token);
    const isConnected = useSelector((state: any) => state.app.isConnected);


    useEffect(() => {
        NetInfo.addEventListener(state => {
            let netInfoValue = state?.isConnected;
            store.dispatch(updateConnection(netInfoValue));
        });
        AppState.addEventListener('change', _handleAppStateChange);
        startApp();
    }, []);


    const _handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            console.log('App has come to the foreground!');
            store.dispatch(updateProcess(true));
        } else {
            appState.current = nextAppState;
            store.dispatch(updateProcess(false));
        }
    };

    const startApp = async () => {
        await getAuthData();
        await handleDataFromSInfo();
    };

    const getAuthData = async () => {
        let isStoreNeedCleaning = false;
        if (Platform.OS === 'ios') {
            if (!Settings.get('hasRunBefore')) {
                Settings.set({ hasRunBefore: true });
                isStoreNeedCleaning = true;
            }
        }
        if (isStoreNeedCleaning) {
            dispatch(setToken(''));
        }
    };

    const handleDataFromSInfo = () => {
        // const token = await getValueFromSensitiveInfo('token');
        const token = auth;
        if (!token) {
            dispatch(setToken(''));
        } else {
            dispatch(setToken(token));
        }
        Interceptor.interceptor();
        setAppReady(true);
    };

    if (appReady) {
        return (
            <>
                {!isConnected && (
                    <View
                        style={styles.netContainer}>
                        <Text style={styles.txt}>
                            No Internet Available
                        </Text>
                    </View>
                )}
                {auth ? <StackNavigator /> : <AuthStack />}
            </>
        );
    }
    // else {
    //     return <SplashScreen />;
    // }
};
export default memo(MainScreen);

const getStyles = (theme: any) =>
    StyleSheet.create({
        netContainer: {
            backgroundColor: theme.surface,
            justifyContent: 'center',
            width: '100%',
        },
        txt: {
            textAlign: 'center',
            color: theme.text,
            fontFamily: 'Poppins-SemiBold',
            marginVertical: 4
        }
    });