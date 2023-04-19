import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const AddPeopleScreenStyles = StyleSheet.create({
  flatListStyle: {width: '100%'},
  profileHeaderContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  profileHeaderTextStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  backgroundImageViewStyle: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  backgroundFormChildrenContainerStyle: {
    width: '100%',
    minHeight: '80%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },

  sectionHeaderStyle: {
    color: Colors.bluePurple,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchbarStyle: {
    backgroundColor: Colors.white,
  },
  searchbarOuterContainerStyle: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 5,
  },
  searchbarContainerStyle: {
    width: '100%',
    height: 35,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'center',
  },
  searchbarInputContainerStyle: {
    height: 35,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  searchbarInputStyle: {
    height: 35,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  sectionListStyle: {
    height: '30%',
  },
});

export const subscriberCellStyles = StyleSheet.create({
  subscriberCellContainerStyle: {
    height: 67,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 22,
    marginBottom: 10,
  },
  touchableOpacityStyle: {
    flex: 3,
    height: 29,
    width: 92,
    fontSize: 12,
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainerStyle: {
    width: '55%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  checkboxStyle: {
    marginEnd: 6,
    fontSize: 12,
    borderRadius: 25,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonTextStyle: {fontSize: 15},

  imageStyle: {
    width: 47,
    height: 47,
    borderRadius: 8,
    marginEnd: 15,
  },

  subscriberTextsContainer: {
    justifyContent: 'flex-start',
  },

  titleTextStyle: {
    color: Colors.darkerDarkBlue,
    fontSize: 17,
    fontWeight: 'bold',
  },
  descriptionTextStyle: {color: Colors.bluePurple, fontSize: 12},
});
export default AddPeopleScreenStyles;
