import {StyleSheet} from 'react-native';

const ProfileImageStyles = StyleSheet.create({
  viewStyle: {
    //color: 'rgb(181, 182, 221)',
    // borderWidth: 1,
    //borderColor: 'red',
    //borderRadius: 20,
    //borderWidth: 5,
  },
  touchableOpacityStyle: {
    width: 25,
    borderRadius: 20,
  },
  profileImageStyle: {
    width: 75,
    height: 75,
    // borderWidth: 1,
  },
  cameraOnProfileImageStyle: {
    width: 25,
    height: 25,
    // borderWidth: 1,
    position: 'absolute',
    right: 5,
    top: 48,
    // borderColor: 'red',
    //borderRadius: 10,
  },
});

export default ProfileImageStyles;
