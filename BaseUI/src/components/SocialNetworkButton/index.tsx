import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import SocialNetworkButtonStyles from './styles';

interface SocialNetworkButtonProps {
  image: any;
}

class SocialNetworkButton extends React.Component<SocialNetworkButtonProps> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity style={SocialNetworkButtonStyles.touchableOpacityStyle}>
        <Image resizeMode="contain" source={this.props.image} />
      </TouchableOpacity>
    );
  }
}

export default SocialNetworkButton;
