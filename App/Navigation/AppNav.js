import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ResturantScreen from '../Screens/ResturantScreen';
import Resturant_cat from '../Screens/Resturant_cat';
import Checknav from './Checknav';
const Stack = createStackNavigator();
function AppNav({route}) {
  var userId = route.params;
  // console.log(userId);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Resturants"
        initialParams={userId}
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
