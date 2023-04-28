import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import FilledButton from '../FilledButton';
import {CheckBox} from '@rneui/base';
import {useSwipe} from '../../hooks/useSwipe';
import Colors from '../../theme/Colors';
import styles from './styles';
import SubscriberItem from '../../interfaces/SubscriberItem';

interface SubscriberCellProps {
  subscriber: SubscriberItem;
  renderComponentType: 'button' | 'checkbox';

  paddingStart?: number;
  onSubscriberSwipedLeft?: (id: number) => void;

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
  onPressFollowButton?: () => void;
}

const SubscriberCell = (props: SubscriberCellProps) => {
  const [cbState, setCbState] = useState(false);

  function onSwipeLeft() {
    if (!props.onSubscriberSwipedLeft) {
      return;
    }
    props.onSubscriberSwipedLeft(props.subscriber.id);
  }

  function onSwipeRight() {}

  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight);

  return (
    <View
      style={[
        styles.subscriberCellContainerStyle,
        props.paddingStart ? {paddingStart: props.paddingStart} : {},
      ]}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <View style={styles.imageStyle}>
        <Image
          style={styles.imageStyle}
          source={props.subscriber.image ?? {}}
        />
      </View>
      <View style={styles.subscriberTextsContainer}>
        <Text style={styles.titleTextStyle}>{props.subscriber.name}</Text>
        <Text style={styles.descriptionTextStyle}>
          {props.subscriber.description}
        </Text>
      </View>

      {props.renderComponentType === 'button' && (
        <View style={styles.filledButtonContainer}>
          <FilledButton
            backgroundColor={
              props.subscriber.isFollowing
                ? Colors.darkBlue
                : Colors.lightBluePurple
            }
            textColor={
              props.subscriber.isFollowing ? Colors.white : Colors.darkBlue
            }
            onPress={props.onPressFollowButton ?? (() => {})}
            title={props.subscriber.isFollowing ? 'Following' : 'Follow'}
          />
        </View>
      )}

      {props.renderComponentType === 'checkbox' && (
        <View style={styles.checkboxContainerStyle}>
          <CheckBox
            checked={cbState}
            onTouchEnd={() => setCbState(cbValue => !cbValue)}
            containerStyle={styles.checkboxContainerStyle}
          />
        </View>
      )}
    </View>
  );
};

export default SubscriberCell;
