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
              uri: 'data:image/png;base64,' + this.props.imageBase64,
            }}
            style={ProfileImageStyles.profileImageStyle}>
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
    );
  }
}

export default ProfileImage;
