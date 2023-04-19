import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import SubscriberCellProps from '../../interfaces/SubscriberCellProps';
import FilledButton from '../FilledButton';
import {CheckBox} from '@rneui/base';
import {useSwipe} from '../../hooks/useSwipe';
import Colors from '../../theme/Colors';
import SubscriberCellStyle from './styles';

const SubscriberCell = (props: SubscriberCellProps) => {
  const [cbState, setCbState] = useState(false);

  function onSwipeLeft() {
    if (!props.setSubscribers) {
      return;
    }

    props.setSubscribers(data => {
      const filteredData = data.map(section => {
        const filteredSectionData = section.data.filter(
          item => item.id !== props.subscriber.id,
        );
        return {...section, data: filteredSectionData};
      });
      return filteredData.filter(section => section.data.length > 0);
    });
  }

  function onSwipeRight() {}

  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight);

  return (
    <View
      style={props.styles.subscriberCellContainerStyle}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <View style={props.styles.imageStyle}>
        <Image
          style={props.styles.imageStyle}
          source={props.subscriber.image}
        />
      </View>
      <View style={props.styles.subscriberTextsContainer}>
        <Text style={props.styles.titleTextStyle}>{props.subscriber.name}</Text>
        <Text style={props.styles.descriptionTextStyle}>
          {props.subscriber.description}
        </Text>
      </View>

      {props.renderComponentType === 'button' && (
        <FilledButton
          touchableOpacityStyle={[
            props.styles.touchableOpacityStyle,
            {
              backgroundColor: props.subscriber.isFollowing
                ? Colors.darkBlue
                : Colors.lightBluePurple,
            },
          ]}
          onPress={props.onPressFollowButton}
          textStyle={[
            props.styles.buttonTextStyle,
            {
              color: props.subscriber.isFollowing
                ? Colors.white
                : Colors.darkBlue,
            },
          ]}
          title={props.subscriber.isFollowing ? 'Following' : 'Follow'}
        />
      )}

      {props.renderComponentType === 'checkbox' && (
        <View style={props.styles.checkboxContainerStyle}>
          <CheckBox
            checked={cbState}
            onTouchEnd={() => setCbState(cbValue => !cbValue)}
            containerStyle={SubscriberCellStyle.checkboxContainerStyle}
          />
        </View>
      )}
    </View>
  );
};

export default SubscriberCell;
