import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import React, {Component} from 'react';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "black",
    overlayColor: "white",
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: "white",
      activeBackgroundColor: 'white',
    },
  }
);

const AppContaner = createAppContainer(DrawerNavigator);

export default class App extends Component {
  render() {
    return <AppContaner/>;
  }
}