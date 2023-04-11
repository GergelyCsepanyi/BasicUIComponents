import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ScreenTest from './src/screens/ScreenTest';
import SubscribersScreen from './src/components/SubscribersScreen';

class App extends React.Component {
  render(): React.ReactNode {
    // return <LoginScreen />;
    // return <ProfileScreen />;
    return <SubscribersScreen />;
    // return <ScreenTest />;
  }
}

export default App;
