import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { appColorsCode } from '../styles/appColorsCode';


const { width } = Dimensions.get('window');

interface CustomHeaderProps {
  showBackIcon?: boolean;
  onPress?: () => void;
  title?: string;
  titleImage?: ImageSourcePropType;
  searchOnPress?: () => void;
  onSearchChange?: (text: string) => void;
  searchValue?: string;
  showSearch?: boolean;
  showRightIcon?: boolean;
  rightIconPress?: () => void;
  rightIconName?: string;
  showRightIcon2?: boolean;
  rightIconPress2?: () => void;
  rightIconName2?: string;
  showFilterIcon?: boolean;
  filterOnPress?: () => void;
  showallocation?: boolean;
  total?: number;
  color?: string;
  marginRight?: number;
  divider?: boolean;
  showLogo?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  showBackIcon = true,
  onPress,
  title = '',
}) => {
  return (
    <View style={styles.container}>
      {showBackIcon ? (
        <IconButton
          icon="chevron-left"
          size={25}
          accessibilityLabel="Back"
          iconColor={appColorsCode.black}
          onPress={onPress}
          style={{ marginTop: 8 }}
        />
      ) : (
        <IconButton
          icon="menu"
          size={25}
          accessibilityLabel="Menu"
          iconColor={appColorsCode.black}
          onPress={onPress}
        />
      )}

      <Text style={styles.title}>{title}</Text>

      <IconButton
        icon="bell-outline"
        size={26}
        iconColor={appColorsCode.black}
        style={styles.iconBtn}
      />

      <Image
        source={{ uri: 'https://i.pravatar.cc/100?img=47' }}
        style={styles.profileImg}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColorsCode.white,
    height: 60,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    elevation:5
  },
  title: {
    fontSize: 18,
    color: appColorsCode.black,
    fontFamily: 'Lato-Semibold',
    flex: 1, // <-- to push right items to the end
  },
  iconBtn: {
    marginRight: 4,
  },
  profileImg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight:0
  },
});