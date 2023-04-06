import {StyleSheet} from 'react-native';

const BackgroundFormStyles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    //height: '50%',
  },
  viewStyle: {
    //flex: 1,
    width: '100%',
    height: '100%',
    //minHeight: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },
  profileHeaderText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profileImageContainer: {},
});

export default BackgroundFormStyles;
