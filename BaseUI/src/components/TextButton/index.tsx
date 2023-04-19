import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface TextButtonProps {
  touchableOpacityStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  text: string;

  onPress?: ((text: boolean) => void) | (() => void);
}

class TextButton extends React.Component<TextButtonProps, {}> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity
        style={this.props.touchableOpacityStyle}
        onPress={this.props.onPress}>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
