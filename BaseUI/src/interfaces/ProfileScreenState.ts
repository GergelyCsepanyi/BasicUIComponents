interface ProfileScreenState {
  username: string | null;
  email: string;
  usernameError: string;
  emailError: string;
  image: {uri: string};
  editMode: boolean;
  followers: number;
  following: number;
}

export default ProfileScreenState;
