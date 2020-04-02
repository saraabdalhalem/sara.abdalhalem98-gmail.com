//This is an example code for the popup menu//
import React, { Component } from 'react';
import {Drowlist} from '../pages/Drowlist';
import {BackAndroid,BackHandler} from 'react-native';

export   class Duaa3 extends Component{
//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
// }

// componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
// }

// onBackButtonPressed() {
//     return true;
// }
//   static navigationOptions = ({ navigation }) => {
  
//     return {
//       //Heading/title of the header
//       title: navigation.getParam('Title', 'خدمات الحجاج                            '),
//       headerLeft:()=> null,
//       headerTintColor: navigation.getParam('HeaderTintColor', 'black'),
//     }
//   }
 
  render(){
    return(

      <Drowlist/>
    );
  }
}