import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 15,
    color: Colors.white,
  },
});

export default styles;
