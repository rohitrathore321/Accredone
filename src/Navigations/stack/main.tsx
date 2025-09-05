import React, { memo, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus, Platform, Settings, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
import { appColorsCode } from '../../styles/appColorsCode';
import NetInfo from '@react-native-community/netinfo';
import { store } from '../../appstore/store/store';
import { updateConnection, updateProcess } from '../../appstore/reducers/appStateSlice';
import { setToken } from '../../appstore/reducers/authSlice';
import Interceptor from '../../service/interceptor';
import StackNavigator from './stackNavigator';
import LoginSceen from '../auth/loginScreen';
import AuthStack from '../auth/authStack';

const MainScreen = () => {
    const dispatch = useDispatch();
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
                {/* {!isConnected && (
                    <View
                        style={{
                            backgroundColor: appColorsCode.white,
                            justifyContent: 'center',
                            width: '100%',
                        }}>
                        <Text style={{ textAlign: 'center', color: appColorsCode.white }}>
                            No Internet Available
                        </Text>
                    </View>
                )} */}
                {/* <Text>kjjd</Text> */}
                {auth ? <StackNavigator /> : <AuthStack />}
                {/* <StackNavigator/> */}
                {/* <LoginSceen/> */}
            </>
        );
    }
    // else {
    //     return <SplashScreen />;
    // }
};
export default memo(MainScreen);
