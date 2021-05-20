import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeImageScreen from '../Screens/WelcomeImageScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import Tabnavigator from './Tabnavigator';
function AuthNav(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeImageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Login"
        component={Tabnavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNav;
