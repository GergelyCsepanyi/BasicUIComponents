import {StyleProp, ViewStyle} from 'react-native/types';

interface BackgroundForm {
  searchbar?: React.ReactNode;
  children: React.ReactNode;
  profileImageElement?: React.ReactNode;
  mainTitleElement?: React.ReactNode;
  editButtonElement?: React.ReactNode;
  editMode?: boolean;
  imageBackgroundStyle: StyleProp<ViewStyle>;
  backgroundFormChildrenContainerStyle: StyleProp<ViewStyle>;
  profileHeaderContainerStyle: StyleProp<ViewStyle>;
  searchbarContainerStyle?: StyleProp<ViewStyle>;
}
export default BackgroundForm;
