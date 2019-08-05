import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import UserBtn from './UserBtn';

export default class Comment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserBtn />
        <Text>
          - some comment heresome comment heresome comment heresome comment
          heresome comment heresome comment heresome comment heresome comment
          heresome comment heresome comment heresome comment heresome comment
          heresome comment heresome comment heresome comment here
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 3,
    marginVertical: 5,
    paddingLeft: 8,
  },
});
