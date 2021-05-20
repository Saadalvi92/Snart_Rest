import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ResturantScreen from '../Screens/ResturantScreen';
import Resturant_cat from '../Screens/Resturant_cat';
import Checknav from './Checknav';
const Stack = createStackNavigator();
function AppNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Resturants"
        component={ResturantScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Items" component={Resturant_cat} />
      <Stack.Screen
        name="Checkout"
        component={Checknav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNav;
