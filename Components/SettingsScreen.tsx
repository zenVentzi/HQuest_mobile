import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  NavigationScreenOptionsGetter,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import TextButton from './Reusable/TextButton';

interface SettingsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class SettingsScreen extends React.Component<
  SettingsScreenProps,
  any
> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Username..."
          placeholderTextColor={`gray`}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Profile intro..."
          placeholderTextColor={`gray`}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Facebook link..."
          placeholderTextColor={`gray`}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Twitter link..."
          placeholderTextColor={`gray`}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Instagram link..."
          placeholderTextColor={`gray`}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Linkedin link..."
          placeholderTextColor={`gray`}
        />
        <TextButton
          title={`Submit changes`}
          style={styles.button}
          onPress={() => {}}
        />
        <TextButton
          title={`Delete account permanently`}
          style={styles.button}
          onPress={() => {}}
        />
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
  textInput: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    fontSize: 20,
    paddingVertical: 0,
    borderRadius: 5,
  },
  button: {
    width: '80%',
    marginBottom: 10,
  },
});
