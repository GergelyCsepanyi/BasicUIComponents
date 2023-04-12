import React from 'react';
import {Text} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import SocialNetworkButtonForm from '../components/SocialNetworkButtonForm';
import TextButton from '../components/TextButton';
import LoginScreenStyles from '../styles/LoginScreenStyles';
import {Stack} from 'react-native-spacing-system';
import LoginScreenState from '../interfaces/LoginScreenState';

class LoginScreen extends React.Component<{}, LoginScreenState> {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <BackgroundForm
        imageBackgroundStyle={LoginScreenStyles.backgroundImageViewStyle}
        backgroundFormChildrenContainerStyle={
          LoginScreenStyles.backgroundFormChildrenContainer
        }>
        <CredentialTextInput
          placeholder="Email"
          placeholderTextColor="rgb(181, 182, 221)"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <Stack size={15} />
        <CredentialTextInput
          placeholder="Password"
          placeholderTextColor="rgb(181, 182, 221)"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Stack size={30} />
        <TextButton
          text="Forget password?"
          align="flex-start"
          color="rgb(64,80,164)"
          textAlign="auto"
          onPress={() => {}}
        />
        <Stack size={40} />
        <FilledButton
          buttonColor="rgb(64, 80, 164)"
          textStyle={LoginScreenStyles.buttonTextStyle}
          touchableOpacityStyle={LoginScreenStyles.touchableOpacityStyle}
          title={'Sign In'}
          onPress={() =>
            console.log("'Sign in' button was pressed", this.state)
          }
        />
        <Stack size={18} />
        <Text style={LoginScreenStyles.textStyle}>or sign in with</Text>
        <Stack size={18} />

        <SocialNetworkButtonForm />
        <Stack size={30} />

        <TextButton
          text="Don’t have an account?"
          align="center"
          color="rgb(181, 182, 221)"
          onPress={() => {}}
          textAlign="center"
        />
      </BackgroundForm>
    );
  }
}

export default LoginScreen;
