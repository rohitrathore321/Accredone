import {MMKV} from 'react-native-mmkv';

const mmkv = new MMKV();

const MMKVStorage = {
  setItem: (key: string, value: string | number | boolean | ArrayBuffer) => {
    mmkv.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    mmkv.delete(key);
    return Promise.resolve(true);
  },
};

export default MMKVStorage;
