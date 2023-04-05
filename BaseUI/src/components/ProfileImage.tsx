import React from 'react';
import {View, Image} from 'react-native';
import ProfileImageStyles from '../styles/ProfileImageStyles';

class ProfileImage extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={ProfileImageStyles.viewStyle}>
        <Image
          source={require('../images/profileImagePlaceholder.jpg')}
          style={ProfileImageStyles.imageStyle}
        />
      </View>
    );
  }
}

export default ProfileImage;
