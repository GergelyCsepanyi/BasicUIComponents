import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface TextButtonProps {
  touchableOpacityStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  text: string;

  // color: string;
  // align: 'flex-start' | 'center';
  // textAlign?: 'center' | 'auto';
  onPress?: ((text: boolean) => void) | (() => void);
}

export default TextButtonProps;
