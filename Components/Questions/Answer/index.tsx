import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import EditionsPicker from '../EditionsPicker';

export default class Answer extends Component {
  render() {
    return (
      <Fragment>
        <EditionsPicker />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
