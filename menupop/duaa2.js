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
    y3:"اظهار",
    y4:"اظهار",
    y5:"اظهار",
    y6:"اظهار"

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
  status5:false,
  status6:false,
  status7:false,
  textValue: 'اظهار',
  y:"اظهار",
  y2:"اظهار",
  y3:"اظهار",
  y4:"اظهار",
  y5:"اظهار",
  y6:"اظهار"

       }
  this.ShowHideTextComponentView= this.ShowHideTextComponentView.bind(this);
  this.ShowHideTextComponentView2= this.ShowHideTextComponentView2.bind(this);
  this.ShowHideTextComponentView3= this.ShowHideTextComponentView3.bind(this);
  this.ShowHideTextComponentView4= this.ShowHideTextComponentView4.bind(this);
  this.ShowHideTextComponentView5= this.ShowHideTextComponentView5.bind(this);
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
            ShowHideTextComponentView5 = () =>{

                if(this.state.status5 == false)
                {
                this.setState({status5: true})
                this.setState({
                    y4: 'اخفاء'    
                  })
                }
                else
                {
                this.setState({status5: false})
                this.setState({
                   y4: 'اظهار'
                  })
                }
                }
                ShowHideTextComponentView6 = () =>{

                    if(this.state.status6 == false)
                    {
                    this.setState({status6: true})
                    this.setState({
                        y5: 'اخفاء'    
                      })
                    }
                    else
                    {
                    this.setState({status6: false})
                    this.setState({
                       y5: 'اظهار'
                      })
                    }
                    }
                    ShowHideTextComponentView7 = () =>{

                      if(this.state.status7 == false)
                      {
                      this.setState({status7: true})
                      this.setState({
                          y6: 'اخفاء'    
                        })
                      }
                      else
                      {
                      this.setState({status7: false})
                      this.setState({
                         y6: 'اظهار'
                        })
                      }
                      }
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    
    return {
      
      //Heading/title of the header
       title: navigation.getParam('Title', 'أذكار وأدعية الصلاه                                     '),
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
          option4Click={() => {
            return(
              <Duaa3/>
              );          }}
          
        />
        
      ),
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground source={require('./../component/images/b.png')} style={{width: '100%', height: '100%'}}>
          <ScrollView>
            <Text style={{paddingTop:20,paddingBottom:10,  borderColor:'black',flex: 1,fontSize:25,paddingRight:100,
    alignItems: 'center',justifyContent: 'center'}}>أدعية استفتاح الصلاة</Text>

        {/* <View style={{paddingTop:40}}> */}
              {
            this.state.status ? <View style= {{ fontSize: 25, textAlign: 'center'
             }}>
<Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
            اللَّهُمَّ بَاعِدْ بَيْنِيْ وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، 
            اللهم نَقِّنِيْ مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأبْيَضُ مِنَ الدَّنَسِ، 
            اللهم اغْسِلْنِيْ مِنْ خَطَايَايَ، بِالثَّلْجِ وَالْمَاءِ والْبَرَدِ.
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              سُبْحَانَكَ سُبْحَانَكَ اللهم وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ.
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              الْحَمْدُ الْحَمْدُ للّهِ حَمْداً كَثِيراً طَيِّباً مُبَارَكاً فِيهِ.
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              اللهُ أكْبَرُ كَبِيْرًا، وَالْحَمْدُ لِلهِ كَثِيْرًا، 
              وَسُبْحَانَ اللهِ بُكْرَةً وَّاصِيْلًا. أعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ: مِنْ نَفْخِهِ، وَنَفْثِهِ، وَهَمْزِهِ
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              اللَّهُمَّ رَبَّ جَبْرَائِيلَ، وَمِيْكَائِيلَ، وَإِسْرَافِيْلَ، فَاطِرَ السَّمَوَاتِ وَالْأرْضِ، 
              عَالِمَ الغَيْبِ وَالشَّهَادَةِ أنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيْمَا كَانُوا فِيْهِ يَخْتَلِفُونَ، 
              اِهْدِنِيْ لِمَا اخْتُلِفَ فِيْهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِيْ مَنْ تَشَاءُ إِلَى صِرَاطٍ مُّسْتَقِيْمٍ.
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَ السَّمَوَاتِ وَالْأرْضَ حَنِيْفًا وَّمَا أنَا مِنَ الْمُشْرِكِيْنَ،
               إِنَّ صَلَاتِيْ، وَنُسُكِيْ، وَمَحْيَايَ، وَمَمَاتِيْ لِلهِ رَبِّ الْعَالَمِيْنَ، لَا شَرِيْكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَانَا مِنَ الْمُسْلِمِيْنَ، 
               اللهم أنْتَ الْمَلِكُ لَا إِلَهَ إِلَّا أنْتَ، أنْتَ رَبِّيْ وَأنَا عَبْدُكَ،
                ظَلَمْتُ نَفْسِيْ وَاعْتَرَفْتُ بِذَنْبِيْ فَاغْفِرْ لِيْ ذُنُوْبِيْ جَمِيْعًا إِنَّهُ لَا يَغْفِرُ الذُّنوبَ إِلَّا أنْتَ.
                 وَاهْدِنِيْ لِأحْسَنِ الْأخْلَاقِ لَا يَهْدِيْ لِأحْسَنِهَا إِلَّا أنْتَ، وَاصْرِفْ عَنِّيْ سَيِّئَهَا، لَا يَصْرِفُ عَنِّيْ سَيِّئَهَا إِلَّا أنْتَ، لَبَّيْكَ وَسَعْدَيْكَ، 
                 وَالْخَيْرُ كُلُّهُ بِيَدَيْكَ، وَالشَّرُّ لَيْسَ إِلَيْكَ، أنَا بِكَ وَإِلَيْكَ، تَبارَكْتَ وَتَعَالَيْتَ، أسْتَغْفِرُكَ وَأتُوْبُ إِلَيْكَ.
              </Text>
             </View>
                : null }
                <View style={{width:"70%",paddingLeft:130}}>
                <Button onPress={this.ShowHideTextComponentView} title={this.state.textValue} color="green"></Button>
                </View>
                <Text>{"\n"}</Text>
           
                <Text style={styles.container}>أدعية الركوع</Text>
           
              {
            this.state.status2 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
                سَمِعَ اللهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيْرًا طَيِّبًا مُبارَكًا فِيْهِ.

              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>

              اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ اسْلَمْتُ، خَشَعَ لَكَ سَمْعِيْ، و بَصَـرِيْ، وَمُخِّيْ، وَعَظْمِيْ،
               وَعَصَبِيْ، وَمَا استَقَلَّتْ بِهِ قَدَمِيْ لِلهِ رَبِّ الْعَالَمِيْنَ             
             </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              اللَّهُمَّ رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْارْضِ، وَمَا بَيْنَهُمَا،
               وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ، أهْلَ الثَّنَاءِ وَالْمَجْدِ،
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              أحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ، اللهم لَا مَانِعَ لِمَا أعْطَيْتَ، 
              وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الجَدِّ مِنْكَ الْجَدُّ
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              اللَّهُمَّ لَكَ الْحَمْدُ مِلْءَ السَّمَاءِ، وَمِلْءَ الْارْضِ، وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ،
               اللَّهُمَّ طَهِّرْنِي بِالثَّلْجِ وَالْبَرَدِ، وَالْمَاءِ الْبَارِدِ،
              </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>
              اللَّهُمَّ طَهِّرْنِي مِنَ الذُّنُوبِ وَالْخَطَايَا، كَمَا يُنَقَّى الثَّوْبُ الْابْيَضُ مِنَ الْوَسَخِ.
              </Text>             
              </View>
                : null }
                <View style={{width:"70%",paddingLeft:130}}>
                <Button onPress={this.ShowHideTextComponentView2} title={this.state.y} color="green"></Button>
                </View>
                <Text>{"\n"}</Text>
           
           <Text style={styles.container3}>أدعية السجود</Text>      
         {
       this.state.status3 ? <View style= {{ fontSize: 30, textAlign: 'center' }}>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       سُبْحَانَ رَبِّيَ الأعْلَى وَبِحَمْدِهِ
       </Text>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلاَئِكَةِ وَالرُّوحِ.
       </Text>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       سُبحانَكَ اللّهمَّ ربَّنا وَبِحمدِكَ، اللّهمَّ اغفِرْ لي.
       </Text>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       سُبْحَانَ ذِي الْجَبْرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ.
       </Text>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلاَنِيَتَهُ وَسِرَّهُ
       </Text>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       اللَّهُمَّ لَكَ سَجَدْتُّ وَبِكَ آمَنْتُ، وَلَكَ أسْلَمْتُ، سَجَدَ وَجْهِي لِلَّذِيْ خَلَقَهُ، وَصَوَّرَهُ،
        وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللهُ أحْسَنُ الْخَالِقيْنَ
       </Text>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       اللَّهُمَّ إِنِّيْ أعُوْذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقوْبَتِكَ، 
       وَأعُوْذُ بِكَ مِنْكَ، لَا أُحْصِـي ثَنَاءً عَلَيْكَ، أنْتَ كَمَا أثْنَيْتَ عَلَى نَفْسِكَ
       </Text>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       رَبِّ اعْطِ نَفْسِي تَقْوَاهَا زَكِّهَا أنْتَ خَيْرُ مَنْ زَكَّاهَا أنْتَ وَلِيُّهَا وَمَوْلَاهَا.
       </Text>
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView3} title={this.state.y2} color="green"></Button>
           </View>
           <Text>{"\n"}</Text>
           
           <Text style={styles.container2}>أدعية الجلوس بين السجدتين</Text>      
         {
       this.state.status4 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       رَبِّ رَبِّ اغْفِرْ لِيْ، رَبِّ اغْفِرْ لِيْ.
         </Text>
        <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
        اللَّهُمَّ اغْفِرْ لِيْ، وَارْحَمْنِيْ، وَاهْدِنِيْ، وَاجْبُرْنِيْ، وَعَافِنِيْ، وَارْزُقْنِيْ، وَارْفَعْنِيْ.
        </Text>
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView4} title={this.state.y3} color="green"></Button>
            </View>
           <Text>{"\n"}</Text>

           <Text style={styles.container22}>دعاء سجود التلاوة</Text>      
         {
       this.state.status5 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
       سَجَدَ وَجْهِيَ للَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وبَصَرَهُ، بِحَوْلِهِ وَقُوَّتِهِ، فَتَبَارَكَ اللَّهُ أَحْسَنُ الْـخَالِقِينَ.
        </Text>
        <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
        اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أجْراً، وَضَعْ عَنِّي بِهَا وِزْرَاً،
         واْجعَلْهَا لِي عِنْدِكَ ذُخْراً، وتَقَبَّلَهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ
        </Text>
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView5} title={this.state.y4} color="green"></Button>
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
    // paddingTop:20,
    paddingBottom:10
    // color:'red'
  },
  container2: {
    borderColor:'black',
  flex: 1,
  fontSize:25,
  paddingRight:100,

  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom:10
},
container22: {
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
container3: {
    borderColor:'black',
  flex: 1,
  fontSize:25,
  paddingRight:150,
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
paddingRight:70,
//   backgroundColor: '#fff',
// margin:50,
alignItems: 'center',
justifyContent: 'center',
paddingBottom:10
},
container5: {
    borderColor:'black',
  flex: 1,
  fontSize:25,
//   paddingRight:10,
  //   backgroundColor: '#fff',
  // margin:50,
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom:10
  },
});