import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="AppScreens">
      <Stack.Screen name={'AppScreens'} component={AppTabs} />
      <Stack.Screen name={'AuthScreens'} component={AuthStack} />
    </Stack.Navigator>
  );
};
