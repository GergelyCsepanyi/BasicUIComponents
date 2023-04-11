import {StyleSheet} from 'react-native';

const SubscriberScreenStyles = StyleSheet.create({
  flatListStyle: {width: '100%'},
  profileHeaderContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  profileHeaderTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  backgroundImageViewStyle: {
    //flex: 1,
    //paddingTop: 122,
    height: '100%',
    borderWidth: 3,
    borderColor: 'red',
    //alignItems: 'flex-end',
    //alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  backgroundFormChildrenContainerStyle: {
    //flex: 1,
    width: '100%',
    //height: '90%',
    minHeight: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'flex-end',
    //alignSelf: 'flex-end',
    justifyContent: 'flex-start',
  },
});

export default SubscriberScreenStyles;
