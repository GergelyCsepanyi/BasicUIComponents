import React from 'react';
import {View} from 'react-native';
import SocialSectionElement from './SocialSectionElement';
import SocialSectionStyles from '../styles/SocialSectionStyles';
import SocialSectionElementStyles from '../styles/SocialSectionElementStyles';
import SocialSectionProps from '../interfaces/SocialSectionProps';

class SocialSection extends React.Component<SocialSectionProps, {}> {
  render(): React.ReactNode {
    return (
      <View style={SocialSectionStyles.containerStyle}>
        <SocialSectionElement
          numberText={this.props.followers}
          titleText={'Followers'}
          containerStyle={SocialSectionElementStyles.containerStyle}
          numberTextStyle={SocialSectionElementStyles.numberTextStyle}
          titleTextStyle={SocialSectionElementStyles.titleTextStyle}
        />

        <View style={SocialSectionStyles.separatorStyle} />

        <SocialSectionElement
          numberText={this.props.following}
          titleText={'Followings'}
          containerStyle={SocialSectionElementStyles.containerStyle}
          numberTextStyle={SocialSectionElementStyles.numberTextStyle}
          titleTextStyle={SocialSectionElementStyles.titleTextStyle}
        />
      </View>
    );
  }
}

export default SocialSection;
