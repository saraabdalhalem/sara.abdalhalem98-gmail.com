
 import SettingsList from 'react-native-settings-list';
import React, { Component } from 'react';
import {Image,View, ListView, StyleSheet,Text,Button,BackHandler} from 'react-native';
import {NavigationActions} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


export default class tryi extends Component {
  static navigationOptions = {       
    title: '                                                                                                        حركات الصلاة',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: 'limegreen',
      //Sets Header color
    },
    headerTintColor: '#fff',
  

  headerTitleStyle: {
    fontWeight: 'bold',
    margin:220,
    fontSize : 20,
    fontFamily:'fontFamily',
    //Sets Header text style
  },

  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      
      
      <View style={{backgroundColor:'#f6f6f6',flex:1}}>
        
        {/* <View style={{borderBottomWidth:1, backgroundColor:'limegreen',borderColor:'#c8c7cc'}}> */}
          {/* <Text style={{color:'white',marginTop:15,marginBottom:15, marginRight:30,fontWeight:'bold',fontSize:20}}>حركات الصلاة</Text> */}
          {/* <Button title="رجوع"/> */}

        {/* </View> */}


            {/* here code try */}

<View style={{flex:1}}>

<View style={styles.Row}>
    <View style={styles.Box1}>
    <Image style={{alignSelf:'center',height:100, width:100}} source={require('./images/1.png')}/>
        <Text style={{fontWeight:'bold',fontSize:20}}>اتجه نحو القبلة</Text>
    </View>
    <View style={styles.Box2}>
    <Image style={{alignSelf:'center',height:100, width:100}} source={require('./images/2.png')}/>
        <Text style={{fontWeight:'bold',fontSize:20}}>تكبيرة الاحرام</Text>
    </View>
    <View style={styles.Box1}>
    <Image style={{alignSelf:'center',height:100, width:100}} source={require('./images/3.png')}/>
        <Text style={{fontWeight:'bold',fontSize:20}}>الركوع</Text>
    </View>

    <View style={styles.Box1}>
    <Image style={{alignSelf:'center',height:100, width:100}} source={require('./images/4.png')}/>
        <Text style={{fontWeight:'bold',fontSize:20}}>التسليم</Text>
    </View>
    
</View>




       </View>
      
       </View>
    );
  }
}


const styles = StyleSheet.create({
  Row : {flex:1,flexDirection:'column',paddingBottom:10},
  Box1 : {flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderColor:'black',paddingBottom:20},
  Box2 : {flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderColor:'black' ,paddingBottom:20},
});