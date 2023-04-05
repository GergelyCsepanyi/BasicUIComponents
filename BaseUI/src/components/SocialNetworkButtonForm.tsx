import React from 'react';
import {View, Platform} from 'react-native';
import SocialNetworkButton from './SocialNetworkButton';
import SocialNetworkButtonFormStyles from '../styles/SocialNetworkButtonFormStyles';
import {Queue} from 'react-native-spacing-system';

class SocialNetworkButtonForm extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={SocialNetworkButtonFormStyles.containerStyle}>
        <SocialNetworkButton image={require('../images/facebookIcon.png')} />
        <Queue size={11} />
        <SocialNetworkButton image={require('../images/googlePlusIcon.png')} />
        {Platform.OS === 'ios' && (
          <>
            <Queue size={11} />
            <SocialNetworkButton image={require('../images/appleIcon.png')} />
          </>
        )}
      </View>
    );
  }
}

export default SocialNetworkButtonForm;
