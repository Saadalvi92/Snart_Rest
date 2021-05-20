/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {View, StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import type {Node} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AuthNav from './App/Navigation/AuthNav';
import Resturant_cat from './App/Screens/Resturant_cat';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  enableScreens();

  return (
    <View style={styles.container}>
      <NavigationContainer theme={DefaultTheme}>
        <AuthNav />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});
