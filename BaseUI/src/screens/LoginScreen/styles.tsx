import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const LoginScreenStyles = StyleSheet.create({
  textStyle: {
    color: Colors.bluePurple,
  },

  backgroundImageViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundFormChildrenContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'flex-end',
  },

  signInButton_touchableOpacity: {
    height: 45,
    width: '100%',
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton_textStyle: {fontSize: 15, color: Colors.white},

  forgetPasswordButton_touchableOpacityStyle: {alignSelf: 'flex-start'},
  forgetPasswordButton_textStyle: {color: Colors.darkBlue, textAlign: 'auto'},

  dontHaveAccountButton_touchableOpacityStyle: {alignSelf: 'center'},
  dontHaveAccountButton_textStyle: {
    color: Colors.bluePurple,
    textAlign: 'center',
  },
});

export default LoginScreenStyles;
