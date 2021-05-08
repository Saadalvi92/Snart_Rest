import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ResturantScreen from '../Screens/ResturantScreen';
import Resturant_cat from '../Screens/Resturant_cat';
const Stack = createStackNavigator();
function AppNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Resturants" component={ResturantScreen} />
      <Stack.Screen name="Items" component={Resturant_cat} />
    </Stack.Navigator>
  );
}

export default AppNav;
