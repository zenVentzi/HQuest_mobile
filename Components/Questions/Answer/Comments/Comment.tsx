import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import UserBtn from './UserBtn';
import TextButton from '../../../Reusable/TextButton';
import { Icon } from 'native-base';

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
        <View style={styles.row}>
          <TouchableOpacity>
            <Icon type="AntDesign" name="like1" />
          </TouchableOpacity>
          <TextButton
            title={`0 likes`}
            onPress={() => {}}
            style={styles.likesTextBtn}
          />
        </View>
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
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  likesTextBtn: { height: 23, marginTop: 4, marginLeft: 5 },
});
