import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface FilledButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  touchableOpacityStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  //textColor: string;
  //buttonColor: string;
}
export default FilledButton;
