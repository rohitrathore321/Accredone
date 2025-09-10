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
  showProfile: boolean;
  showRightIcon?: boolean;
  rightIconName?: string;
  rightIconOnpress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  showBackIcon = true,
  onPress,
  title = '',
  showRightIcon = false,
  showProfile = false,
  rightIconName = '',
  rightIconOnpress,
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

      {showRightIcon && (
        <IconButton
          icon={rightIconName}
          size={25}
          iconColor={appColorsCode.black}
          onPress={rightIconOnpress}
        />
      )}

      {showProfile && (
        <Image
          source={{ uri: 'https://i.pravatar.cc/100?img=47' }}
          style={styles.profileImg}
        />
      )}
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
    elevation: 5
  },
  title: {
    fontSize: 18,
    color: appColorsCode.black,
    fontFamily: 'Poppins-Medium',
    flex: 1, // <-- to push right items to the end
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 16
  },
});