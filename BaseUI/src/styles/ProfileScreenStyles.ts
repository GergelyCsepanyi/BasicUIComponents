import {StyleSheet} from 'react-native';

const ProfileScreenStyles = StyleSheet.create({
  profileHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  profileTextStyle: {
    flex: 10,
    //width: '100%',
    color: 'white',
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
});

export default ProfileScreenStyles;
