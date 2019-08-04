import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class AnsweredQuestion extends Component {
  render() {
    return (
      <View style={styles.questionContainer}>
        <View style={styles.questionRow}>
          <View style={styles.questionsTextWrapper}>
            <Text style={styles.questionText}>
              You go, they go, hey go. What the uk is happening?
            </Text>
          </View>
          <TouchableOpacity>
            <Icon
              type={`AntDesign`}
              name={`caretdown`}
              style={styles.caretDown}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingRight: 5,
  },
  questionRow: { flexDirection: 'row' },
  questionText: {
    color: 'black',
    fontSize: 16,
  },
  questionsTextWrapper: {
    flex: 10,
  },
  caretDown: {
    flex: 1,
  },
});
