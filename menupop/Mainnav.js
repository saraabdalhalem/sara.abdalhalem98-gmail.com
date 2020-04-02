//This is an example code for popup menu// 
import React, { Component } from 'react';
//import react in our code. 
 
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import duaa1 from './duaa1';
import duaa2 from './duaa2';
// import N3 from './../pages/N3';

//import all the screens we are going to switch 
 
const Mainnav2 = createStackNavigator({
    FirstPage: { screen: FirstPage },
    SecondPage: { screen: SecondPage },
    duaa1:{screen : duaa1},
    duaa2:{screen : duaa2},
    // N3:{screen : N3}
  },
  {
    initialRouteName: 'FirstPage',
  }
);
const Sara= createAppContainer(Mainnav2);

export class Mainnav extends React.Component{
  render() {
    return <Sara />;
  }
}