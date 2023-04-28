import React, {useEffect, useState} from 'react';
import {SectionList, Text} from 'react-native';
import BackgroundForm from '../../components/BackgroundForm';
import AddPeopleScreenStyles from './styles';
import SubscriberCell from '../../components/SubscriberCell';
import {SearchBar} from '@rneui/base';
import Images from '../../assets/images/Images';

const dataFromAPI = [
  {
    title: 'A',
    data: [
      {
        id: 1,
        image: Images.profileImage,
        name: 'A user',
        description: 'Description...',
        isFollowing: true,
      },
      {
        id: 4,
        image: {
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
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
        image: Images.profileImage3,
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
        image: Images.profileImage4,
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
  {
    title: 'D',
    data: [
      {
        id: 71,
        image: Images.profileImage4,
        name: 'D user',
        description: 'Description...',
        isFollowing: true,
      },
      {
        id: 61,
        image: {
          uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        name: 'D user 2',
        description: 'Description...',
        isFollowing: true,
      },
    ],
  },
];

const DELAY_FOR_SEARCHING = 2000;

const AddPeopleScreen = () => {
  const [data, setData] = useState(dataFromAPI);
  const [search, setSearch] = useState(data);

  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    setSearch(data);
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(() => {
        const filteredData = data.map(section => {
          const filteredSectionData = section.data.filter(item =>
            item.name.includes(searchInputValue),
          );
          return {...section, data: filteredSectionData};
        });
        return filteredData.filter(section => section.data.length > 0);
      });
    }, DELAY_FOR_SEARCHING);

    return () => clearTimeout(timer);
  }, [searchInputValue, data]);

  const onSubscriberSwipedLeft = (id: number) => {
    setData(currentData => {
      const filteredData = currentData.map(section => {
        const filteredSectionData = section.data.filter(item => item.id !== id);
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
          onChangeText={setSearchInputValue}
          value={searchInputValue}
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
        keyExtractor={(item, index) => `${item.id + index}`}
        renderItem={({item}) => (
          <SubscriberCell
            paddingStart={25}
            renderComponentType="checkbox"
            subscriber={item}
            onSubscriberSwipedLeft={onSubscriberSwipedLeft}
          />
        )}
        renderSectionHeader={({section}) => (
          <Text style={AddPeopleScreenStyles.sectionHeaderStyle}>
            {section.title}
          </Text>
        )}
        style={AddPeopleScreenStyles.sectionListStyle}
      />
    </BackgroundForm>
  );
};

export default AddPeopleScreen;
