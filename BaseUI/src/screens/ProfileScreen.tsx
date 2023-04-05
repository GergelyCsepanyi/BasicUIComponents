import React from 'react';
import {Text} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import ProfileImage from '../components/ProfileImage';
import TextButton from '../components/TextButton';
import ProfileScreenState from '../interfaces/ProfileScreenState';
import ProfileScreenStyles from '../styles/ProfileScreenStyles';

class ProfileScreen extends React.Component<{}, ProfileScreenState> {
  state = {
    email: 'Test User',
    username: 'test@test.test',
    editMode: false,
  };

  render(): React.ReactNode {
    const toggleEditMode = (editMode: boolean) => {
      this.setState({editMode: !editMode});
    };
    return (
      <>
        <BackgroundForm
          profileImage={<ProfileImage />}
          mainTitleElement={
            <Text style={ProfileScreenStyles.profileTextStyle}>My profile</Text>
          }
          editButtonElement={
            <TextButton
              text={'Edit'}
              color="white"
              align="center"
              textAlign="center"
              onPress={editMode => toggleEditMode(editMode)}
              //   onPress={() => console.log('press')}
              editMode={this.state.editMode}
            />
          }>
          <CredentialTextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            editable={this.state.editMode}
          />
          <CredentialTextInput
            placeholder="Username"
            placeholderTextColor="black"
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            editable={this.state.editMode}
          />
          <FilledButton
            title={this.state.editMode ? 'Update profile' : 'Show state'}
            disabled={!this.state.editMode}
            onPress={
              this.state.editMode
                ? () => {
                    toggleEditMode(this.state.editMode);
                    console.log("'Sign in' button was pressed", this.state);
                  }
                : () => {}
            }
          />
        </BackgroundForm>
      </>
    );
  }
}

export default ProfileScreen;
