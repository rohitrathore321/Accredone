import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  isDark: boolean;
  routeName: string;
  isConnected: boolean;
  isBackground: boolean;
}

const initialState: AppState = {
  isDark: false,
  routeName: 'root',
  isConnected: false,
  isBackground: false,
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
  },
});

export const { setTheme, updateRoute, updateConnection, updateProcess } =
  appStateSlice.actions;

export default appStateSlice.reducer;
