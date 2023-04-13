import React from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import ProfileImageProps from '../interfaces/ProfileImageProps';
import ProfileImageStyles from '../styles/ProfileImageStyles';
import Images from '../theme/images/Images';

class ProfileImage extends React.Component<ProfileImageProps, {}> {
  render(): React.ReactNode {
    return (
      <View style={ProfileImageStyles.viewContainerStyle}>
        <TouchableOpacity
          onPress={this.props.onPress}
          disabled={this.props.disabled}
          style={ProfileImageStyles.touchableOpacityStyle}>
          <ImageBackground
            source={{
              uri: this.props.image.uri,
            }}
            imageStyle={{borderRadius: 20}}
            style={ProfileImageStyles.profileImageStyle}
            resizeMode={'cover'}>
            {this.props.editMode && (
              <View>
                <Image
                  source={Images.camera}
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
