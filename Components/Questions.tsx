import React, { Component } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';

export default class Questions extends Component {
  state = {
    showAnsweredQuestions: true,
  };

  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  answeredSwitchContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  answeredText: {
    color: 'white',
    textAlignVertical: 'center',
  },
});
