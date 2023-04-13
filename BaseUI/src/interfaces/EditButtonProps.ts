import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface EditButtonProps {
  touchableOpacityStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  text: string;

  //   color: string;
  //   align: 'flex-start' | 'center';
  //   textAlign?: 'center' | 'auto';
  editMode: boolean;
  onPress?: ((text: boolean) => void) | (() => void);
}

export default EditButtonProps;
