interface ProfileImageProps {
  editMode?: boolean;
  onPress?: () => void;
  disabled: boolean;
  image: {uri: string};
}

export default ProfileImageProps;
