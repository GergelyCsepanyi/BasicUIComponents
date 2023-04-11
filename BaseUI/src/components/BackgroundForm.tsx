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
            {this.props?.mainTitleElement}
            {this.props?.editButtonElement &&
              !this.props?.editMode &&
              this.props.editButtonElement}
          </View>
          <View style={BackgroundFormStyles.profileImageContainer}>
            {this.props?.profileImageElement}
          </View>
          {/* <KeyboardAvoidingView style={{borderColor: 'yellow', borderWidth: 2}}> */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={this.props.backgroundFormChildrenContainerStyle}>
              {this.props.children}
            </View>
            {/* <View
              style={{
                borderWidth: 1,
                borderColor: 'red',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                //marginTop: '20%',
              }}>
              <Text>asdf</Text>
            </View> */}
            {/* </KeyboardAvoidingView> */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </>
    );
  }
}

export default BackgroundForm;
