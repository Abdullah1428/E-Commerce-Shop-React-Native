import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {AppStack} from './AppStack';

export const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <AppStack />
    </NavigationContainer>
  );
};
