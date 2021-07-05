import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersHistory from '../screens/OrdersHistory';
import Order from '../screens/Order';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const OrdersHistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Orders">
      <Stack.Screen name="Orders" component={OrdersHistory} />
      <Stack.Screen name="OrderHistory" component={Order} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
