import { combineReducers } from 'redux';
import appStateSlice from './appStateSlice';
import { authService } from '../../service/authService';
import authSlice from './authSlice';

export default combineReducers({
  [authService.reducerPath]: authService.reducer,
//   [LoansService.reducerPath]: LoansService.reducer,

  app: appStateSlice,
  auth: authSlice,
//   dashboard: dashBoardSlice,
});
