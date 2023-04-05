import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FilledButtonStyles from '../styles/FilledButtonStyles';

class FilledButton extends React.Component<
  {title: string; onPress: () => void},
  {}
> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity
        style={FilledButtonStyles.touchableOpacityStyle}
        onPress={this.props.onPress}>
        <Text style={FilledButtonStyles.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
