import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class UserBtn extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.leftBlock}>
            <Image
              style={styles.profilePic}
              source={require(`../../../profile.png`)}
            />
          </View>
          <View style={styles.rightBlock}>
            <Text style={styles.username}>Zen Ventzi</Text>
            <Text style={styles.userIntro}>Hey I am an intro</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    elevation: 3,
  },
  leftBlock: { marginLeft: 5, justifyContent: 'center' },
  rightBlock: { marginLeft: 10, flexShrink: 1 },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  username: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  userIntro: { flexGrow: 1 },
});
