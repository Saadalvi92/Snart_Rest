import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../Screens/AccountScreen';
import AppNav from './AppNav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
const Tab = createBottomTabNavigator();

function Tabnavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Resturant"
        component={AppNav}
        options={{
          headerShown: false,
          tabBarIcon: ({size}) => (
            <Icon name="silverware" color={colors.mediumGrey} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({size}) => (
            <Icon name="account" color={colors.mediumGrey} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabnavigator;
