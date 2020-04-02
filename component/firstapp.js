
import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image, TouchableOpacity,ImageBackground} from 'react-native';
//import { setCustomText } from 'react-native-global-props';

 
export  class Firstapp extends Component {
  static navigationOptions = {
    title: 'رجوع',
    //Sets Header text of Status Bar
    
  };
 render() {
  const { navigate } = this.props.navigation;
   return (
            <ImageBackground source={require('./photo/y.png')} style={{width: '100%', height: '100%'}}>
       <Text style={styles.mesk}>مسك الكعبة</Text>

     <View style={styles.MainContainer}>
      <TouchableOpacity style={styles.FacebookStyle} activeOpacity={1} onPress={() =>this.props.navigation.navigate('Login')}>
 
      <View style={styles.SeparatorLine} />
      <Text style={styles.TextStyle}> الحج والعمرة  </Text>
         <Image 
          source={require('./photo/kaaba.png')} 
          style={styles.ImageIconStyle} 
          />
 
         
 
       </TouchableOpacity>
       
      <Text style={styles.txt}></Text>
       <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() =>this.props.navigation.navigate('tryi')}>
 
       <View style={styles.SeparatorLine} />
 
       <Text style={styles.TextStyle}> تعليم الصلاة </Text>
         <Image 
          source={require('./photo/islam.png')} 
          style={styles.ImageIconStyle} 
          />
 
         
 
       </TouchableOpacity>
 
     </View>
     </ImageBackground>
   );
 }
}
 
 
const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   paddingTop:60,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 50
 },
 
 GooglePlusStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   //backgroundColor: '#dc4e41',
   borderWidth: .5,
  borderColor: 'black',
   height: 50,
   borderRadius: 5 ,
   margin: 5,
 
},
 
FacebookStyle: {
  flexDirection: 'row',
 // paddingTop:20,
  alignItems: 'center',
 // backgroundColor: '#485a96',
  borderWidth: .5,
 borderColor: 'black',
  height: 50,
  borderRadius: 5 ,
  margin: 5,
 
},
 
ImageIconStyle: {
   padding: 20,
   margin: 5,
   height: 50,
   width: 50,
   resizeMode : 'stretch',
 
},
 
TextStyle :{
 
  color: 'darkgoldenrod',
  marginBottom : 4,
  marginRight :20,
  fontSize: 20,
  fontWeight: 'bold',
  borderColor:'black',
  
},
mesk :{
 // fontFamily
  fontFamily: "vincHand",
  alignItems: 'center',
  color: "#333333",
  marginTop : 70,
  marginRight :110,
  fontSize: 40,
  fontWeight: 'bold',
  borderColor:'black',
  
},

Txt :{
 
    paddingBottom:120,
    
  },
 
SeparatorLine :{
 
// backgroundColor : '#fff',
width: 5,
height: 100,
paddingTop:40,
}
 
});