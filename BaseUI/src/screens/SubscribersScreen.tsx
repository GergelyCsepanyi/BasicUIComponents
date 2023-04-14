import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, Text} from 'react-native';
import SubscriberItem from '../interfaces/SubscriberItem';
import SubscriberScreenStyles from '../styles/SubscriberScreenStyles';
import BackgroundForm from '../components/BackgroundForm';
import SubscriberCell from '../components/SubscriberCell';
import SubscriberCellStyle from '../styles/SubscriberCellStyle';
import Images from '../theme/images/Images';

const SubscribersScreen = () => {
  const [subscribers, setSubscribers] = useState<SubscriberItem[]>([
    {
      id: 1,
      image: Images.profileImage2,
      name: 'First user',
      description: 'Description...',
      isFollowing: true,
    },
    {
      id: 2,
      image: Images.profileImage3,
      name: 'Second user',
      description: 'Description...',
      isFollowing: true,
    },
  ]);

  const updateFollow = (subscriber: SubscriberItem) => {
    const updatedSubs = subscribers.map(actualSub => {
      if (actualSub.id === subscriber.id) {
        return {...actualSub, isFollowing: !subscriber.isFollowing};
      }
      return actualSub;
    });

    setSubscribers(updatedSubs);
  };

  const renderItem = (itemProps: ListRenderItemInfo<SubscriberItem>) => {
    return (
      <SubscriberCell
        styles={SubscriberCellStyle}
        renderComponentType="button"
        subscriber={itemProps.item}
        onPressFollowButton={() => {
          updateFollow(itemProps.item);
        }}
      />
    );
  };

  return (
    <BackgroundForm
      imageBackgroundStyle={SubscriberScreenStyles.backgroundImageViewStyle}
      backgroundFormChildrenContainerStyle={
        SubscriberScreenStyles.backgroundFormChildrenContainerStyle
      }
      profileHeaderContainerStyle={
        SubscriberScreenStyles.profileHeaderContainerStyle
      }
      mainTitleElement={
        <Text style={SubscriberScreenStyles.profileHeaderTextStyle}>
          Subscribers
        </Text>
      }>
      <FlatList
        data={subscribers}
        renderItem={renderItem}
        style={SubscriberScreenStyles.flatListStyle}
      />
    </BackgroundForm>
  );
};

export default SubscribersScreen;
