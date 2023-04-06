interface ProfileScreenState {
  username: string;
  email: string;
  image: {uri: string};
  editMode: boolean;
  followers: number;
  following: number;
}

export default ProfileScreenState;
