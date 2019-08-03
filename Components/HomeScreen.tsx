import React, { Fragment, Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Text } from 'native-base';

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends React.Component<HomeScreenProps, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Welcome to HQuest</Text>
        <Text style={styles.descriptionText}>
          a minimalistic social network for all shades of non-pc, uncensored
          humor. Professional innovation one dick at a time. 18+. One button
          create/delete account. Please read the FAQ
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
  descriptionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    margin: 20,
  },
});
