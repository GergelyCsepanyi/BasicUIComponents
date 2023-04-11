import SubscriberItem from './SubscriberItem';

export default interface SubscriberCellProps {
  subscriber: SubscriberItem;
  onPressFollowButton: () => void;
}
