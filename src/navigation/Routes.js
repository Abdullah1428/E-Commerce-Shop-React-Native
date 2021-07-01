import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';

export const Routes = () => {
  const user = true;
  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <AppTabs />}
    </NavigationContainer>
  );
};
