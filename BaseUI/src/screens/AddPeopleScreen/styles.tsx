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
    fontSize: 18,
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
    width: '100%',
    height: '30%',
  },
});

export default AddPeopleScreenStyles;
