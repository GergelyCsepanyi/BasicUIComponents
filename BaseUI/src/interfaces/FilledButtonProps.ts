import {StyleProp, Text, TouchableOpacity} from 'react-native';

interface FilledButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  touchableOpacityStyle: StyleProp<TouchableOpacity>;
  textStyle: StyleProp<Text>;
  textColor: string;
  buttonColor: string;
}
export default FilledButton;
