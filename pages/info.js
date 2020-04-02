import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React from 'react';
import {View,Text} from 'react-native';

// const yourModuleName = require('react-native-progress-steps');
import {Listtry} from '../component/Listtry';
// import {
//     StackNavigator,
//   } from 'react-navigation';
  
//   const App = StackNavigator({
//     // Home: { screen: HomeScreen },
//     listtry: { screen: Listtry }
//   });
// // function 
export  class Info extends React.Component {

    constructor(props) {
        super(props);
        this.onsub = this.onsub.bind(this);
      }
   
    onsub (){
        return(
          <Listtry/> 
        );  
        // this.props.navigation.navigate("Listtry");

    };

    render() {
        return (
        
<View style={{flex: 1}}>
<View style={{borderBottomWidth:1, backgroundColor:'green',borderColor:'#c8c7cc'}}>
          <Text style={{color:'white',marginTop:15,marginBottom:15, marginRight:30,fontWeight:'bold',fontSize:20}}>معلومات عن التطبيق</Text>
          </View>
    <ProgressSteps  >
        <ProgressStep label="تعليم الصلاة" nextBtnText={'التالي'} nextBtnTextStyle={{paddingRight:280,fontWeight:'bold'}}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{fontWeight:'bold',alignItems:'center',fontSize:20,paddingTop:80}}> تطبيق مسك الكعبه يهدف الى تعليم الصغار حركات الصلاه عن طريق تقييم حركه الصلاه اذا صحيحة .. اذا كانت غير صحيحه 
                    يقوم التطبيق باعطاء الحركه الصحيحه.
                </Text>
            </View>
        </ProgressStep>
        <ProgressStep label="الحج والعمرة" nextBtnText={'التالي'} previousBtnText={'السابق'}
         previousBtnStyle={{paddingLeft:280}} 
         nextBtnTextStyle={{paddingRight:280,fontWeight:'bold'}} 
         previousBtnTextStyle={{fontWeight:'bold'}}		>
            <View style={{ alignItems: 'center' }}>
                <Text style={{fontWeight:'bold',alignItems:'center',fontSize:20,paddingTop:80}}>يهدف التطبيق الى مساعدة الحجاج والمعتمرين بارسال اشعارات بالمناسك والادعيه اللازم القيام بها 
                    ايام الحج والعمره .. بالاضافه الى توفير ادعية أخرى.
                </Text>
            </View>
        </ProgressStep>
        <ProgressStep label="التتبع" onSubmit={this.onsub} previousBtnText={'السابق'} finishBtnText={'خروج'}
        previousBtnStyle={{paddingLeft:280}} 
        nextBtnStyle={{paddingRight:280}}
        nextBtnTextStyle={{fontWeight:'bold'}}
        previousBtnTextStyle={{fontWeight:'bold'}}
        >
            <View style={{ alignItems: 'center' }}>
                <Text style={{fontWeight:'bold',alignItems:'center',fontSize:20,paddingTop:80}}>يقوم بتتبع حركه الحجاج وارسال مواقعهم للدليل السياحي لتفادي مشاكل الضياع وغيرها.</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>

        );
    }
}