//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text, Button,StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';
//import all the components we are going to use.
import CustomMenu from './CustomMenu';
//import our Custom menu component
import CustomMenuIcon from './CustomMenuIcon';
import duaa1 from './duaa1';
import duaa2 from './duaa2';
import {Duaa3} from './duaa3';
// import N3 from './../pages/N3';

  // this.mop=mop.bind(this);
  //import our Custom Icon menu component
 
 export default class FirstPage extends Component {

  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
  
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'أدعية وأذكار المسلم                                    '),
        //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'green'),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      //Heading Menu in Right Side
      headerLeft : () => (
        //Custom menu component
        <CustomMenuIcon
          //Menu Text
          menutext="Menu"
          //Menu View Style
          menustyle={{
            marginLeft: 16,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          //Menu Text Style
          textStyle={
                //   color: 'white',
                //   paddingLeft:340,
          
            
            styles.tet}
           
          
          //Click functions for the menu items
          option5Click={() => {
            navigation.navigate('FirstPage');
          }}
          option1Click={() => {
            navigation.navigate('SecondPage');
          }}
          option2Click={() => {navigation.navigate('duaa1');}}
          option3Click={() => {navigation.navigate('duaa2');}}
          // option4Click={() => {
          //   // navigation.navigate('N3');
          // }}
        />
      ),
    };
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground source={require('./../component/images/d1.png')} style={{width: '100%', height: '100%'}}>
        {/* <View style={{ flex: 1, backgroundColor: '#ffdffd' }}> */}
        <View
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
         
          <CustomMenu style={styles.y}
            //Menu Text
            menutext="اظهار القائمه"
            //Menu View Style
            menustyle={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
            //Menu Text Style
            textStyle={{
              fontSize: 25,
              marginTop: 280,
              color: 'black',
            }}
            //Click functions for the menu items
            option5Click={() => {
                navigation.navigate('FirstPage');
              }}
            option1Click={() => {
              this.props.navigation.navigate('SecondPage');
            }}
            option2Click={() => {navigation.navigate('duaa1');}}
            option3Click={() => {navigation.navigate('duaa2');}}
            // option4Click={() => {
            //   // navigation.navigate('N3');

            // }}
          />
        {/* <TouchableOpacity onPress={() => {
          // return(
            <Duaa3 />
          // );
        }}>
            <Text  style={{fontWeight:'bold',fontSize:25}}>
               رجوع
            </Text>
         </TouchableOpacity> */}

      
      </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    tet:{
     color: 'white',
    //  justifyContent: "center",
    //  alignItems: "center"
      textAlign: "center",
    // paddingRight:340,
    alignSelf:'center'
    },
    y:{
        paddingBottom:10,

    }
  });
// export default FirstPage;