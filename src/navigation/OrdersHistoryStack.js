import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersHistory from '../screens/OrdersHistory';

const Stack = createStackNavigator();

export const OrdersHistoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen name="Orders" component={OrdersHistory} />
    </Stack.Navigator>
  );
};
