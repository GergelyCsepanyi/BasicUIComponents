import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
  Platform,
} from 'react-native';
//import CredentialTextInput from './CredentialTextInput';
import backgroundImage from '../images/backgroundImage';
import BackgroundFormStyles from '../styles/BackgroundFormStyles';
import TextButton from './TextButton';

class BackgroundForm extends React.Component<
  {
    children: React.ReactNode;
    profileImage?: React.ReactNode;
    mainTitleElement?: React.ReactNode;
    editMode?: boolean;
    editButtonElement?: React.ReactNode;
  },
  {}
> {
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
            {this.props?.profileImage}
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
