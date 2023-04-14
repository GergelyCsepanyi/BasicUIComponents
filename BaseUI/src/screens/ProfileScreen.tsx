import React from 'react';
import {Text} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import ProfileImage from '../components/ProfileImage';
import ProfileScreenState from '../interfaces/ProfileScreenState';
import ProfileScreenStyles from '../styles/ProfileScreenStyles';
import * as ImagePicker from 'react-native-image-picker';
import SocialSection from '../components/SocialSection';
import TextButtonStyles from '../styles/TextButtonStyles';
import {Stack} from 'react-native-spacing-system';
import TextButton from '../components/TextButton';
import Images from '../theme/images/Images';
import StorageService from '../services/StorageService';
import Colors from '../theme/Colors';

class ProfileScreen extends React.Component<{}, ProfileScreenState> {
  //InitialProfilePicture = Images.profileImage;

  state = {
    username: '',
    email: '',
    usernameError: '',
    emailError: '',
    // image: {
    //   uri: this.InitialProfilePicture,
    //   //uri: require(this.InitialProfilePicture),
    // },
    image: Images.profileImage,

    editMode: false,
    followers: 23,
    following: 234,
  };
  componentDidMount() {
    let username = '';
    StorageService.getData('username').then(result => {
      username = result || 'InitialUsername';
      this.setState({username});
    });

    let email = '';
    StorageService.getData('email').then(result => {
      email = result || 'InitialEmail@test.test';
      this.setState({email});
    });

    let image = {
      //uri: Images.profileImage,
    };
    StorageService.getDataObj('image').then(result => {
      image = result || Images.profileImage;
      console.log('image here:', image);
      console.log('profileimage here:', Images.profileImage);
      console.log('result here:', result);

      this.setState({image});
    });

    //StorageService.clearStorage();
  }

  toggleEditMode = (editMode: boolean) => {
    console.log('toggle');
    this.setState({editMode: !editMode});
  };

  handleUpdate = () => {
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

    StorageService.storeData('username', this.state.username);
    StorageService.storeData('email', this.state.email);

    this.toggleEditMode(this.state.editMode);
  };

  pickImageAndStoreBase64Props = async (): Promise<void> => {
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
      StorageService.storeDataObj('image', result.assets[0]);
      console.log('result.assets[0]', result.assets[0]);
    } catch (error) {
      console.log('ERROR during image selection:', error);
    }
  };

  editButtonElement = () => {
    return (
      <TextButton
        touchableOpacityStyle={[
          TextButtonStyles.touchableOpacityStyle,
          {alignItems: 'center', paddingEnd: 5},
        ]}
        textStyle={[
          TextButtonStyles.textStyle,
          {color: Colors.white, textAlign: 'center'},
        ]}
        text={'Edit'}
        onPress={() => this.toggleEditMode(this.state.editMode)}
      />
    );
  };

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
          editButtonElement={this.editButtonElement()}>
          {/* <View
            style={{
              flex: 1,
            }}> */}
          <ProfileImage
            disabled={!this.state.editMode}
            editMode={this.state.editMode}
            onPress={this.pickImageAndStoreBase64Props}
            image={this.state.image}
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
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            editable={this.state.editMode}
          />
          <Stack size={5} />
          {this.state.usernameError && <Text>{this.state.usernameError}</Text>}
          <Stack size={10} />

          <CredentialTextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            editable={this.state.editMode}
          />
          <Stack size={5} />
          {this.state.emailError && <Text>{this.state.emailError}</Text>}
          <Stack size={10} />
          {/* </View> */}

          {/* button inside a container flex 1 justifyContent flex end */}
          {/* <View
            //behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{
              // flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              borderWidth: 2,
              borderColor: 'red',
              //height: '65%',
              width: '100%',
              alignItems: 'flex-end',
              alignContent: 'flex-end',
              alignSelf: 'flex-end',
            }}> */}
          <FilledButton
            touchableOpacityStyle={ProfileScreenStyles.touchableOpacityStyle}
            textStyle={[ProfileScreenStyles.textStyle, {color: Colors.white}]}
            title={this.state.editMode ? 'Update profile' : 'Show state'}
            onPress={() =>
              this.state.editMode
                ? this.handleUpdate()
                : console.log(this.state)
            }
          />
          {/* </View> */}
        </BackgroundForm>
      </>
    );
  }
}

export default ProfileScreen;
