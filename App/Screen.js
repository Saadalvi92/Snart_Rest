import React from 'react';
import {View, Text} from 'react-native';
import Cat_CardComponent from './Components/Cat_CardComponent';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
import ResturantScreen from './Screens/ResturantScreen';
import Resturant_cat from './Screens/Resturant_cat/Resturant_cat';
import WelcomeImageScreen from './Screens/WelcomeImageScreen/WelcomeImageScreen';
import CheckOut from './Screens/CheckOutScreen';
import PayMethod from './Screens/PayMethod';
import AccountScreen from './Screens/AccountScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './Navigation/AuthNavigator';
function Screen(props) {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default Screen;
