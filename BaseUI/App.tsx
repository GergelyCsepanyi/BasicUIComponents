import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ScreenTest from './src/screens/ScreenTest';
import SubscribersScreen from './src/screens/SubscribersScreen';
import AddPeopleScreen from './src/screens/AddPeopleScreen';

class App extends React.Component {
  render(): React.ReactNode {
    // return <LoginScreen />;
    // return <ProfileScreen />;
    // return <SubscribersScreen />;
    return <AddPeopleScreen />;
    // return <ScreenTest />;
  }
}

export default App;
