import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Comment from './Comment';

export default class Comments extends Component {
  render() {
    return (
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    maxHeight: 300,
    width: '100%',
  },
  contentContainer: {
    paddingVertical: 7,
  },
});
