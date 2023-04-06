import React from 'react';
import {Text, View} from 'react-native';
import SocialSectionElementProps from '../interfaces/SocialSectionElementProps';

class SocialSectionElement extends React.Component<
  SocialSectionElementProps,
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
