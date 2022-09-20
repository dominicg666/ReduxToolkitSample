import * as React from 'react';
import AppNavigationContainer from './app.navigator';
import AuthNavigator from './auth.navigator';
import TabNavigator from './tab.navigator';

function NavigationContainer() {
  return (
    <AppNavigationContainer>
      <AuthNavigator />
      <TabNavigator />
    </AppNavigationContainer>
  );
}

export default NavigationContainer;