import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const SocialSectionStyles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    borderWidth: 0.5,
    borderColor: Colors.bluePurple,
    borderRadius: 20,
    //marginTop: 42,
    //borderWidth: 1,
  },
  separatorStyle: {
    height: '40%',
    borderWidth: 0.5,
    borderColor: Colors.bluePurple,
    alignSelf: 'center',
    //marginTop: 22,
  },
});

export default SocialSectionStyles;
