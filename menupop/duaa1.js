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
    y6:"اظهار",
    y7:"اظهار",
    y8:"اظهار",
    y9:"اظهار",
    y10:"اظهار",
    y11:"اظهار",
    y12:"اظهار",
    y13:"اظهار",
    y14:"اظهار"

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
  y6:"اظهار",
  y7:"اظهار",
  y8:"اظهار",
  y9:"اظهار",
  y10:"اظهار",
  y11:"اظهار",
  y12:"اظهار",
  y13:"اظهار",
  y14:"اظهار"

       }
  this.ShowHideTextComponentView= this.ShowHideTextComponentView.bind(this);
  this.ShowHideTextComponentView2= this.ShowHideTextComponentView2.bind(this);
  this.ShowHideTextComponentView3= this.ShowHideTextComponentView3.bind(this);
  this.ShowHideTextComponentView4= this.ShowHideTextComponentView4.bind(this);
  this.ShowHideTextComponentView5= this.ShowHideTextComponentView5.bind(this);
  this.ShowHideTextComponentView6= this.ShowHideTextComponentView6.bind(this);
  this.ShowHideTextComponentView7= this.ShowHideTextComponentView7.bind(this);
  this.ShowHideTextComponentView8= this.ShowHideTextComponentView8.bind(this);
  this.ShowHideTextComponentView9= this.ShowHideTextComponentView9.bind(this);
  this.ShowHideTextComponentView10= this.ShowHideTextComponentView10.bind(this);
  this.ShowHideTextComponentView11= this.ShowHideTextComponentView11.bind(this);
  this.ShowHideTextComponentView12= this.ShowHideTextComponentView12.bind(this);
  this.ShowHideTextComponentView13= this.ShowHideTextComponentView13.bind(this);
  this.ShowHideTextComponentView14= this.ShowHideTextComponentView14.bind(this);
  this.ShowHideTextComponentView15= this.ShowHideTextComponentView15.bind(this);




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
        
                          ShowHideTextComponentView8 = () =>{

                            if(this.state.status8 == false)
                            {
                            this.setState({status8: true})
                            this.setState({
                                y7: 'اخفاء'    
                              })
                            }
                            else
                            {
                            this.setState({status8: false})
                            this.setState({
                               y7: 'اظهار'
                              })
                            }
                            }
                            ShowHideTextComponentView9 = () =>{
        
                              if(this.state.status9 == false)
                              {
                              this.setState({status9: true})
                              this.setState({
                                  y8: 'اخفاء'    
                                })
                              }
                              else
                              {
                              this.setState({status9: false})
                              this.setState({
                                 y8: 'اظهار'
                                })
                              }
                              }




                              ShowHideTextComponentView10 = () =>{

                                if(this.state.status10 == false)
                                {
                                this.setState({status10: true})
                                this.setState({
                                    y9: 'اخفاء'    
                                  })
                                }
                                else
                                {
                                this.setState({status10: false})
                                this.setState({
                                   y9: 'اظهار'
                                  })
                                }
                                }
                                ShowHideTextComponentView11 = () =>{
            
                                  if(this.state.status11 == false)
                                  {
                                  this.setState({status11: true})
                                  this.setState({
                                      y10: 'اخفاء'    
                                    })
                                  }
                                  else
                                  {
                                  this.setState({status11: false})
                                  this.setState({
                                     y10: 'اظهار'
                                    })
                                  }
                                  }

                                  ShowHideTextComponentView12 = () =>{
            
                                    if(this.state.status12 == false)
                                    {
                                    this.setState({status12: true})
                                    this.setState({
                                        y11: 'اخفاء'    
                                      })
                                    }
                                    else
                                    {
                                    this.setState({status12: false})
                                    this.setState({
                                       y11: 'اظهار'
                                      })
                                    }
                                    }

                                    ShowHideTextComponentView13 = () =>{
            
                                      if(this.state.status13 == false)
                                      {
                                      this.setState({status13: true})
                                      this.setState({
                                          y12: 'اخفاء'    
                                        })
                                      }
                                      else
                                      {
                                      this.setState({status13: false})
                                      this.setState({
                                         y12: 'اظهار'
                                        })
                                      }
                                      }
                                      ShowHideTextComponentView14 = () =>{
            
                                        if(this.state.status14 == false)
                                        {
                                        this.setState({status14: true})
                                        this.setState({
                                            y13: 'اخفاء'    
                                          })
                                        }
                                        else
                                        {
                                        this.setState({status14: false})
                                        this.setState({
                                           y13: 'اظهار'
                                          })
                                        }
                                        }

                                        ShowHideTextComponentView15 = () =>{
            
                                          if(this.state.status15 == false)
                                          {
                                          this.setState({status15: true})
                                          this.setState({
                                              y14: 'اخفاء'    
                                            })
                                          }
                                          else
                                          {
                                          this.setState({status15: false})
                                          this.setState({
                                             y14: 'اظهار'
                                            })
                                          }
                                          }
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    
    return {
      
      //Heading/title of the header
       title: navigation.getParam('Title', 'أذكار وأدعية الحج والعمرة                           '),
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
            <Text style={styles.container}>الذكر عند الاحرام</Text>

        {/* <View style={{paddingTop:40}}> */}
              {
            this.state.status ? <View style= {{ fontSize: 25, textAlign: 'center'  }}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>سُبْحَانَ اللهِ وَالحَمْدُ للهِ وَالله أَكْبَرُ</Text>
             </View>
                : null }
                <View style={{width:"70%",paddingLeft:130}}>
                <Button onPress={this.ShowHideTextComponentView} title={this.state.textValue} color="green"></Button>
                </View>
                <Text>{"\n"}</Text>
           
                <Text style={styles.container2}>الدعاء عند رؤية الكعبة</Text>
           
              {
            this.state.status2 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>اللهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، فَحَيِّنَا رَبَّنَا بِالسَّلَامِ</Text>
              </View>
                : null }
                <View style={{width:"70%",paddingLeft:130}}>
                <Button onPress={this.ShowHideTextComponentView2} title={this.state.y} color="green"></Button>
                </View>
                <Text>{"\n"}</Text>
           
           <Text style={styles.container3}>دعاء التلبية</Text>      
         {
       this.state.status3 ? <View style= {{ fontSize: 30, textAlign: 'center' }}>
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>لبَّيْكَ اللَّهُمَّ لَبَّيْك، لَبّيْك لا شَرِيكَ لك لَبَّيْك إنَّ الحَمْدَ، والنِّعْمَةَ، لَكَ والمُلْك، لا شريك لك</Text>
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView3} title={this.state.y2} color="green"></Button>
           </View>
           <Text>{"\n"}</Text>
           
           <Text style={styles.container4}>الدعاء عند استلام الحجر الأسود</Text>      
         {
       this.state.status4 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>بِاسْمِ اللهِ وَاللهُ أَكْبَرُ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ تَصْدِيقًا بِكِتَابِكَ، وَسُنَّةِ نَبِيِّكَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ</Text>
             
         
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView4} title={this.state.y3} color="green"></Button>
            </View>
           <Text>{"\n"}</Text>

           <Text style={styles.container4}>الدُّعاءُ بينَ الرُّكن اليماني والحجر الأسود</Text>      
         {
       this.state.status5 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً، وَفِي الْآخِرَةِ حَسَنَةً، وَقِنَا عَذَابَ النَّارِ</Text>
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView5} title={this.state.y4} color="green"></Button>
            </View>

            <Text>{"\n"}</Text>
           
           <Text style={styles.container22}>الدعاء في الطواف</Text>      
         {
       this.state.status6 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ اعْصِمْنِي بِدِينِكَ، وَطَاعَةِ رَسُولِكَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ جَنِّبْنِي حُدُودَكَ.</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ اجْعَلْنِي مِمَّنْ يُحِبُّكَ، وَيُحِبُّ مَلَائِكَتَكَ، وَرُسُلَكَ، وَعِبَادَكَ الصَّالِحِينَ اللَّهُمَّ حَبِّبْنِي إِلَيْكَ،</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>وَإِلَى مَلَائِكَتِكَ، وَرُسُلِكَ، وَعِبَادَكَ الصَّالِحِينَ.</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ آتِنِي مِنْ خَيْرِ مَا تُؤْتِي عِبَادَكَ الصَّالِحِينَ فِي الدُّنْيَا وَالْآخِرَةِ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ يَسِّرْنِي لِلْيُسْرَى، وَجَنِّبْنِي الْعُسْرَى، وَاغْفِرْ.</Text>


         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView6} title={this.state.y5} color="green"></Button>
            </View>


            <Text>{"\n"}</Text>
           
           <Text style={styles.container2}>الدعاء بعد ركعتي الطواف</Text>      
         {
       this.state.status7 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}> بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</Text>
             
         
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView7} title={this.state.y6} color="green"></Button>
            </View>

            <Text>{"\n"}</Text>
           
           <Text style={styles.container4}>الدعاء عند صعود الصَّفَا والمروة</Text>      
         {
       this.state.status8 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللهُ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}> أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ"</Text>
             
         
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView8} title={this.state.y7} color="green"></Button>
            </View>


            <Text>{"\n"}</Text>
           
           <Text style={styles.container22}>الدعاء على الصفا</Text>      
         {
       this.state.status9 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}></Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ إِنَّكَ قُلْتَ: (اِدْعُونِي أَسْتَجِبْ لَكُمْ) وَإِنَّكَ لاَ تُخْلِفُ الْمِيعَادَ، </Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>وَإِنِّي أَسْأَلُكَ كَمَا هَدَيْتَنِي إِلَى الإِسْلاَمِ أَلاَ تَنْزِعَهُ مِنِّي حَتَّى تَتَوَفَّانِي، وَأَنَا مُسْلِمٌ".</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ اعْصِمْنَا بِدِينِكَ، وَطَوَاعِيَتِكَ، وَطَوَاعِيَةِ رَسُولِكَ، وَجَنِّبْنَا حُدُودَكَ</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>"اللَّهُمَّ اجْعَلْنَا نُحِبُّكَ، وَنُحِبُّ مَلَائِكَتَكَ، وَأَنْبِيَاءَكَ، وَرُسَلَكَ، وَنُحِبُّ عِبَادَكَ الصَّالِحِينَ".</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>"اللَّهُمَّ حَبِّبْنَا إِلَيْكَ وَإِلَى مَلَائِكَتِكَ، وَإِلَى أَنْبِيَائِكَ، وَرُسُلِكَ، وَإِلَى عِبَادِكَ الصَّالِحِينَ".</Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>اللَّهُمَّ يَسِّرْنَا لِلْيُسْرَى، وَجَنِّبْنَا وَجَنِّبْنَا الْعُسْرَى، وَاغْفِرْ لَنَا فِي الْآخِرَةِ</Text>
              {/* <Text style={{color:"black",fontWeight:"bold",fontSize:27}}></Text> */}
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView9} title={this.state.y8} color="green"></Button>
            </View>
            <Text>{"\n"}</Text>
           
           <Text style={styles.container4}>الدعاء في السعي بين الصفا والمروة</Text>      
         {
       this.state.status10 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}></Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>رَبِّ اغْفِرْ وَارْحَمْ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ</Text>  
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView10} title={this.state.y9} color="green"></Button>
            </View>

            <Text>{"\n"}</Text>
           
           <Text style={styles.container3}>الدعاء بعرفات</Text>      
         {
       this.state.status11 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}></Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</Text>  
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView11} title={this.state.y10} color="green"></Button>
            </View>

            <Text>{"\n"}</Text>
           
           <Text style={styles.container4}>الدعاء عند رمي جمرة العقبة عِنْدَ كُلِّ حَصَاة</Text>      
         {
       this.state.status12 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}></Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
              الله أَكْبَر، الله أَكْبَر، الله أَكْبَر
                </Text> 
                <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
                اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَذَنْبًا مَغْفُورًا
                </Text>  
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView12} title={this.state.y11} color="green"></Button>
            </View>

            <Text>{"\n"}</Text>
           
           <Text style={styles.container22}>الذكر عند ذبح الأضاحي</Text>      
         {
       this.state.status13 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}></Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
              بسم الله , اللهم تقبل من محمد وآل محمد ومن أمة محمد
                </Text> 
                 
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView13} title={this.state.y12} color="green"></Button>
            </View>

            <Text>{"\n"}</Text>
           
           <Text style={styles.container2}>دعاء الرجوع من الحج أو العمرة </Text>      
         {
       this.state.status14 ? <View style= {{ fontSize: 25, textAlign: 'center' }}>
       
       <Text style={{color:"black",fontWeight:"bold",fontSize:27}}></Text>
              <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
              الله أَكْبَر، الله أَكْبَر، الله أَكْبَر
                </Text> 

                <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
                لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، آيِبُونَ
                </Text>

                <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
                تَائِبُونَ، عَابِدُونَ، سَاجِدُونَ
                </Text>

                <Text style={{color:"black",fontWeight:"bold",fontSize:27}}>
                اَللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا
                </Text>
                 
         </View>
           : null }
           <View style={{width:"70%",paddingLeft:130}}>
           <Button onPress={this.ShowHideTextComponentView14} title={this.state.y13} color="green"></Button>
            </View>



        

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