import React, {useState} from 'react';
import {SafeAreaView, SectionList, Text} from 'react-native';
import BackgroundForm from '../components/BackgroundForm';
import AddPeopleScreenStyles from '../styles/AddPeopleScreenStyles';
import SubscriberCell from '../components/SubscriberCell';
import {SearchBar} from '@rneui/base';
import SubscriberItem from '../interfaces/SubscriberItem';

const data = [
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
];

const AddPeopleScreen = () => {
  const [search, setSearch] = useState(data);

  //   const updateView = (text: string) => {
  //     console.log(
  //       data.flatMap(group =>
  //         group.data.filter(item => item.name.includes(text)),
  //       ),
  //     );
  //     setSearch(() => {
  //       return data.flatMap(group =>
  //         group.data.filter(item => item.name.includes(text)),
  //       );
  //     });
  //   };

  /**
   * [ { title, data: [] }, { title, data: [] } ]
   *
   *
   *
   */

  const updateView = (text: string) => {
    setSearch(() => {
      let outerArray: typeof data = [];
      let innerArray: SubscriberItem[] = [];
      //let result = [];
      //console.log('text:', text);
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].data.length; j++) {
          if (data[i].data[j].name.includes(text)) {
            if (!outerArray.includes(data[i])) {
              outerArray.push(data[i]);
            }

            innerArray.push(data[i].data[j]);
          }
          console.log('outer:', outerArray);
          console.log('inner:', innerArray);
        }
        if (outerArray.length > 0 && outerArray.length < i) {
          outerArray[i].data = innerArray;
          //result.push();
        }
      }
      console.log('finish');
      //data.forEach(item => {});
      //   for (let i = 0; i < outerArray.length; i++) {
      //     outerArray[i].data = innerArray[i];
      //   }
      return outerArray;
      //return data.filter(item => item.data[0].name.startsWith(text));
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
