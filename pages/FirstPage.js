import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button,Text ,ImageBackground} from 'react-native';
//import all the components we are going to use.
 
export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'ּּ                 مڛک اڵګـ؏ـبۃ',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: 'darkgoldenrod',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color

    headerTitleStyle: {
      fontWeight: 'bold',
      margin:130,
      fontSize : 30,
      fontFamily:'fontFamily',
      //Sets Header text style
    },
   

  };

 
  render() {
    const { navigate } = this.props.navigation;
    return (
       <ImageBackground source={require('./k.png')} style={{width: '100%', height: '100%'}}>

      <View style={styles.container}>


<View style={styles.but}>
        <Button color='darkgoldenrod' title='تسجيل الخروج'
        onPress={() =>navigate('SecondPage')} 
        />
        <Text></Text>
         <Button color='darkgoldenrod' title='بدء الاستخدام'
        onPress={() =>navigate('SecondPage')} 
        />
        </View>
           </View>

     </ImageBackground>

     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
        paddingTop:450,

  },
  but: {
    //   flex=1,
    // color: 'darkgoldenrod',
   // paddingBottom:100,
   flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:60,
    marginLeft:60,

  },
  but2:{
  //  paddingTop:100,

  },
});