import React from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import BackgroundForm from '../../components/BackgroundForm';
import CredentialTextInput from '../../components/CredentialTextInput';
import FilledButton from '../../components/FilledButton';
import ProfileImage from '../../components/ProfileImage';
import ProfileScreenStyles from './styles';
import * as ImagePicker from 'react-native-image-picker';
import SocialSection from '../../components/SocialSection';
import {Stack} from 'react-native-spacing-system';
import TextButton from '../../components/TextButton';
import Images from '../../assets/images/Images';
import StorageService from '../../services/StorageService';
import Colors from '../../theme/Colors';

interface ProfileScreenState {
  user: {
    username: string | null;
    email: string;
    image: ImagePicker.Asset | string;
  };
  usernameError: string;
  emailError: string;
  editMode: boolean;
  followers: number;
  following: number;
}

const INITIAL_USERDATA = {
  username: 'InitialUsername',
  email: 'InitialEmail@test.test',
  image: Images.profileImage,
};

class ProfileScreen extends React.Component<{}, ProfileScreenState> {
  state = {
    user: {
      username: INITIAL_USERDATA.username,
      email: INITIAL_USERDATA.email,
      image: INITIAL_USERDATA.image,
    },
    usernameError: '',
    emailError: '',

    editMode: false,
    followers: 23,
    following: 234,
  };

  async getDataFromLocalstorage() {
    const user = {
      username: '',
      email: '',
      image: {uri: ''},
    };

    user.username =
      (await StorageService.getData('username')) || INITIAL_USERDATA.username;

    user.email =
      (await StorageService.getData('email')) || INITIAL_USERDATA.email;

    user.image =
      (await StorageService.getDataObj('image')) || INITIAL_USERDATA.image;

    this.setState({user});

    //StorageService.clearStorage();
  }

  componentDidMount() {
    this.getDataFromLocalstorage();
  }

  toggleEditMode = (editMode: boolean) => {
    this.setState({editMode: !editMode});
  };

  handleEmailChange = (email: string) => {
    this.setState(prevState => ({
      user: {...prevState.user, email: email},
    }));
  };

  handleUsernameChange = (username: string) => {
    this.setState(prevState => ({
      user: {...prevState.user, username: username},
    }));
  };

  handleUpdate = () => {
    this.setState({
      usernameError: '',
      emailError: '',
    });

    if (this.state.user.username === '') {
      this.setState({
        usernameError: 'Username should be at least 1 character',
      });
      return;
    }

    if (this.state.user.username.length > 20) {
      this.setState({
        usernameError: 'Username cant be more than 20 characters',
      });
      return;
    }

    if (!this.state.user.username.match(new RegExp(/^[a-zA-Z]{1,20}$/gm))) {
      this.setState({
        usernameError: 'Username can contain only Latin letters',
      });
      return;
    }

    if (
      !this.state.user.email.match(
        new RegExp(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/),
      )
    ) {
      this.setState({emailError: 'Invalid email pattern!'});
      return;
    }

    StorageService.storeData('username', this.state.user.username);
    StorageService.storeData('email', this.state.user.email);

    this.toggleEditMode(this.state.editMode);
  };

  pickImageAndStoreState = async (): Promise<void> => {
    try {
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (!result || !result.assets) {
        throw new Error('Error during image selection!');
      }

      if (!result.assets[0].uri) {
        throw new Error('Image not found!');
      }

      if (result.didCancel) {
        return;
      }

      this.setState(prevState => ({
        user: {
          ...prevState.user,
          image: result?.assets ? result.assets[0] : INITIAL_USERDATA.image,
        },
      }));
      StorageService.storeDataObj(
        'image',
        result?.assets ? result.assets[0] : INITIAL_USERDATA.image,
      );
    } catch (error) {
      console.log('ERROR during image selection:', error);
    }
  };

  editButtonElement = () => {
    return (
      <View style={ProfileScreenStyles.textButtonContainer}>
        <TextButton
          color={Colors.white}
          text={'Edit'}
          onPress={() => this.toggleEditMode(this.state.editMode)}
        />
      </View>
    );
  };

  updateProfileButtonElement() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={ProfileScreenStyles.buttonContainerStyle}>
        <View style={ProfileScreenStyles.filledButtonContainer}>
          <FilledButton
            title={this.state.editMode ? 'Update profile' : 'Show state'}
            onPress={() =>
              this.state.editMode
                ? this.handleUpdate()
                : console.log(this.state)
            }
          />
        </View>
      </KeyboardAvoidingView>
    );
  }

  render(): React.ReactNode {
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
          updateProfileButtonElement={this.updateProfileButtonElement()}
          editButtonElement={this.editButtonElement()}>
          <ProfileImage
            disabled={!this.state.editMode}
            editMode={this.state.editMode}
            onPress={this.pickImageAndStoreState}
            image={this.state.user.image}
          />
          {!this.state.editMode && (
            <>
              <SocialSection
                followers={this.state.followers}
                following={this.state.following}
              />
              <Stack size={33} />
            </>
          )}
          <CredentialTextInput
            placeholder="Username"
            placeholderTextColor="black"
            value={this.state.user.username}
            onChangeText={username => this.handleUsernameChange(username)}
            editable={this.state.editMode}
          />
          <Stack size={5} />
          {this.state.usernameError && <Text>{this.state.usernameError}</Text>}
          <Stack size={10} />

          <CredentialTextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={this.state.user.email}
            onChangeText={email => this.handleEmailChange(email)}
            editable={this.state.editMode}
          />
          <Stack size={5} />
          {this.state.emailError && <Text>{this.state.emailError}</Text>}
          <Stack size={10} />
        </BackgroundForm>
      </>
    );
  }
}

export default ProfileScreen;
