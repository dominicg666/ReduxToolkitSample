/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/redux';
import StoreProvider from './src/provider';
import ContextProvider from './src/context/contextProvider'
import NavigationContainer from './src/navigator';

const App = () => {


  return (
    <StoreProvider store={store}>
      <ContextProvider>
        <NavigationContainer />
      </ContextProvider>
    </StoreProvider>
  );
};



export default App;
