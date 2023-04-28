import React from 'react';
import {View, Platform} from 'react-native';
import SocialNetworkButton from '../SocialNetworkButton';
import styles from './styles';
import {Queue} from 'react-native-spacing-system';
import Images from '../../assets/images/Images';

class SocialNetworkButtonForm extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.containerStyle}>
        <SocialNetworkButton image={Images.facebookIcon} />
        <Queue size={11} />
        <SocialNetworkButton image={Images.googlePlusIcon} />
        {Platform.OS === 'ios' && (
          <>
            <Queue size={11} />
            <SocialNetworkButton image={Images.appleIcon} />
          </>
        )}
      </View>
    );
  }
}

export default SocialNetworkButtonForm;
