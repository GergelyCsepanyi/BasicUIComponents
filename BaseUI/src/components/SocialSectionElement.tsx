import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';

class SocialSectionElement extends React.Component<
  {
    numberText: number;
    titleText: string;
    containerStyle: ViewStyle;
    numberTextStyle: TextStyle;
    titleTextStyle: TextStyle;
  },
  {}
> {
  render(): React.ReactNode {
    return (
      <View style={this.props.containerStyle}>
        <Text style={this.props.numberTextStyle}>{this.props.numberText}</Text>
        <Text style={this.props.titleTextStyle}>{this.props.titleText}</Text>
      </View>
    );
  }
}

export default SocialSectionElement;
