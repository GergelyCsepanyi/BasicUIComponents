import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
  Platform,
} from 'react-native';
import backgroundImage from '../images/backgroundImage';
import BackgroundFormProps from '../interfaces/BackgroundFormProps';
import BackgroundFormStyles from '../styles/BackgroundFormStyles';

class BackgroundForm extends React.Component<BackgroundFormProps, {}> {
  render(): React.ReactNode {
    return (
      <>
        <ImageBackground
          source={backgroundImage}
          style={BackgroundFormStyles.backgroundImageStyle}>
          <View style={BackgroundFormStyles.profileHeaderText}>
            {this.props?.mainTitleElement}
            {this.props?.editButtonElement &&
              !this.props?.editMode &&
              this.props.editButtonElement}
          </View>
          <View style={BackgroundFormStyles.profileImageContainer}>
            {this.props?.profileImageElement}
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={BackgroundFormStyles.viewStyle}>
              {this.props.children}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </>
    );
  }
}

export default BackgroundForm;
