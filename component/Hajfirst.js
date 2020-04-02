import Ionicons from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon } from 'react-native-elements'
import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  StyleSheet,Text,View,
  
} from 'react-native';

export class Hajfirst extends Component {

  constructor(props) {
    super(props);
  }
render(){
  return(
 
      <View style={styles.container}>        
         <Text style={styles.welcome}>
           Your Location
        </Text>
        <Text></Text>
      <Icon.Button
          name='location'
          size={150}
          color='#887700'
          backgroundColor="#F5FCFF"
          > </Icon.Button> 
           
     {/* <Icon name="information-circle-outline" />       */}
 

      </View>
    
       
         
        );
      }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    color:'#b8860b',
    textAlign: 'center',
    // margin: 10,
    fontWeight:'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

