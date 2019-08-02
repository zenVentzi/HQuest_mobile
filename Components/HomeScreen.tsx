import React, {Fragment, Component} from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends Component<any,any> {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }