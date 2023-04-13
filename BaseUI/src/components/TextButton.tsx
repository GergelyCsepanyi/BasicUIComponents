import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import TextButtonProps from '../interfaces/TextButtonProps';

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
