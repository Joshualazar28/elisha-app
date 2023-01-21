import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={{
        backgroundColor:'rgba(28, 28, 35, 1)',
        width:1000,
        height:30,
        
    }}>
      <Text style={{
        width:'100%',
        marginLeft:360,
        marginTop:5,
      }}>© 2021 Sonderblu. All Rights Reserved.</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})