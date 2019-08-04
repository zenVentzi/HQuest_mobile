import React, { Fragment, Component } from 'react';
import { Button, Text, StyleSheet, View, Image } from 'react-native';

export default class ProfileScreen extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.profilePic} source={require('./profile.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  profilePic: {
    marginTop: 30,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
