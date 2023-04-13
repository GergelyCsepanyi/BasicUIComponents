interface ProfileImageProps {
  editMode?: boolean;
  onPress?: () => void;
  disabled: boolean;
  image: {uri: string} | string;
}

export default ProfileImageProps;
