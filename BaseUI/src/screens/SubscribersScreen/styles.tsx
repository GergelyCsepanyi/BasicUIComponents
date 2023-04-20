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
});

export default SubscriberScreenStyles;
