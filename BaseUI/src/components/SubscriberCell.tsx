import React from 'react';
import {View, Image, Text} from 'react-native';
import SubscriberCellProps from '../interfaces/SubscriberCellProps';
//import SubscriberCellStyle from '../styles/SubscriberCellStyle';
import FilledButton from './FilledButton';
// import {CheckBox} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {CheckBox} from '@rneui/base';
import CheckBox from '@react-native-community/checkbox';
import {useSwipe} from '../hooks/useSwipe';
import SubscriberItem from '../interfaces/SubscriberItem';

// Icon.loadFont();

const SubscriberCell = (props: SubscriberCellProps) => {
  //console.log(props.subscriber);
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

  function onSwipeRight() {
    //console.log('SWIPE_RIGHT');
  }

  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight);

  return (
    <View
      style={props.styles.subscriberCellContainerStyle}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <View style={props.styles.imageStyle}>
        <Image
          source={{
            uri: 'file:///Users/gergely-csepanyi/Documents/Projects/04_BasicUIComponents/BaseUI/src/images/profileImagePlaceholder.jpg',
          }}
        />
      </View>
      <View style={props.styles.subscriberTextsContainer}>
        <Text style={props.styles.titleTextStyle}>{props.subscriber.name}</Text>
        <Text style={props.styles.descriptionTextStyle}>
          {props.subscriber.description}
        </Text>
      </View>

      {props.renderButtonOrCheckbox === 'button' && (
        <FilledButton
          touchableOpacityStyle={[
            props.styles.touchableOpacityStyle,
            {
              backgroundColor: props.subscriber.isFollowing
                ? 'rgb(64, 80, 164)'
                : 'rgba(190, 198, 255, 0.3)',
            },
          ]}
          onPress={props.onPressFollowButton}
          textStyle={[
            props.styles.buttonTextStyle,
            {
              color: props.subscriber.isFollowing
                ? 'white'
                : 'rgb(77, 91, 177)',
            },
          ]}
          title={props.subscriber.isFollowing ? 'Following' : 'Follow'}
        />
      )}

      {props.renderButtonOrCheckbox === 'checkbox' && (
        <View style={props.styles.checkboxContainerStyle}>
          <CheckBox
            style={props.styles.checkboxStyle}
            disabled={false}
            //checked={true}
            //onPress={() => {}}
            onValueChange={() => {}}
          />
        </View>
      )}
    </View>
  );
};

export default SubscriberCell;
