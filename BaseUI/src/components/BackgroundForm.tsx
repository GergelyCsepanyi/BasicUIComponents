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
          style={this.props.imageBackgroundStyle}>
          <View style={this.props.profileHeaderContainerStyle}>
            {/* !this.props.editMode not working here because it can be undefined*/}
            {this.props.editMode === false && <View style={{width: 28}} />}
            {this.props?.mainTitleElement}
            {this.props?.editButtonElement &&
              !this.props?.editMode &&
              this.props.editButtonElement}
          </View>
          <View style={this.props.searchbarContainerStyle}>
            {this.props?.searchbar}
          </View>
          <View style={BackgroundFormStyles.profileImageContainer}>
            {this.props?.profileImageElement}
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={this.props.backgroundFormChildrenContainerStyle}>
              {this.props.children}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </>
    );
  }
}

export default BackgroundForm;
