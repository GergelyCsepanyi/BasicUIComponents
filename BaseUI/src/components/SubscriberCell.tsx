import React, {useEffect} from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import SubscriberCellProps from '../interfaces/SubscriberCellProps';
import SubscriberCellStyle from '../styles/SubscriberCellStyle';
import FilledButton from './FilledButton';

const SubscriberCell = (props: SubscriberCellProps) => {
  //   useEffect(() => {
  //     if (props.subscriber.isFollowing) {
  //       SubscriberCellStyle.touchableOpacityStyle.backgroundColor = 'red';
  //       SubscriberCellStyle.buttonTextStyle.color = 'yellow';
  //     } else {
  //       SubscriberCellStyle.touchableOpacityStyle.backgroundColor =
  //         'rgb(64, 80, 164)';
  //       SubscriberCellStyle.buttonTextStyle.color = 'white';
  //     }
  //   }, [props.subscriber.isFollowing]);

  return (
    <View style={SubscriberCellStyle.subscriberCellContainerStyle}>
      <View style={SubscriberCellStyle.imageStyle}>
        <Image
          source={{
            uri: 'file:///Users/gergely-csepanyi/Documents/Projects/04_BasicUIComponents/BaseUI/src/images/profileImagePlaceholder.jpg',
          }}
        />
      </View>
      <View style={SubscriberCellStyle.subscriberTextsContainer}>
        <Text style={SubscriberCellStyle.titleTextStyle}>
          {props.subscriber.title}
        </Text>
        <Text style={SubscriberCellStyle.descriptionTextStyle}>
          {props.subscriber.description}
        </Text>
      </View>
      <FilledButton
        touchableOpacityStyle={SubscriberCellStyle.touchableOpacityStyle}
        onPress={props.onPressFollowButton}
        textStyle={SubscriberCellStyle.buttonTextStyle}
        buttonColor={props.subscriber.isFollowing ? 'red' : 'yellow'}
        textColor={props.subscriber.isFollowing ? 'black' : 'green'}
        title={props.subscriber.isFollowing ? 'Following' : 'Follow'}
      />
    </View>
  );
};

export default SubscriberCell;
