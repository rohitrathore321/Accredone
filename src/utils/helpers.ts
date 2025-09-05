import SInfo from 'react-native-sensitive-info';
import {APP_DATA} from '../config/app_data';
import MMKVStorage from './storage';

export const getValueFromSensitiveInfo = (key: string): Promise<string> => {
  return SInfo.getItem(key, {
    sharedPreferencesName: APP_DATA.sharedPreferencesName,
    keychainService: APP_DATA.sharedPreferencesName,
  });
};

export const deleteFromSensitiveInfo = (key: string): Promise<null> => {
  return SInfo.deleteItem(key, {
    sharedPreferencesName: APP_DATA.sharedPreferencesName,
    keychainService: APP_DATA.sharedPreferencesName,
  });
};

export const setValueInSensitiveInfo = (
  key: string,
  value: string,
): Promise<null> => {
  return SInfo.setItem(key, value, {
    sharedPreferencesName: APP_DATA.sharedPreferencesName,
    keychainService: APP_DATA.sharedPreferencesName,
  });
};

export const getValueFromAsyncStorage = async (key: string) => {
  return await MMKVStorage.getItem(key);
};

export const setValueInAsyncStorage = async (key: string, value: string) => {
  return MMKVStorage.setItem(key, value);
};

export const deleteValueInAsyncStorage = async (key: string) => {
  return await MMKVStorage.removeItem(key);
};


export const formatIndianCurrency = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);

  // Add a space after the currency symbol
  return formattedAmount.replace('₹', '₹ ');
};