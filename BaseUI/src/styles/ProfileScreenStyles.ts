import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const ProfileScreenStyles = StyleSheet.create({
  profileHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  profileTextStyle: {
    flex: 10,
    //width: '100%',
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    //flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // borderWidth: 1,
    //borderColor: 'red',
  },
  backgroundImageViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 122,
    height: '50%',
    // borderColor: 'orange',
    // borderWidth: 4,
  },
  backgroundFormChildrenContainer: {
    //flex: 1,
    width: '100%',
    //height: '50%',
    //minHeight: '80%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 10,
    justifyContent: 'flex-end',
    // borderColor: 'purple',
    // borderWidth: 4,
  },

  touchableOpacityStyle: {
    //flex: 1,
    height: 45,
    width: '90%',
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
  },
});

export default ProfileScreenStyles;
