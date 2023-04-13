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
    // borderWidth: 3,
    // borderColor: 'red',
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

  subscriberCellStyles: {
    subscriberCellContainerStyle: {
      height: 67,
      //paddingHorizontal: 20,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'blue',
      alignItems: 'center',
    },
    touchableOpacityStyle: {
      flex: 2,
      //width: '30%',
      height: 29,
      width: 92,
      fontSize: 12,
      borderRadius: 25,
      backgroundColor: 'rgb(64, 80, 164)',
      justifyContent: 'center',
      alignItems: 'center',

      // marginStart: 62,
    },
    buttonTextStyle: {fontSize: 15},

    imageStyle: {
      //flex: 2,
      width: 47,
      height: 47,
      borderRadius: 8,
      borderWidth: 1,
      marginEnd: 15,
    },

    subscriberTextsContainer: {
      justifyContent: 'flex-start',
      flex: 4,
    },

    titleTextStyle: {
      color: 'rgb(77,81,128)',
      fontSize: 17,
      fontWeight: 'bold',
    },
    descriptionTextStyle: {color: 'rgb(181, 182, 221)', fontSize: 12},
  },
});

export default SubscriberScreenStyles;
