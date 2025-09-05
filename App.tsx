// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppTheme from './src/theme/appTheme';
import { enableFreeze } from 'react-native-screens';
import { appColorsCode } from './src/styles/appColorsCode';
import { persistor, store } from './src/appstore/store/store';

export const navigationRef = createNavigationContainerRef();

const App = () => {
  enableFreeze(true);
  const [state, setState] = useState();
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: isDark ? appColorsCode.black : appColorsCode.primary,
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            state === 'SignIn'
              ? isDark
                ? appColorsCode.black
                : appColorsCode.primary
              : appColorsCode.white,
        }}>
        <StatusBar
          backgroundColor={isDark ? appColorsCode.black : appColorsCode.white}
          barStyle={isDark ? 'light-content' : 'dark-content'}
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppTheme setState={setState} setIsDark={setIsDark} />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );

};

export default App;
