import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const SubscriberCellStyle = StyleSheet.create({
  subscriberCellContainerStyle: {
    height: 67,
    //paddingHorizontal: 20,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'blue',
    alignItems: 'center',
    marginBottom: 10,
  },
  touchableOpacityStyle: {
    flex: 2,
    //width: '30%',
    height: 29,
    width: 92,
    fontSize: 12,
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
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
    //borderWidth: 1,
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
});

export default SubscriberCellStyle;
