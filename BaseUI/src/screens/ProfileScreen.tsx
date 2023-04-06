import React from 'react';
import {Text} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import EditButton from '../components/EditButton';
import FilledButton from '../components/FilledButton';
import ProfileImage from '../components/ProfileImage';
import ProfileScreenState from '../interfaces/ProfileScreenState';
import ProfileScreenStyles from '../styles/ProfileScreenStyles';
import * as ImagePicker from 'react-native-image-picker';
import SocialSection from '../components/SocialSection';
//import {Stack} from 'react-native-spacing-system';

class ProfileScreen extends React.Component<{}, ProfileScreenState> {
  state = {
    username: 'Test User',
    email: 'test@test.test',
    image: {
      uri: 'file:///Users/gergely-csepanyi/Documents/Projects/04_BasicUIComponents/BaseUI/src/images/profileImagePlaceholder.jpg',
      // uri: require('../images/profileImagePlaceholder.jpg'),
    },
    editMode: false,
    followers: 23,
    following: 234,
  };

  render(): React.ReactNode {
    const toggleEditMode = (editMode: boolean) => {
      console.log('toggle');
      this.setState({editMode: !editMode});
    };

    const pickImageAndStoreBase64Props = async (): Promise<void> => {
      try {
        const result = await ImagePicker.launchImageLibrary({
          mediaType: 'photo',
          selectionLimit: 1,
        });

        if (result.didCancel) {
          return;
          // throw new Error('The image selection was cancelled.');
        }

        if (!result.assets[0].uri) {
          throw new Error('Image not found!');
        }

        this.setState({image: result.assets[0]});
      } catch (error) {
        console.log(error);
      }
    };

    const profileImageElement = () => {
      return (
        <ProfileImage
          disabled={!this.state.editMode}
          editMode={this.state.editMode}
          onPress={pickImageAndStoreBase64Props}
          image={this.state.image}
        />
      );
    };

    const editButtonElement = () => {
      return (
        <EditButton
          text={'Edit'}
          color="white"
          align="center"
          textAlign="center"
          onPress={() => toggleEditMode(this.state.editMode)}
          editMode={this.state.editMode}
        />
      );
    };

    return (
      <>
        <BackgroundForm
          mainTitleElement={
            <Text style={ProfileScreenStyles.profileTextStyle}>My profile</Text>
          }
          profileImageElement={profileImageElement()}
          editButtonElement={editButtonElement()}>
          <SocialSection
            followers={this.state.followers}
            following={this.state.following}
          />
          <CredentialTextInput
            placeholder="Username"
            placeholderTextColor="black"
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            editable={this.state.editMode}
          />
          <CredentialTextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            editable={this.state.editMode}
          />
          <FilledButton
            title={this.state.editMode ? 'Update profile' : 'Show state'}
            onPress={
              this.state.editMode
                ? () => {
                    toggleEditMode(this.state.editMode);
                  }
                : () => {
                    console.log(this.state);
                  }
            }
          />
        </BackgroundForm>
      </>
    );
  }
}

export default ProfileScreen;
