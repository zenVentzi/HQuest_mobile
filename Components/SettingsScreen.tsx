import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import {
  NavigationScreenOptionsGetter,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

interface SettingsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class SettingsScreen extends React.Component<
  SettingsScreenProps,
  any
> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{ color: 'white' }}>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: 'white', marginTop: 20 }}>
          Settings
        </Text>
      </View>
    );
  }
}
