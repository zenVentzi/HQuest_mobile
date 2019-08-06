import React, { Fragment, Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  InteractionManager,
  ActivityIndicator,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextButton from './Reusable/TextButton';
import Questions from './Questions/Questions';

export default class ProfileScreen extends Component<any, any> {
  state = {
    isReady: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isReady: true,
      });
    }, 1000);

    // 1: Component is mounted off-screen
    // InteractionManager.runAfterInteractions(() => {
    //   // 2: Component is done animating
    //   // 3: Start fetching the team / or render the view
    //   // this.props.dispatchTeamFetchStart();
    //   this.setState({
    //     isReady: true,
    //   });
    // });
  }

  render() {
    const isPersonal = false;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {!this.state.isReady ? (
          <ActivityIndicator size={50} color="white" />
        ) : (
          <>
            <TouchableOpacity>
              <Image
                style={styles.profilePic}
                source={require('./profile.png')}
              />
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
            <Questions />
          </>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
