import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const FilledButtonStyles = StyleSheet.create({
  touchableOpacityStyle: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 222,
  },

  textStyle: {
    fontSize: 15,
    color: Colors.white,
  },
});

export default FilledButtonStyles;
