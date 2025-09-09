import { StyleSheet } from 'react-native';
import { appColorsCode } from './appColorsCode';

const globalStyles = StyleSheet.create({
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: appColorsCode.negative,
    textAlign: 'left',
  },
  successText: {
    color: appColorsCode.positive,
    textAlign: 'left',
  },
  boldFont: {
    fontWeight: 'bold',
  },
  linkText: {
    textDecorationLine: 'underline',
    paddingVertical: 0,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  fullHW: {
    height: '100%',
    width: '100%',
  },
  customFont: {
    includeFontPadding: false,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alignIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default globalStyles;
