import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
