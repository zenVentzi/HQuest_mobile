/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import TestApp from './Components/TestApp';
import App from './Components/App';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.WelcomeScreen',
      },
    },
  });
});
