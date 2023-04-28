import React from 'react';
import {TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import styles from './styles';

interface SocialNetworkButtonProps {
  image: ImageSourcePropType;
}

class SocialNetworkButton extends React.Component<SocialNetworkButtonProps> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image resizeMode="contain" source={this.props.image} />
      </TouchableOpacity>
    );
  }
}

export default SocialNetworkButton;
