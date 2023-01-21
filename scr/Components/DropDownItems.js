 import React, { Component } from 'react';
 import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
 import DropDownItem from 'react-native-drop-down-item';
import { BounceInDown } from 'react-native-reanimated';
 
 const IC_ARR_DOWN = require('../assest/down.png');
 const IC_ARR_UP = require('../assest/up.png');
 

 export default class DropDownItems extends Component {
   state = {
     contents: [
       {
         title: 'Is there any free trail on film festival?',
         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
       },
       {
        title: 'Is there any free trail on film festival?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
      },
      {
        title: 'Is there any free trail on film festival?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
      },
      {
        title: 'Is there any free trail on film festival?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
      },
      {
        title: 'Is there any free trail on film festival?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
      },
      {
        title: 'Is there any free trail on film festival?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa amet, et diam tempus, quis lacinia. Accumsan lectus turpis tellus sit viverra pulvinar.',
      },
     ],
   };
 
   render() {
     return (
       <View style={styles.container}>
         <ScrollView style={{ alignSelf: 'stretch' }}>
           {
             this.state.contents
               ? this.state.contents.map((param, i) => {
                 return (
                   <DropDownItem
                     key={i}
                     
                     contentVisible={false}
                     invisibleImage={IC_ARR_DOWN}
                     visibleImage={IC_ARR_UP}
                     header={
                       <View style={styles.header}>
                         <Text style={{
                           fontSize: 12,
                           color: 'rgba(255, 255, 255, 1)',
                         }}>{param.title}</Text>
                       </View>
                     }
                   >
                     <Text style={[
                       styles.txt,
                       {
                         fontSize: 10,
                         color:'rgba(203, 202, 206, 1)',
                        //  borderWidth:2,
                        //  borderColor:'red',
                         lineHeight:15,

                         
                       },
                     ]}>
                       {param.body}
                     </Text>
                     <View style={{width:370,height:1,backgroundColor:'rgba(91, 90, 90, 1)',marginTop:5}}></View>
                   </DropDownItem>
                 );
               })
               : null
           }
           <View style={{ height: 96 }}/>
         </ScrollView>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     position:'absolute',
     left:530,
     top:330,
     width:400,
     
   },
   header: {
     width: '100%',
     paddingVertical: 8,
     paddingHorizontal: 12,
     flexWrap: 'wrap',
     flexDirection: 'row',
     alignItems: 'center',
   },
   headerTxt: {
     fontSize: 12,
    //  color: 'red',
     marginRight: 60,
     flexWrap: 'wrap',
   },
   txt: {
     fontSize: 14,
   },
 });