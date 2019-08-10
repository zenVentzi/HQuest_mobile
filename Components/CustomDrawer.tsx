import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { DrawerItemsProps, NavigationActions } from 'react-navigation';
import TextButton from './Reusable/TextButton';

interface CustomDrawerProps extends React.PropsWithChildren<DrawerItemsProps> {}

export default class CustomDrawer extends Component<CustomDrawerProps, any> {
  navigateToScreen = (route: string) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>HQuest</Text>
        <TextButton
          title={`Home`}
          onPress={this.navigateToScreen('Home')}
          style={styles.homeBtn}
        />
        <TextButton
          title={`Settings`}
          onPress={this.navigateToScreen('Settings')}
          style={styles.settingsBtn}
        />
        <TextButton
          title={`Log out`}
          onPress={() => {}}
          style={styles.logoutBtn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  homeBtn: {
    marginBottom: 5,
  },
  settingsBtn: {
    marginBottom: 5,
  },
  logoutBtn: {
    marginBottom: 10,
  },
});
