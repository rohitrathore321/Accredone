import {Platform} from 'react-native';

export const fontConfiguration = {
  customVariant: {
    fontFamily: Platform.select({
      web: 'Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'Poppins',
      default: 'Poppins',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  },
};
