import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContainer from './../srcc/navigations/AppNavigation';
import HomeScreen from './../srcc/screens/Home/HomeScreen';
import CategoriesScreen from './../srcc/screens/Categories/CategoriesScreen';
import {
  DrawerNavigator,
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SplashScreen from './../srcc/screens/Splash/SplashScreen';

class Aap extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default Aap;