import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const LoginScreenStyles = StyleSheet.create({
  textStyle: {
    color: Colors.bluePurple,
  },

  backgroundImageViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    //height: '50%',
  },
  backgroundFormChildrenContainer: {
    //flex: 1,
    width: '100%',
    //height: '50%',
    //minHeight: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'flex-end',
  },
  touchableOpacityStyle: {
    //flex: 1,
    height: 45,
    width: '100%',
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {fontSize: 15},
});

export default LoginScreenStyles;
