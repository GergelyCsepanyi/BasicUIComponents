import {StyleSheet} from 'react-native';

const ProfileImageStyles = StyleSheet.create({
  viewContainerStyle: {
    //flex: 1,
    width: 75,
    //color: 'rgb(181, 182, 221)',
    //borderWidth: 5,
    //borderColor: 'red',
    //borderRadius: 20,
    //borderWidth: 5,
    //position: 'absolute',
    // top: -51,
    // left: -3,
    marginBottom: 42,
    marginTop: -70,
    marginLeft: -290,
  },
  touchableOpacityStyle: {
    //flex: 1,
    width: 75,
    borderRadius: 20,
    //borderWidth: 5,
    //borderColor: 'yellow',
  },
  profileImageStyle: {
    //flex: 1,
    width: 75,
    height: 75,
    //borderWidth: 2,
    //borderColor: 'blue',
    borderRadius: 20,
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
