import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import signin from './signin';

export  class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserEmail: '',
      UserPassword: '',
 
    }
  }

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }
  static navigationOptions = {       
    title: ' تسجيل الدخول ',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#b8860b',
      //Sets Header color
    },
    headerTintColor: '#fff',
  

  headerTitleStyle: {
    fontWeight: 'bold',
    margin:210,
    fontSize : 20,
    fontFamily:'fontFamily',
    //Sets Header text style
  },

  };
UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('http://192.168.1.183/saraproject/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Drowlist');
 
        }
        else{
 
          Alert.alert("كلمة السر أو اسم المستخدم غير صحيح الرجاء المحاولة مرة أخرى");
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./gmail.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(UserEmail) => this.setState({UserEmail})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./key.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(UserPassword) => this.setState({UserPassword})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.UserLoginFunction}>
          <Text style={styles.loginText}>تسجيل الدخول</Text>
        </TouchableHighlight>

        <Icon.Button style={{paddingTop:10,backgroundColor:'blue'}}
           name="facebook"
         backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}>
تسجيل الدخول بواسطة الفيس بوك</Icon.Button>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text> هل نسيت كلمة السر ؟ </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() =>this.props.navigation.navigate('signin')}>
            <Text>لا تمتلك حساب ؟</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#b8860b",
  },
  loginText: {
    color: 'white',
  }
});