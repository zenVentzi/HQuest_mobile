import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AnsweredQuestion from './AnsweredQuestion';

export default class AnsweredQuestions extends Component {
  render() {
    return (
      <Fragment>
        <AnsweredQuestion />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
