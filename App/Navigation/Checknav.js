import React from 'react';
import CheckOutScreen from '../Screens/CheckOutScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PayMethod from '../Screens/PayMethod';
import OrderComplete from '../Screens/OrderComplete';
import AppNav from './AppNav';
const Stack = createStackNavigator();

function Checknav({route}) {
  const cart = route.params;
  const id = route.params.id;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={CheckOutScreen}
        initialParams={[cart]}
      />
      <Stack.Screen name="PayMethod" component={PayMethod} />
      <Stack.Screen name="OrderComplete" component={OrderComplete} />
    </Stack.Navigator>
  );
}

export default Checknav;
