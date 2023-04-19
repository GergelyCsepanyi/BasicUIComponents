import {StyleProp, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import SubscriberItem from './SubscriberItem';

interface subscriberCellStylesProps {
  subscriberCellContainerStyle: StyleProp<ViewStyle>;
  touchableOpacityStyle: StyleProp<ViewStyle>;
  checkboxContainerStyle: StyleProp<ViewStyle>;
  checkboxStyle: StyleProp<TextStyle>;
  buttonTextStyle: StyleProp<ViewStyle>;
  imageStyle: StyleProp<ImageStyle>;
  subscriberTextsContainer: StyleProp<TextStyle>;
  titleTextStyle: StyleProp<TextStyle>;
  descriptionTextStyle: StyleProp<TextStyle>;
}

export default interface SubscriberCellProps {
  styles: subscriberCellStylesProps;
  subscriber: SubscriberItem;
  setSubscribers?: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        data: {
          id: number;
          image: {
            uri: string;
          };
          name: string;
          description: string;
          isFollowing: boolean;
        }[];
      }[]
    >
  >;
  onPressFollowButton: () => void;
  renderComponentType: 'button' | 'checkbox';
}
