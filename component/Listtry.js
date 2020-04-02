
'use strict';
import React, { Component } from 'react';
import Dialog from "react-native-dialog";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Switch,
  BackHandler
} from 'react-native';
import PushNotification from 'react-native-push-notification'
// import { 
//   SettingsSwitch
// } from 'react-native-settings-components';

import SettingsList from 'react-native-settings-list';

import {Info} from '../pages/info';
// import SettingsSwitch from '@type/react-native-settings-components';
var noti="false";
var map="false";
export  class Listtry extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      switchValue: false,
      dialogVisible: false,
      dialogVisible2: false,
    };
    
 }
 async  componentDidUpdate (){
if(noti =="true"){
  PushNotification.configure({
     
   onNotification: function(notification) {
   console.log("NOTIFICATION:", notification);
      },
    });

}
 }

 showDialog = () => {
  this.setState({ dialogVisible: true });
};

handleCancel = () => {
  this.setState({ 
    dialogVisible: false ,
  });
  map="false";
};

handleDelete = () => {
  this.setState({ 
    dialogVisible: false,
  });
  map="true";
};


showDialog2 = () => {
  this.setState({ dialogVisible2: true });
};

handleCancel2 = () => {
  this.setState({ 
    dialogVisible2: false,
  });
  noti="false";
};

handleDelete2 = () => {
  this.setState({ 
    dialogVisible2: false,
   });
   noti="true";
}
  render() {
    return (
      
      <View style={{backgroundColor:'#f6f6f6',flex:1}}>

        <View style={{borderBottomWidth:1, backgroundColor:'#263238',borderColor:'#c8c7cc'}}>
          <Text style={{color:'white',marginTop:15,marginBottom:15, marginRight:30,fontWeight:'bold',fontSize:20}}>الاعدادات</Text>
        </View>
        <View style={{backgroundColor:'#f6f6f6',flex:1}}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
            //   title='الاعدادات'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'500'}}
              itemWidth={50}
              borderHide={'Both'}
            /> 
            
            {/* <SettingsSwitch */}
            <SettingsList.Item 
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'flex-start',height:22, width:22,marginLeft:370}} source={require('./images/data.png')}/>
                </View>   
              }       
            hasNavArrow={false}
            itemWidth={70}
            titleStyle={{color:'black', fontSize: 16,fontWeight:'bold'}}
            title='           السماح بتتبع موقعي عالخريطه'
            // switchState={this.state.switchValue}
              // switchOnValueChange={this.onValueChange.bind(this)}
            //  hasSwitch ={true}
            //  switchProps={{marginRight:60}}
            //  swithStyle={{marginRight:370}}
            // arrowStyle={{alignSelf:'center'}}
            onPress={this.showDialog}
            />
        

            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'flex-start',height:22, width:22,marginLeft:370}} source={require('./images/more.png')}/>
                </View>
              }
              title='           استلام التنبيهات'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16,fontWeight:'bold'}}
              hasNavArrow={false}
              onPress={this.showDialog2}
            />               

            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            {/* <SettingsList.Item
              hasNavArrow={false}
            //   title='Device'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'bold'}}
              itemWidth={70}
              borderHide={'Both'}
            /> */}
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'flex-start',height:22, width:22,marginLeft:370}} source={require('./images/display2.png')}/>
                </View>
              }
              title='         اللغة'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16,fontWeight:'bold'}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'flex-start',height:20, width:22,marginLeft:370}} source={require('./images/sound.png')}/>
                </View>
              }
              title='         مستوى الصوت'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16,fontWeight:'bold'}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'flex-start',height:22, width:22,marginLeft:370}} source={require('./images/apps.png')}/>
                </View>
              }
              title='           عن التطبيق'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16,fontWeight:'bold'}}
              hasNavArrow={false} 
              // onPress={this.props._onPressButton()}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image style={{alignSelf:'flex-start',height:22, width:22,marginLeft:370}} source={require('./images/storage.png')}/>
                </View>
              }
              title='            مساعدة'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 18,fontWeight:'bold'}}
              hasNavArrow={false}
            />

            <SettingsList.Header headerStyle={{marginTop: -5}}/>
          </SettingsList>
        </View>
        <View>
          <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>تتبع الموقع</Dialog.Title>
          <Dialog.Description>
          هل تريد تفعيل تتبع موقعك بالخريطة ؟
          </Dialog.Description>
          <Dialog.Button label="لا" onPress={this.handleCancel} style={{marginRight:70}} />
          <Dialog.Button label="نعم" onPress={this.handleDelete}  style={{ marginRight:50}} />
        </Dialog.Container>
        </View>

        <View>
          <Dialog.Container visible={this.state.dialogVisible2}>
          <Dialog.Title>تشغيل الاشعارات</Dialog.Title>
          <Dialog.Description>
          هل تريد استلام أذكار الحج في كل يوم ؟     
           </Dialog.Description>
          <Dialog.Button label="لا" onPress={this.handleCancel2} style={{marginRight:70}} />
          <Dialog.Button label="نعم" onPress={this.handleDelete2}  style={{ marginRight:50}} />
        </Dialog.Container>
        </View>
        
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    marginRight:20,
    alignSelf:'center',
    width:20,
    height:24,
    justifyContent:'center'
    
  },
  container: {
    alignSelf: 'flex-end',
  }
});

