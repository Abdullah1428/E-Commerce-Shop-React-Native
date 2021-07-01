import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeStack} from './HomeStack';
import {ProfileStack} from './ProfileStack';
import {OrdersHistoryStack} from './OrdersHistoryStack';
import {CartStack} from './CartStack';

const Tabs = createBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <AntDesign name={'home'} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            return (
              <AntDesign name={'shoppingcart'} size={size} color={color} />
            );
          } else if (route.name === 'Orders') {
            return (
              <MaterialCommunityIcons
                name={'history'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return <AntDesign name={'profile'} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Cart" component={CartStack} />
      <Tabs.Screen name="Orders" component={OrdersHistoryStack} />
      <Tabs.Screen name="Profile" component={ProfileStack} />
    </Tabs.Navigator>
  );
};
