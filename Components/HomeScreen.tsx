import React, { Fragment, Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Text } from 'native-base';

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends React.Component<HomeScreenProps, any> {
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
          Home
        </Text>
      </View>
    );
  }
}
