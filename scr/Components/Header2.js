import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

const Header2 = () => {
  return (
    <View style={styles.header}>

    <Image style={styles.headershadowimg} source={require("../assest/headershadowimg.png")} />
    <Image style={styles.logoimage} source={require("../assest/headerlogo.png")} />
    <View style={styles.flexuseinheader}>
    <Image style={styles.searchnormal} source={require("../assest/search-normal.png")} />
    <Image style={styles.searchnormal} source={require("../assest/notification.png")} />
   <View style={{width:90,flexDirection:'row',justifyContent:'space-between'}}>
    <Text>Shahzaib</Text>
    <Image style={styles.searchnormal} source={require("../assest/user.png")} />
    </View>
    </View>
</View>
  )
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        position: 'absolute',
        top: 0,
        width: 1000,
        borderBottomColor:'red',
        zIndex:1,

    },
    header_text:{
        fontSize:10,
        color:'white',
        marginTop:3,
        marginLeft:20,
    },
    logoimage: {
        width: 90,
        height: 40,
        marginLeft: 30,
        marginTop: 10,
        zIndex: 1000,
        position: "absolute",

    },
    headershadowimg: {
        height: 60,
        position: 'absolute',
        top: 0,
        width: 1000,
        zIndex: 1,
    },
    flexuseinheader:{
        flexDirection: 'row',
        width:200,
        justifyContent: 'space-between',
        marginLeft:750,
        marginTop:20,
        zIndex:1,
       
    },
    searchnormal:{
        width: 20,
        height: 20,
        zInde:1,
        
       
    }

})
export default Header2

