import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface FilledButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  touchableOpacityStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

class FilledButton extends React.Component<FilledButtonProps, {}> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity
        style={[this.props.touchableOpacityStyle]}
        onPress={this.props.onPress}
        disabled={this.props.disabled}>
        <Text style={this.props.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
