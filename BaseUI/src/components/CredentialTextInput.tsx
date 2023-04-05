import React from 'react';
import {TextInput} from 'react-native';
import {CredentialTextInputProps} from '../interfaces/CredentialTextInputProps';
import CredentialTextInputStyle from '../styles/CredentialTextInputStyle';

class CredentialTextInput extends React.Component<
  CredentialTextInputProps,
  {}
> {
  render(): React.ReactNode {
    return (
      <TextInput
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        style={CredentialTextInputStyle.textInputStyle}
        placeholder={this.props.placeholder}
        placeholderTextColor={'rgb(181, 182, 221)'}
        secureTextEntry={this.props.secureTextEntry}
      />
    );
  }
}

export default CredentialTextInput;
