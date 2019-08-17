import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Notification from '../Notification';

export default class NotificationsScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Notification />
        <Notification />
        <Notification />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1, paddingTop: 10 },
});
