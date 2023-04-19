import React from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import ProfileImageStyles from './styles';
import Images from '../../assets/images/Images';

interface ProfileImageProps {
  editMode?: boolean;
  onPress?: () => void;
  disabled: boolean;
  image: {uri: string} | string;
}

class ProfileImage extends React.Component<ProfileImageProps, {}> {
  render(): React.ReactNode {
    console.log('image in imageview:', this.props.image);
    return (
      <View style={ProfileImageStyles.viewContainerStyle}>
        <TouchableOpacity
          onPress={this.props.onPress}
          disabled={this.props.disabled}
          style={ProfileImageStyles.touchableOpacityStyle}>
          <ImageBackground
            source={this.props.image}
            imageStyle={ProfileImageStyles.imageStyle}
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
    );
  }
}
export default ProfileImage;
