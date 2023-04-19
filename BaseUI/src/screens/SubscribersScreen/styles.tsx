import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const SubscriberScreenStyles = StyleSheet.create({
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
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  subscriberCellStyles: {
    subscriberCellContainerStyle: {
      height: 67,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'blue',
      alignItems: 'center',
    },
    touchableOpacityStyle: {
      flex: 2,
      height: 29,
      width: 92,
      fontSize: 12,
      borderRadius: 25,
      backgroundColor: Colors.darkBlue,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTextStyle: {fontSize: 15},

    imageStyle: {
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
      color: Colors.darkerDarkBlue,
      fontSize: 17,
      fontWeight: 'bold',
    },
    descriptionTextStyle: {color: Colors.bluePurple, fontSize: 12},
  },
});

export default SubscriberScreenStyles;
