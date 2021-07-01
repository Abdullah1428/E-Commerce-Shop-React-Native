import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';

export const Routes = () => {
  const user = false;
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      {!user ? <AuthStack /> : <AppTabs />}
    </NavigationContainer>
  );
};
