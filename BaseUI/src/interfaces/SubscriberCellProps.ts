import SubscriberItem from './SubscriberItem';

export default interface SubscriberCellProps {
  styles: object;
  subscriber: SubscriberItem;
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
  onPressFollowButton: () => void;
  renderButtonOrCheckbox: 'button' | 'checkbox';
}

// subscriberCellContainerStyle: {
//   height: 67,
//   //paddingHorizontal: 20,
//   flexDirection: 'row',
//   borderWidth: 1,
//   borderColor: 'blue',
//   alignItems: 'center',
// },
// touchableOpacityStyle: {
//   flex: 2,
//   //width: '30%',
//   height: 29,
//   width: 92,
//   fontSize: 12,
//   borderRadius: 25,
//   backgroundColor: 'rgb(64, 80, 164)',
//   justifyContent: 'center',
//   alignItems: 'center',

//   // marginStart: 62,
// },
// buttonTextStyle: {fontSize: 15},

// imageStyle: {
//   //flex: 2,
//   width: 47,
//   height: 47,
//   borderRadius: 8,
//   borderWidth: 1,
//   marginEnd: 15,
// },

// subscriberTextsContainer: {
//   justifyContent: 'flex-start',
//   flex: 4,
// },

// titleTextStyle: {
//   color: 'rgb(77,81,128)',
//   fontSize: 17,
//   fontWeight: 'bold',
// },
// descriptionTextStyle: {color: 'rgb(181, 182, 221)', fontSize: 12},
