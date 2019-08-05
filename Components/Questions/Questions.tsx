import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';
import AnsweredQuestions from './AnsweredQuestions';
import UnansweredQuestions from './UnansweredQuestions';

export default class Questions extends Component {
  state = {
    showAnsweredQuestions: true,
  };

  render() {
    return (
      <Fragment>
        {/* isPersonal */ true && (
          <View style={styles.answeredSwitchContainer}>
            <Text style={styles.answeredText}>Show answered questions: </Text>
            <Switch
              value={this.state.showAnsweredQuestions}
              onValueChange={val => {
                // Alert.alert(`${val}`);
                this.setState({ showAnsweredQuestions: val });
              }}
              thumbColor="gray"
              trackColor={{ true: 'white', false: 'white' }}
            />
          </View>
        )}
        {this.state.showAnsweredQuestions ? (
          <AnsweredQuestions />
        ) : (
          <UnansweredQuestions />
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  answeredSwitchContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  answeredText: {
    color: 'white',
    textAlignVertical: 'center',
  },
});
