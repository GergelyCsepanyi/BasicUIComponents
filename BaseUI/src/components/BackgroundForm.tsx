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

class BackgroundForm extends React.Component<{children: React.ReactNode}, {}> {
  render(): React.ReactNode {
    return (
      <>
        <ImageBackground
          source={backgroundImage}
          style={BackgroundFormStyles.backgroundImageStyle}>
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
