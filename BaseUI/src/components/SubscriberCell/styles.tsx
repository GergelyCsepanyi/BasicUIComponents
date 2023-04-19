import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const SubscriberCellStyle = StyleSheet.create({
  subscriberCellContainerStyle: {
    height: 67,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  checkboxContainerStyle: {
    padding: 5,
  },
});

export default SubscriberCellStyle;
