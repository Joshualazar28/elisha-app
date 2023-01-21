import { StyleSheet, View,Image,Text } from 'react-native'

import React from 'react'

const Biologysection = () => {
  return (
    <View>
            <Image style={{height:'100%',width:'100%'}} source={require("../assest/filmmaker.png")} />
            <Image style={{ height:'100%',width:'100%',position:'absolute'}} source={require("../assest/filmmakershado.png")} />
            <Image style={{ height:30,width:30,position:'absolute',left:30,top:30}} source={require("../assest/arrow.png")} />
            <Text  style={{color:'rgba(242, 245, 248, 1)',position:'absolute',fontSize:40,top:110,left:100,fontWeight:'600'}} >Biography</Text>
          
            <Text  style={{color:'rgba(242, 245, 248, 1)',position:'absolute',fontSize:15,top:170,left:100,fontWeight:'300',width:390,lineHeight:22}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet proin sit in nunc, leo tortor. Metus fringilla elit donec sed malesuada pulvinar eget faucibus. Lectus est ut potenti consectetur lectus sollicitudin leo, augue massa. Aliquam penatibus amet donec lectus sit commodo lorem. At mollis commodo feugiat turpis eu. </Text>
            <View style={{width:0.5,height:400,backgroundColor:'rgba(158, 158, 159, 1)',position:'absolute',left:45,top:100}}></View>
            <Image style={{ height:40,width:40,position:'absolute',left:25,top:110}} source={require("../assest/biopic.png")} />
            <Image style={{ height:40,width:40,position:'absolute',left:25,top:180}} source={require("../assest/biopic.png")} />
            <Image style={{ height:40,width:40,position:'absolute',left:25,top:250}} source={require("../assest/biopic.png")} />
            <Image style={{ height:40,width:40,position:'absolute',left:25,top:320}} source={require("../assest/biopic.png")} />
            <Image style={{ height:40,width:40,position:'absolute',left:25,top:390}} source={require("../assest/biopic.png")} />
            <Image style={{ height:40,width:40,position:'absolute',left:25,top:450}} source={require("../assest/biopic.png")} />

            
     
    </View>
  )
}

export default Biologysection

const styles = StyleSheet.create({})