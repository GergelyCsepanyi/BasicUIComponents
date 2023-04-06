import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FilledButtonProps from '../interfaces/FilledButtonProps';
import FilledButtonStyles from '../styles/FilledButtonStyles';

class FilledButton extends React.Component<FilledButtonProps, {}> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity
        style={FilledButtonStyles.touchableOpacityStyle}
        onPress={this.props.onPress}
        disabled={this.props.disabled}>
        <Text style={FilledButtonStyles.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
