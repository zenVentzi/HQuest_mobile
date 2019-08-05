import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import EditionsPicker from './EditionsPicker';
import Editions from './Editions';

export default class Answer extends Component {
  render() {
    return (
      <Fragment>
        <EditionsPicker />
        <Editions />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
