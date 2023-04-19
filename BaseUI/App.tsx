import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SubscribersScreen from './src/screens/SubscribersScreen';
import AddPeopleScreen from './src/screens/AddPeopleScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TestScreen from './src/screens/TestScreen';

class App extends React.Component {
  render(): React.ReactNode {
    // return <TestScreen />;
    return <LoginScreen />;
    // return <ProfileScreen />;
    // return <SubscribersScreen />;
    // return <AddPeopleScreen />;
  }
}

export default App;
