import React from 'react';
import {} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';

class ScreenTest extends React.Component {
  render(): React.ReactNode {
    return (
      <BackgroundForm>
        <CredentialTextInput
          placeholder="test"
          placeholderTextColor="brown"
          onChangeText={() => {}}
        />

        <FilledButton title={'Test'} onPress={() => {}} />
      </BackgroundForm>
    );
  }
}

export default ScreenTest;
