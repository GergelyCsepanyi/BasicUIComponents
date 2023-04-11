import {ImageSourcePropType} from 'react-native/types';

export default interface SubscriberItem {
  id: number;
  image?: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing: boolean;
}
