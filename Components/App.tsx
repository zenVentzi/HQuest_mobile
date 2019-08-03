import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  StackNavigatorConfig,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

const StackNavConfig: StackNavigatorConfig = {
  defaultNavigationOptions: {
    header: ({ navigation }) => (
      <View
        style={{ backgroundColor: 'black', height: 50, flexDirection: 'row' }}>
        <Button
          transparent
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="menu" style={{ color: 'white', fontSize: 40 }} />
        </Button>
      </View>
    ),
  },
};

export const HomeStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  StackNavConfig
);

export const SettingsStackNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  StackNavConfig
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStackNavigator,
    Settings: SettingsStackNavigator,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'black',
    overlayColor: 'white',
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      activeBackgroundColor: 'white',
    },
  }
);

const AppContaner = createAppContainer(DrawerNavigator);

export default class App extends Component {
  render() {
    return <AppContaner />;
  }
}
