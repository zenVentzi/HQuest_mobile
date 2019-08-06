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
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'native-base';

const StackNavConfig: StackNavigatorConfig = {
  defaultNavigationOptions: {
    header: ({ navigation }) => (
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.drawerBtn}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon name="menu" style={{ color: 'white', fontSize: 45 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.newsfeedBtn}
            onPress={() => {
              // navigation.openDrawer();
            }}>
            <Icon
              type="FontAwesome"
              name="newspaper-o"
              style={{ color: 'white', fontSize: 35 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.newsfeedBtn}
            onPress={() => {
              // navigation.openDrawer();
            }}>
            <Icon
              type="FontAwesome"
              name="user-circle"
              style={{ color: 'white', fontSize: 35 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.newsfeedBtn}
            onPress={() => {
              // navigation.openDrawer();
            }}>
            <Icon
              type="FontAwesome"
              name="bell-o"
              style={{ color: 'white', fontSize: 35 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    ),
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 50,
    maxHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerLeft: {},
  headerRight: { flexDirection: 'row' },
  drawerBtn: { marginTop: -8, marginLeft: 5 },
  newsfeedBtn: { marginRight: 13 },
});

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

export const ProfileStackNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  StackNavConfig
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStackNavigator,
    Settings: SettingsStackNavigator,
    Profile: ProfileStackNavigator,
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

const AppContainer = createAppContainer(DrawerNavigator);

// export default App;
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
