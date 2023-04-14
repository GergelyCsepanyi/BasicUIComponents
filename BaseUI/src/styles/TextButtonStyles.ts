import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const TextButtonStyles = StyleSheet.create({
  touchableOpacityStyle: {
    alignSelf: 'flex-start',
    marginTop: 10,
    //paddingTop: 5,
    //paddingBottom: 5,
    //backgroundColor: 'red',
    //flex: 1,
  },
  textStyle: {
    color: Colors.darkBlue,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default TextButtonStyles;
