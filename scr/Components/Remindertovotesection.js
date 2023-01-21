import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Remindertovotesection = () => {
  return (
    <View   style={{ backgroundColor: 'rgba(1, 24, 38, 1)', width: 1000, height: 600 }}>
    <Image style={{ position: 'absolute', width: 970, height: 600 }} source={require("../assest/qrcode.png")} />
    <Image style={{ position: 'absolute', left: 40, top: 40, width: 35, height: 35 }} source={require("../assest/backicons.png")} />
    <Text style={{ position: 'absolute', left: 100, top: 140,color:'rgba(255, 255, 255, 1)',fontSize:23,fontWeight:'500',width:300}}>Select The Movies 
    
    You Want To Vote</Text>
    </View>
  )
}

export default Remindertovotesection

const styles = StyleSheet.create({})