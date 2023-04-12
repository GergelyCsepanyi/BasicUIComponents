import React from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import ProfileImageProps from '../interfaces/ProfileImageProps';
import ProfileImageStyles from '../styles/ProfileImageStyles';

class ProfileImage extends React.Component<ProfileImageProps, {}> {
  render(): React.ReactNode {
    return (
      <View style={ProfileImageStyles.viewStyle}>
        <TouchableOpacity
          onPress={this.props.onPress}
          disabled={this.props.disabled}
          style={ProfileImageStyles.touchableOpacityStyle}>
          <ImageBackground
            source={{
              uri: this.props.image.uri,
            }}
            style={ProfileImageStyles.profileImageStyle}
            resizeMode={'cover'}>
            {this.props.editMode && (
              <View>
                <Image
                  source={require('../images/camera.jpeg')}
                  style={ProfileImageStyles.cameraOnProfileImageStyle}
                />
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>
    ); // marginTop -20 -15 position absolute top -15
  }
}

export default ProfileImage;
