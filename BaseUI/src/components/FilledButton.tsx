import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FilledButtonProps from '../interfaces/FilledButtonProps';
import FilledButtonStyles from '../styles/FilledButtonStyles';

class FilledButton extends React.Component<FilledButtonProps, {}> {
  render(): React.ReactNode {
    if (this.props.buttonColor) {
      this.props.touchableOpacityStyle.backgroundColor = this.props.buttonColor;
    }
    if (this.props.textColor) {
      console.log(this.props.textStyle);
      this.props.textStyle.color = this.props.textColor;
      this.props.textStyle.fontSize = 26;
    }
    return (
      <TouchableOpacity
        style={this.props.touchableOpacityStyle}
        onPress={this.props.onPress}
        disabled={this.props.disabled}>
        <Text style={this.props.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
