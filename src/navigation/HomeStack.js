import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
