import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, Text} from 'react-native';
import styles from './styles';
import BackgroundForm from '../../components/BackgroundForm';
import SubscriberCell from '../../components/SubscriberCell';
import Images from '../../assets/images/Images';
import SubscriberItem from '../../interfaces/SubscriberItem';

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
      imageBackgroundStyle={styles.backgroundImageViewStyle}
      backgroundFormChildrenContainerStyle={
        styles.backgroundFormChildrenContainerStyle
      }
      profileHeaderContainerStyle={styles.profileHeaderContainerStyle}
      mainTitleElement={
        <Text style={styles.profileHeaderTextStyle}>Subscribers</Text>
      }>
      <FlatList
        data={subscribers}
        renderItem={renderItem}
        style={styles.flatListStyle}
      />
    </BackgroundForm>
  );
};

export default SubscribersScreen;
