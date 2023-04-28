import React from 'react';
import {View} from 'react-native';
import SocialSectionElement from '../SocialSectionElement';
import styles from './styles';
import SocialSectionElementStyles from '../SocialSectionElement/styles';

interface SocialSectionProps {
  followers: number;
  following: number;
}

class SocialSection extends React.Component<SocialSectionProps> {
  render(): React.ReactNode {
    return (
      <View style={styles.containerStyle}>
        <SocialSectionElement
          numberText={this.props.followers}
          titleText={'Followers'}
          containerStyle={SocialSectionElementStyles.containerStyle}
          numberTextStyle={SocialSectionElementStyles.numberTextStyle}
          titleTextStyle={SocialSectionElementStyles.titleTextStyle}
        />

        <View style={styles.separatorStyle} />

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
