import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextButton from '../../Reusable/TextButton';
import Comments from './Comments';

export default class Edition extends Component {
  render() {
    return (
      <Fragment>
        <Text>
          - Well, things are the way they are. It is what it is. Fill this damn
          space
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
          <TextButton
            title={`0 comments`}
            onPress={() => {}}
            style={styles.commentsTextBtn}
          />
        </View>
        <Comments />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  likesTextBtn: { height: 23, marginTop: 4, marginLeft: 5 },
  commentsTextBtn: { height: 23, marginTop: 4, marginLeft: 5 },
});
