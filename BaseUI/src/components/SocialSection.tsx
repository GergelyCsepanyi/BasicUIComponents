import React from 'react';
import {StyleSheet, View} from 'react-native';
import SocialSectionElement from './SocialSectionElement';

class SocialSection extends React.Component<
  {followers: number; following: number},
  {}
> {
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

const SocialSectionElementStyles = StyleSheet.create({
  containerStyle: {
    width: '50%',
    flexDirection: 'column',
    //paddingTop: 22,
    paddingVertical: 22,
    //borderWidth: 1,
  },
  numberTextStyle: {color: 'red', textAlign: 'center', fontSize: 32},
  titleTextStyle: {color: 'gray', textAlign: 'center'},
});

const SocialSectionStyles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'rgb(181, 182, 221)',
    borderRadius: 20,
    marginTop: 42,
    //borderWidth: 1,
  },
  separatorStyle: {
    height: '40%',
    borderWidth: 0.5,
    borderColor: 'rgb(181, 182, 221)',
    alignSelf: 'center',
    //marginTop: 22,
  },
});

export default SocialSection;
