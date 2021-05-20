import React from 'react';
import CheckOutScreen from '../Screens/CheckOutScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PayMethod from '../Screens/PayMethod';
const Stack = createStackNavigator();
function Checknav({route}) {
  const cart = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={CheckOutScreen}
        options={{headerShown: false}}
        initialParams={[cart]}
      />
      <Stack.Screen name="PayMethod" component={PayMethod} />
    </Stack.Navigator>
  );
}

export default Checknav;
