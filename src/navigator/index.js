import * as React from 'react';
import {
  Text
} from 'react-native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigationContainer from './app.navigator';
import AuthNavigator from './auth.navigator';
import TabNavigator from './tab.navigator';

// const Stack = createNativeStackNavigator();
const isLogged = true;
function NavigationContainer() {
  const Navigator = isLogged ? TabNavigator : AuthNavigator;
  return (
    <AppNavigationContainer fallback={<Text>Loading...</Text>}>
      <Navigator />
    </AppNavigationContainer>
  );
}

export default NavigationContainer;