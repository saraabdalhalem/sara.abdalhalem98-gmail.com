import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import {Listtry} from './../component/Listtry';
import {Mainnav} from './../menupop/Mainnav';
import {Hajfirst} from './../component/Hajfirst';
import {Drowlist} from './Drowlist';

//import all the screens we are going to switch 
const N3 = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    Listtry: { screen: Listtry }, 
    Mainnav: { screen: Mainnav }, 
    Hajfirst :{screen:Hajfirst},
     Drowlist:{screen:Drowlist},
    


  },
  {
    initialRouteName: 'Drowlist',
  }
);
export default createAppContainer(N3);