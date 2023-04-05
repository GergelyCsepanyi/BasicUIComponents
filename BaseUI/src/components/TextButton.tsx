import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import TextButtonStyles from '../styles/TextButtonStyles';

class TextButton extends React.Component<
  {
    text: string;
    color: string;
    align: 'flex-start' | 'center';
    textAlign?: 'center' | 'auto';
    editMode?: boolean;
    onPress?: ((text: boolean) => void) | (() => void);
  },
  {}
> {
  render(): React.ReactNode {
    TextButtonStyles.textStyle.color = this.props.color;
    TextButtonStyles.textStyle.textAlign = this.props.textAlign;

    TextButtonStyles.touchableOpacityStyle.alignSelf = this.props.align;

    return (
      <TouchableOpacity
        style={TextButtonStyles.touchableOpacityStyle}
        onPress={this.props.onPress}>
        <Text style={TextButtonStyles.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
