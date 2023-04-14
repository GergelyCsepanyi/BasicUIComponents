import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const SocialNetworkButtonStyles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 45,
    height: 45,
    backgroundColor: Colors.lightRed,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 16,
    marginTop: 20,
  },
  imageStyle: {
    // height: 65,
    // width: 65,
    // marginEnd: 110,
    // backgroundColor: 'blue',
    // marginEnd: 10,
  },
});

export default SocialNetworkButtonStyles;
