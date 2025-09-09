import React, { useEffect } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {
  configureFonts,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { appColorsCode } from '../styles/appColorsCode';
import { useDispatch, useSelector } from 'react-redux';
import { Platform, useColorScheme } from 'react-native';
import { setTheme, updateRoute } from '../appstore/reducers/appStateSlice';
import MainNavigator from '../Navigations/stack/main';
import { useAppTheme } from '../hooks/colorTheme';
export const navigationRef = createNavigationContainerRef();

const AppTheme = ({ setState, setIsDark }: any) => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const isDark = useSelector((state: any) => state.app.isDark);
  
  useEffect(() => {
    dispatch(setTheme(colorScheme === 'dark'));
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const fontConfig = {
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
    ...(Platform.OS === 'ios' && { lineHeight: 27 }),
  };

  const theme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
      ...MD3LightTheme.colors,
      primary: isDark ? appColorsCode.secondary : appColorsCode.primary,
      background: appColorsCode.white,
      outline: isDark ? appColorsCode.secondary : appColorsCode.primary,
      outlineVariant: isDark ? appColorsCode.secondary : appColorsCode.primary,
      tertiaryContainer: isDark
        ? appColorsCode.secondary
        : appColorsCode.primary,
      onSurfaceVariant: isDark
        ? appColorsCode.secondary
        : appColorsCode.primary,
      surfaceDisabled: appColorsCode.gray2,
      onSurfaceDisabled: appColorsCode.gray2,
    },
    fonts: configureFonts({ config: fontConfig }),
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={async () => {
          const currentRouteName = navigationRef?.getCurrentRoute()?.name;
          setState(currentRouteName);
          setIsDark(isDark);
          dispatch(updateRoute(currentRouteName));
        }}>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppTheme;
