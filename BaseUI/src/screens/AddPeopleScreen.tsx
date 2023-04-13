import React, {useEffect, useState} from 'react';
import {SectionList, Text} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import AddPeopleScreenStyles from '../styles/AddPeopleScreenStyles';
import SubscriberCell from '../components/SubscriberCell';
import {SearchBar} from '@rneui/base';

const dataFromAPI = [
  {
    title: 'A',
    data: [
      {
        id: 1,
        image: {
          uri: 'file:///Users/gergely-csepanyi/Documents/Projects/04_BasicUIComponents/BaseUI/src/images/profileImagePlaceholder.jpg',
        },
        name: 'A user',
        description: 'Description...',
        isFollowing: true,
      },
      {
        id: 4,
        image: {
          uri: 'file:///Users/gergely-csepanyi/Documents/Projects/04_BasicUIComponents/BaseUI/src/images/profileImagePlaceholder.jpg',
        },
        name: 'A user s',
        description: 'Description...',
        isFollowing: true,
      },
    ],
  },
  {
    title: 'B',
    data: [
      {
        id: 2,
        image: {
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        name: 'B user',
        description: 'Description...',
        isFollowing: true,
      },
      {
        id: 3,
        image: {
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        name: 'B user 2',
        description: 'Description...',
        isFollowing: true,
      },
    ],
  },
  {
    title: 'C',
    data: [
      {
        id: 91,
        image: {
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        name: 'C user',
        description: 'Description...',
        isFollowing: true,
      },
      {
        id: 81,
        image: {
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        name: 'C user 2',
        description: 'Description...',
        isFollowing: true,
      },
    ],
  },
];

const AddPeopleScreen = () => {
  const [data, setData] = useState(dataFromAPI);
  const [search, setSearch] = useState(data);

  useEffect(() => {
    setSearch(data);
  }, [data]);

  const updateView = (text: string) => {
    setSearch(() => {
      const filteredData = data.map(section => {
        const filteredSectionData = section.data.filter(item =>
          item.name.includes(text),
        );
        return {...section, data: filteredSectionData};
      });
      return filteredData.filter(section => section.data.length > 0);
    });
  };

  return (
    <BackgroundForm
      searchbar={
        <SearchBar
          placeholder="Search..."
          onChangeText={text => updateView(text)}
          value={search}
          //style={AddPeopleScreenStyles.searchbarStyle}
          containerStyle={AddPeopleScreenStyles.searchbarContainerStyle}
          inputContainerStyle={
            AddPeopleScreenStyles.searchbarInputContainerStyle
          }
          inputStyle={AddPeopleScreenStyles.searchbarInputStyle}
        />
      }
      searchbarContainerStyle={
        AddPeopleScreenStyles.searchbarOuterContainerStyle
      }
      imageBackgroundStyle={AddPeopleScreenStyles.backgroundImageViewStyle}
      backgroundFormChildrenContainerStyle={
        AddPeopleScreenStyles.backgroundFormChildrenContainerStyle
      }
      profileHeaderContainerStyle={
        AddPeopleScreenStyles.profileHeaderContainerStyle
      }
      mainTitleElement={
        <Text style={AddPeopleScreenStyles.profileHeaderTextStyle}>
          Add people
        </Text>
      }>
      <SectionList
        sections={search}
        keyExtractor={(item, index) => (item.id + index) as unknown as string}
        renderItem={({item}) => (
          <SubscriberCell
            styles={AddPeopleScreenStyles.subscriberCellStyles}
            renderButtonOrCheckbox="checkbox"
            subscriber={item}
            onPressFollowButton={() => {}}
            setSubscribers={setData}
          />
        )}
        renderSectionHeader={({section}) => (
          <Text style={AddPeopleScreenStyles.sectionHeaderStyle}>
            {section.title}
          </Text>
        )}
      />
    </BackgroundForm>
  );
};

export default AddPeopleScreen;
