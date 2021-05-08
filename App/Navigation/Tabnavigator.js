import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../Screens/AccountScreen';
import CheckOutScreen from '../Screens/CheckOutScreen';
import AppNav from './AppNav';
import Checknav from './Checknav';
const Tab = createBottomTabNavigator();

function Tabnavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Resturant" component={AppNav} />
      <Tab.Screen name="Checkout" component={Checknav} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default Tabnavigator;
