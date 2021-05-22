import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../Screens/AccountScreen';
import AppNav from './AppNav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
const Tab = createBottomTabNavigator();

function Tabnavigator({route}) {
  var userid = route.params;
  // console.log(userid);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Resturant"
        component={AppNav}
        initialParams={{userid}}
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
        initialParams={userid}
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
