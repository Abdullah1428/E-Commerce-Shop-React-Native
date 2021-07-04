import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart';
import Shipping from '../screens/Shipping';
import Payment from '../screens/Payment';
import PlaceOrder from '../screens/PlaceOrder';
import Order from '../screens/Order';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Product from '../screens/Product';

const Stack = createStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CartProduct" component={Product} />
      <Stack.Screen name="Shipping" component={Shipping} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
