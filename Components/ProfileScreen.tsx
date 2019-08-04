import React, { Fragment, Component } from 'react';
import { Button, Text, StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextButton from './Reusable/TextButton';

export default class ProfileScreen extends Component<any, any> {
  render() {
    const isPersonal = false;

    return (
      <View style={styles.container}>
        <Image style={styles.profilePic} source={require('./profile.png')} />
        <Text style={styles.userName}>Zen Ventzi</Text>
        <Text style={styles.userIntro}>Hello, put an intro here</Text>
        <View style={styles.followButtonsContainer}>
          <TextButton
            style={styles.followingBtn}
            title={`Following`}
            onPress={() => {}}
          />
          {!isPersonal && (
            <TextButton
              style={styles.followBtn}
              title={`Follow`}
              onPress={() => {}}
            />
          )}
          <TextButton title={`Followers`} onPress={() => {}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  profilePic: {
    marginTop: 30,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
  },
  userIntro: {
    color: 'white',
    fontSize: 17,
  },
  followButtonsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  followingBtn: {
    marginRight: 5,
  },
  followBtn: {
    marginRight: 5,
  },
});
