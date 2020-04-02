// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text,Image } from 'react-native';
// // import Constants from 'expo-constants';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }

// export default function malak() {
//   return (
//     <SafeAreaView style={styles.container}>
//         <View>
//             <Image source={require('./images/data.png')}></Image>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop: Constants.statusBarHeight,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

import SocialIcon from 'react-native-vector-icons/AntDesign';
import BookingIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';
import React,{Component} from 'react';
import {StyleSheet ,View,FlatList,TouchableHighlight,Text} from 'react-native';

export const bookIcon = (<BookingIcon name="pencil-square-o" size={40} color="purple" />);
export const calendarIcon = (<SocialIcon name="calendar" size={40} color="purple" />);
export const questionIcon = (<SocialIcon name="questioncircleo" size={40} color="purple" />);
export const externalLinkIcon = (<FeatherIcons name="external-link" size={40} color="purple" />);



export default class malak extends Component {
    static navigationOptions = {
      title: "About Me",
    }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.topBox}>
          <View style={styles.circleOuter} />
            <View style={styles.circle} />

          </View>
          <View style={styles.middleBox}>

          </View>
          <View style={styles.bottomBox}>
            <FlatList
              contentContainerStyle={styles.listItem}
              data={[
                {key: 'Book a free appointment', page:'Book', icon: bookIcon},
                {key: 'Availability', page:'Availability', icon:calendarIcon},
                {key: 'FAQ', page:'Faq', icon: questionIcon},
                {key: 'Useful Links', page: 'Links', icon: externalLinkIcon},
              ]}
              onPress={() => this.props.navigation.navigate('Book')}
              renderItem={({item}) => {
                  return (
                    <TouchableHighlight onPress={() => this.props.navigation.navigate(`${item.page}`)}>
                      <Text >{item.icon}{item.key}</Text>
                    </TouchableHighlight>
                  )
              }}
            />
          </View>
        </View>
      );
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topBox: {
      flex:3,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems: 'center'
    },
    middleBox: {
      flex:1,
      backgroundColor: 'yellow'
    },
    bottomBox: {
      flex:4,
      backgroundColor: 'orange',
      padding: 20

    },
    circle: {
      width: 160,
      height: 160,
      borderRadius: 160/2,
      backgroundColor: 'green',
      position: 'absolute'
  },
    circleOuter: {
      width: 180,
      height: 180,
      borderRadius: 180/2,
      backgroundColor: 'black'
  },
    listItem: {
      flex:1,
      justifyContent: 'center' 
    },
    text: {
      fontSize: 20,
    }

  });