import React from 'react';
import {Text, View} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import EditButton from '../components/EditButton';
import FilledButton from '../components/FilledButton';
import ProfileImage from '../components/ProfileImage';
import ProfileScreenState from '../interfaces/ProfileScreenState';
import ProfileScreenStyles from '../styles/ProfileScreenStyles';
import * as ImagePicker from 'react-native-image-picker';
import SocialSection from '../components/SocialSection';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {Stack} from 'react-native-spacing-system';

class ProfileScreen extends React.Component<{}, ProfileScreenState> {
  InitialProfilePicture =
    'file:///Users/gergely-csepanyi/Documents/Projects/04_BasicUIComponents/BaseUI/src/images/profileImagePlaceholder.jpg';

  async storeData(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  }

  async storeDataObj(key: string, value: object) {
    try {
      const valueAsString = JSON.stringify(value);
      //console.log('valueAsString', valueAsString);
      await AsyncStorage.setItem(key, valueAsString);
    } catch (e) {}
  }

  async getData(key: string): Promise<string | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      return null;
    }
  }

  async getDataObj(key: string): Promise<string | null> {
    try {
      const valueAsString = await AsyncStorage.getItem(key);
      return valueAsString !== null ? JSON.parse(valueAsString) : null;
    } catch (e) {
      return null;
    }
  }

  async clearStorage() {
    try {
      await AsyncStorage.clear();
      console.log('The localstorage was cleared');
    } catch (e) {}
  }

  state = {
    username: '',
    email: '',
    usernameError: '',
    emailError: '',
    image: {
      uri: this.InitialProfilePicture,
      // uri: require('../images/profileImagePlaceholder.jpg'),
    },
    editMode: false,
    followers: 23,
    following: 234,
  };
  componentDidMount() {
    let username = '';
    this.getData('username').then(result => {
      if (result === null) {
        username = 'InitialUsername';
      } else {
        username = result;
      }
      this.setState({username});
    });

    let email = '';
    this.getData('email').then(result => {
      if (result === null) {
        email = 'InitialEmail@test.test';
      } else {
        email = result;
      }
      this.setState({email});
    });

    let image = {
      uri: this.InitialProfilePicture,
    };

    this.getDataObj('image').then(result => {
      if (result === null) {
        image.uri = this.InitialProfilePicture;
      } else {
        image = result;
      }
      this.setState({image});
      console.log('image', image);
    });

    //this.clearStorage();
  }

  render(): React.ReactNode {
    const toggleEditMode = (editMode: boolean) => {
      console.log('toggle');
      this.setState({editMode: !editMode});
    };

    const handleUpdate = () => {
      this.setState({
        usernameError: '',
        emailError: '',
      });

      if (this.state.username === '') {
        this.setState({
          usernameError: 'Username should be at least 1 character',
        });
        return;
      }

      if (this.state.username.length > 20) {
        this.setState({
          usernameError: 'Username cant be more than 20 characters',
        });
        return;
      }

      if (!this.state.username.match(new RegExp(/^[a-zA-Z]{1,20}$/gm))) {
        this.setState({
          usernameError: 'Username can contain only Latin letters',
        });
        return;
      }

      if (
        !this.state.email.match(new RegExp(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/))
      ) {
        this.setState({emailError: 'Invalid email pattern!'});
        return;
      }

      this.storeData('username', this.state.username);
      this.storeData('email', this.state.email);

      toggleEditMode(this.state.editMode);
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
        this.storeDataObj('image', result.assets[0]);
        console.log('result.assets[0]', result.assets[0]);
      } catch (error) {
        console.log('ERROR during image selection:', error);
      }
    };

    // const profileImageElement = () => {
    //   return (
    //     <ProfileImage
    //       disabled={!this.state.editMode}
    //       editMode={this.state.editMode}
    //       onPress={pickImageAndStoreBase64Props}
    //       image={this.state.image}
    //     />
    //   );
    // };

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
          editMode={this.state.editMode}
          mainTitleElement={
            <Text style={ProfileScreenStyles.profileTextStyle}>My profile</Text>
          }
          profileHeaderContainerStyle={
            ProfileScreenStyles.profileHeaderContainer
          }
          imageBackgroundStyle={ProfileScreenStyles.backgroundImageViewStyle}
          backgroundFormChildrenContainerStyle={
            ProfileScreenStyles.backgroundFormChildrenContainer
          }
          //profileImageElement={profileImageElement()}
          editButtonElement={editButtonElement()}>
          <ProfileImage
            disabled={!this.state.editMode}
            editMode={this.state.editMode}
            onPress={pickImageAndStoreBase64Props}
            image={this.state.image}
          />
          {!this.state.editMode && (
            <SocialSection
              followers={this.state.followers}
              following={this.state.following}
            />
          )}
          <CredentialTextInput
            placeholder="Username"
            placeholderTextColor="black"
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            editable={this.state.editMode}
          />
          {this.state.usernameError && <Text>{this.state.usernameError}</Text>}
          <CredentialTextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            editable={this.state.editMode}
          />
          {this.state.emailError && <Text>{this.state.emailError}</Text>}

          {/* button inside a container flex 1 justifyContent flex end */}
          <View
            style={{
              //flex: 1,
              //flexDirection: 'row',
              justifyContent: 'flex-end',
              borderWidth: 2,
              borderColor: 'red',
              //height: '60%',
              width: '100%',
              alignItems: 'flex-end',
            }}>
            <FilledButton
              touchableOpacityStyle={ProfileScreenStyles.touchableOpacityStyle}
              textStyle={ProfileScreenStyles.textStyle}
              buttonColor="rgb(64, 80, 164)"
              textColor="white"
              title={this.state.editMode ? 'Update profile' : 'Show state'}
              onPress={
                this.state.editMode
                  ? () => {
                      handleUpdate();
                    }
                  : () => {
                      console.log(this.state);
                    }
              }
            />
          </View>
        </BackgroundForm>
      </>
    );
  }
}

export default ProfileScreen;
