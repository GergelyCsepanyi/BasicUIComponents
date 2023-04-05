import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import SocialNetworkButtonStyles from '../styles/SocialNetworkButtonStyles';

class SocialNetworkButton extends React.Component<{image: string}, {}> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity style={SocialNetworkButtonStyles.touchableOpacityStyle}>
        <Image
          resizeMode="contain"
          source={this.props.image}
          style={SocialNetworkButtonStyles.imageStyle}
        />
      </TouchableOpacity>
    );
  }
}

export default SocialNetworkButton;
