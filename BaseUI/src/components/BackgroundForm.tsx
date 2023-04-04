import React from 'react';
import {ImageBackground} from 'react-native';

class BackgroundForm extends React.Component {
  image = {
    uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };

  render(): React.ReactNode {
    return <ImageBackground source={this.image} />;
  }
}

export default BackgroundForm;
