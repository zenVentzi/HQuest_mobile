import React, { Fragment, Component } from 'react';
import { Text, StyleSheet, View, Image, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextButton from './Reusable/TextButton';

export default class ProfileScreen extends Component<any, any> {
  state = {
    showAnsweredQuestions: true,
  };

  render() {
    const isPersonal = false;
    const b = 5;

    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.profilePic} source={require('./profile.png')} />
        </TouchableOpacity>
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
  showAnsweredText: {
    color: 'white',
    textAlignVertical: 'center',
  },
  answeredSwitchContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  answeredText: {
    color: 'white',
    textAlignVertical: 'center',
  },
});
