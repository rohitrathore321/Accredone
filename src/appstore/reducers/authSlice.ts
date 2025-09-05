import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  token: string;
  AuthData: Array<any>;
}

const initialState: AuthState = {
  token: '',
  AuthData: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAuthData: (state, action) => {
      state.AuthData = action.payload;
    },
  },
});

export const {setToken, setAuthData} = authSlice.actions;

export default authSlice.reducer;
