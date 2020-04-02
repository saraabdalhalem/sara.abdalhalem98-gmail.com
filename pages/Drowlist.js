
import * as React from 'react';
import { View, Text, Button,ImageBackground ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerNavigator,
  DrawerPosition,
   DrawerLayoutAndroid
} from '@react-navigation/drawer';
import {Login} from '../component/Login';
import {Hajfirst} from '../component/Hajfirst';
import {Listtry} from '../component/Listtry';
import {Mainnav} from '../menupop/Mainnav';
import App from './../App';


function Feed({ navigation }) {
  return (
    <ImageBackground source={require('./../component/images/log.png')} style={{width: '100%', height: '100%'}}>

    <View style={{ flex: 1 }}>
      {/* <Text style={{fontWeight:'bold', fontSize:30,paddingRight:110,flexDirection: 'row',paddingTop:20}}>خدمات الحجاج</Text> */}
      
      <View style={{justifyContent: 'center',paddingTop:560}}>
      <Button  title="اضغط هنا" onPress={() => navigation.openDrawer()} color='#887700'/>
      
    </View>
    </View>
    </ImageBackground>
  );
}

function Notifications() {
  return (
    <Mainnav/>
  );
}
function mop() {
  return (
    
      <Hajfirst />
    
  );
}
function set() {
  return (
<Listtry />    
  );
}
function out() {
return(
<App />
);
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView  {...props} 
    >
      <DrawerItemList 
          {...props} />
      {/* <DrawerItem 
        label="الاعدادات"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="تسجيل الخروج"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  //  const { navigate } = this.navigation;
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}
    // drawerPosition={DrawerPosition.Right}

    >
      <Drawer.Screen name="الصفحه الرئيسية" component={Feed} />
      <Drawer.Screen name="اظهار موقعي" component={mop} />
      <Drawer.Screen name="أذكار وأدعيه" component={Notifications} />
      <Drawer.Screen name="الاعدادات" component={set} />
      <Drawer.Screen name=" تسجيل الخروج" component={out} />

      {/* <DrawerLayoutAndroid drawerWidth = {300} drawerPosition = {DrawerLayoutAndroid.positions.Left}
                                     renderNavigationView = {() => navigationView}> <Text
            style = {{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text> <Text
            style = {{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text> </DrawerLayoutAndroid> */}

    </Drawer.Navigator>
    

  );
}

export class Drowlist extends React.Component {
  static navigationOptions = {       
    title: 'خدمات الحجاج',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#fff',
      //Sets Header color
    },
    headerTintColor: 'black',
  

  headerTitleStyle: {
    fontWeight: 'bold',
    margin:140,
    fontSize : 25,
    fontFamily:'fontFamily',
    //Sets Header text style
  }
}
  render(){
  // const { navigate } = this.props.navigation;
  return (
    <NavigationContainer> 
      <MyDrawer />
    </NavigationContainer>
  );
}
}