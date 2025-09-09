import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../language/i18next';

export interface AppState {
  isDark: boolean;
  routeName: string;
  isConnected: boolean;
  isBackground: boolean;
  value: string;
}

const initialState: AppState = {
  isDark: false,
  routeName: 'root',
  isConnected: false,
  isBackground: false,
  value: 'en',
};

export const appStateSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.isDark = action.payload;
    },
    updateRoute: (state, action) => {
      state.routeName = action.payload;
    },
    updateConnection: (state, action) => {
      state.isConnected = action.payload;
    },
    updateProcess: (state, action) => {
      state.isBackground = action.payload;
    },
    changeLanguage: (state, action) => {
      state.value = action.payload;
       i18n.changeLanguage(action.payload);
    },
  },
});

export const { setTheme, updateRoute, updateConnection, updateProcess,changeLanguage } =
  appStateSlice.actions;

export default appStateSlice.reducer;
