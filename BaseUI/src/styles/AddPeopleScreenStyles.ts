import {StyleSheet} from 'react-native';

const AddPeopleScreenStyles = StyleSheet.create({
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
    alignItems: 'flex-start',
    //alignSelf: 'flex-end',
    justifyContent: 'flex-start',
  },
  subscriberCellStyles: {
    subscriberCellContainerStyle: {
      height: 67,
      // width: '100%',
      //paddingHorizontal: 20,
      flexDirection: 'row',
      // borderWidth: 1,
      // borderColor: 'blue',
      alignItems: 'center',
      marginStart: 22,
      marginBottom: 10,
    },
    touchableOpacityStyle: {
      flex: 3,
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
    checkboxContainerStyle: {
      //flex: 2,
      width: '55%',
      //   height: 29,
      //   width: 92,
      //fontSize: 12,
      //borderRadius: 25,
      //backgroundColor: 'rgb(64, 80, 164)',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    checkboxStyle: {
      //flex: 12,
      //width: '30%',
      //   height: 29,
      // width: 92,
      marginEnd: 6,
      fontSize: 12,
      borderRadius: 25,
      //backgroundColor: 'rgb(64, 80, 164)',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
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
      //flex: 4,
    },

    titleTextStyle: {
      color: 'rgb(77,81,128)',
      fontSize: 17,
      fontWeight: 'bold',
    },
    descriptionTextStyle: {color: 'rgb(181, 182, 221)', fontSize: 12},
  },
  sectionHeaderStyle: {
    color: 'rgb(181, 182, 221)',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchbarStyle: {
    backgroundColor: 'white',
  },
  searchbarOuterContainerStyle: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 5,
  },
  searchbarContainerStyle: {
    width: '100%',
    height: 35,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
  },
  searchbarInputContainerStyle: {
    //paddingBottom: -22,
    height: 35,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  searchbarInputStyle: {
    height: 35,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
});

export default AddPeopleScreenStyles;
