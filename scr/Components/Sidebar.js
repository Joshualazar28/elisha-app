import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createAppContainer } from "react-navigation"
import { createDrawerNavigtor } from "react-navigation-drawer"
import { multiply } from 'react-native-reanimated'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const OpenSidebar = () => {
    if (open == false) {
      setOpen(true)
    } else {
      setOpen(false)

    }
  }

  return (
    <View>
      <View style={styles.sidemain}>
        <TouchableOpacity
          onPress={() => { OpenSidebar() }}>
          <Image

            style={styles.sidebarIcons} source={require("../assest/home.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { OpenSidebar() }}>
          <Image style={styles.sidebarIcons} source={require("../assest/search-normal.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { OpenSidebar() }}>
          <Image style={styles.sidebarIcons} source={require("../assest/Mask.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { OpenSidebar() }}>
          <Image style={{ width: 25, height: 20, marginLeft: 20 }} source={require("../assest/sharing.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { OpenSidebar() }}>
          <Image style={styles.sidebarIcons} source={require("../assest/setting.png")} />
        </TouchableOpacity>
      </View>
      {open == true &&
        <View style={styles.sidebar2}>
          <Image style={styles.Sidebarshadowimg} source={require("../assest/Sidebarshadowimg.png")} />
          <Text style={styles.Hometext}>Home</Text>
          <Text style={styles.SearchText}>Search</Text>
          <Text style={styles.SpotlightText}>Spotlight</Text>
          <Text style={styles.live}>live</Text>
          <Text style={styles.settings}>settings</Text>

        </View> }
        
    </View>
  )
}


const styles = StyleSheet.create({
  sidemain: {
    position: 'absolute',
    top: 80,
    // backgroundColor:'#011826',
    width: 95,
    height: 300,
    justifyContent: 'space-evenly',

  },
  sidebarIcons: {
    width: 25,
    height: 25,
    marginLeft: 20,

  },
  sidebarli: {
    position: 'absolute',
    top: -15,
    left: 50,
    backgroundColor: 'red',
    width: 65,
    height: 300,
    justifyContent: 'space-evenly',
    zIndex: 1,

  },
  sidebar2: {
    position: 'absolute',
    top: 80,
    left: 50,
    width: 85,
    height: 300,
    // backgroundColor: '#011826',
    zIndex: 1,

  },
  Sidebarshadowimg:{
    position: 'absolute',
    top: 0,
    left: 20,
    width: 110,
    height: 300,
    borderWidth:1,
  },
  Hometext:{
    color:'rgba(43, 161, 212, 1)',
    fontSize:25,
    position:'absolute',
    top:25,
    left:20,
   
  },
  SearchText:{
    color:'rgba(43, 161, 212, 1)',
    fontSize:25,
    position:'absolute',
    top:80,
    left:20,
  },
  SpotlightText:{
    color:'rgba(43, 161, 212, 1)',
    fontSize:25,
    position:'absolute',
    top:135,
    left:20,
    width:200,
  },
  live:{
    color:'rgba(43, 161, 212, 1)',
    fontSize:25,
    position:'absolute',
    top:190,
    left:20,
    width:200,
  },
  settings:{
    color:'rgba(43, 161, 212, 1)',
    fontSize:25,
    position:'absolute',
    top:240,
    left:20,
    width:200,
  }

})

export default Sidebar

