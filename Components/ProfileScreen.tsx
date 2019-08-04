import React, { Fragment, Component } from 'react';
import { Button, Text } from 'react-native';

export default class ProfileScreen extends Component<any, any> {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return <Text>Profile screen</Text>;
  }
}
