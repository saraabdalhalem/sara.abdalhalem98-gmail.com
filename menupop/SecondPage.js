//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text,ScrollView,ImageBackground,Button} from 'react-native';
//import all the components we are going to use.
import CustomMenuIcon from './CustomMenuIcon';
//import our Custom menu component
import ShowMore from 'react-native-show-more-button';
import {Duaa3} from './duaa3';
export default class SecondPage extends Component {
  state = {
    textValue: "اظهار",
    y:"اظهار",
    y2:"اظهار",
    y3:"اظهار"
  }



ShowHideTextComponentView = () =>{

if(this.state.status == false)
{
this.setState({status: true})
this.setState({
    textValue: 'اخفاء'    
  })
}
else
{
this.setState({status: false})
this.setState({
    textValue: 'اظهار'
  })
}
}
    constructor(props) {
        super(props);
        

     this.state ={

  status:false,
  status2:false,
  status3:false,
  status4:false,
  textValue: 'اظهار',
  y:"اظهار",
  y2:"اظهار",
  y3:"اظهار"

       }
  this.ShowHideTextComponentView= this.ShowHideTextComponentView.bind(this);
  this.ShowHideTextComponentView2= this.ShowHideTextComponentView2.bind(this);
  this.ShowHideTextComponentView3= this.ShowHideTextComponentView3.bind(this);
  this.ShowHideTextComponentView4= this.ShowHideTextComponentView4.bind(this);
      }

      ShowHideTextComponentView2 = () =>{

        if(this.state.status2 == false)
        {
        this.setState({status2: true})
        this.setState({
            y: 'اخفاء'    
          })
        }
        else
        {
        this.setState({status2: false})
        this.setState({
           y: 'اظهار'
          })
        }
        }
        ShowHideTextComponentView3 = () =>{

          if(this.state.status3 == false)
          {
          this.setState({status3: true})
          this.setState({
              y2: 'اخفاء'    
            })
          }
          else
          {
          this.setState({status3: false})
          this.setState({
             y2: 'اظهار'
            })
          }
          }

          ShowHideTextComponentView4 = () =>{

            if(this.state.status4 == false)
            {
            this.setState({status4: true})
            this.setState({
                y3: 'اخفاء'    
              })
            }
            else
            {
            this.setState({status4: false})
            this.setState({
               y3: 'اظهار'
              })
            }
            }
        
     
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    
    return {
      
      //Heading/title of the header
       title: navigation.getParam('Title', '     أدعية السفر                                                '),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'green'),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      
      headerTitleStyle:{alignSelf:'center'} ,
        // title:'أدعية ',
    
      //Heading Menu in Right Side
      headerLeft: () => (
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
          textStyle={{
            color: 'white',
          }}
          //Click functions for the menu items
          option5Click={() => {
            navigation.navigate('FirstPage');
          }}
          option1Click={() => {
            navigation.navigate('SecondPage');
          }}
          option2Click={() => {navigation.navigate('duaa1')}}
          option3Click={() => {navigation.navigate('duaa2')}}
          option4Click={() =>{
           return(

              <Duaa3 />
           );
                      }}
          
        />
        
      ),
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground source={require('./../component/images/b.png')} style={{width: '100%', height: '100%'}}>
          <ScrollView>
            <Text style={styles.container}>دعاء السفر</Text>

        {/* <View style={{paddingTop:40}}> */}
              {
            this.state.status ? <View style= {{ fontSize: 25, textAlign: 'center'  }}>
            <Text style={{color:"black",fontWeight:"bold"}}>سبحان الذي سخر لنا هذا، وما كنا له مقرنين، وإنا إلى ربنا لمنقلبون،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>اللهم إنا نسألك في سفرنا هذا البر والتقوى، ومن العمل ما ترضى،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>اللهم هوِّن علينا سفرنا هذا، واطوِ عنّا بعده، اللهم أنت الصاحب في السفر،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>والخليفة في الأهل، اللهم إني أعوذ بك من وعثاء السفر</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>وكآبة المنظر، وسوء المنقلب في المال والأهل</Text>
              <Text  style={{color:"black",fontWeight:"bold"}}>آيبون تائبون عابدون لربنا حامدون</Text>

              </View>
                : null }
                <View style={{width:"70%",paddingLeft:130}}>
                <Button onPress={this.ShowHideTextComponentView} title={this.state.textValue} color="green"></Button>
                </View>
                <Text>{"\n"}</Text>
           
                <Text style={styles.container2}>دعاءالعودة من السفر</Text>
           
              {
            this.state.status2 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
            <Text style={{color:"black",fontWeight:"bold"}}>سبحان الذي سخر لنا هذا، وما كنا له مقرنين، وإنا إلى ربنا لمنقلبون،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>اللهم إنا نسألك في سفرنا هذا البر والتقوى، ومن العمل ما ترضى،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>اللهم هوِّن علينا سفرنا هذا، واطوِ عنّا بعده، اللهم أنت الصاحب في السفر،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>والخليفة في الأهل، اللهم إني أعوذ بك من وعثاء السفر</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>وكآبة المنظر، وسوء المنقلب في المال والأهل</Text></View>
                : null }
                <View style={{width:"70%",paddingLeft:130}}>
                <Button onPress={this.ShowHideTextComponentView2} title={this.state.y} color="green"></Button>
                </View>
                <Text>{"\n"}</Text>
           
           <Text style={styles.container3}>دعاء نزول المكان</Text>      
         {
       this.state.status3 ? <View style= {{ fontSize: 30, textAlign: 'center' }}>
       <Text style={{color:"black",fontWeight:"bold"}}>أعوذ بكلمات الله التامات من شر ما خلق</Text>
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView3} title={this.state.y2} color="green"></Button>
           </View>
           <Text>{"\n"}</Text>
           
           <Text style={styles.container4}>دعاء نزول المدن والقرى</Text>      
         {
       this.state.status4 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold"}}>اللهم رب السموات السبع وما أظللن، ورب الأرضين السبع وما أقللن،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>ورب الشياطين وما أضللن، ورب الرياح وما ذرين،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>فإنا نسألك خير هذه القرية وخير أهلها،</Text>
              <Text style={{color:"black",fontWeight:"bold"}}>ونعوذ بك من شرها وشر أهلها وشر ما فيها</Text>
             
         
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView4} title={this.state.y3} color="green"></Button>
            </View>
           <Text>{"\n"}</Text>

        

       </ScrollView>
      {/* </View> */}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      borderColor:'black',
    flex: 1,
    fontSize:25,
    paddingRight:140,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
    paddingBottom:10
    // color:'red'
  },
  container2: {
    borderColor:'black',
  flex: 1,
  fontSize:25,
  paddingRight:100,
//   backgroundColor: '#fff',
  // margin:50,
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom:10
},
container3: {
    borderColor:'black',
  flex: 1,
  fontSize:25,
  paddingRight:120,
//   backgroundColor: '#fff',
  // margin:50,
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom:10
},
container4: {
  borderColor:'black',
flex: 1,
fontSize:25,
paddingRight:120,
//   backgroundColor: '#fff',
// margin:50,
alignItems: 'center',
justifyContent: 'center',
paddingBottom:10
},
});