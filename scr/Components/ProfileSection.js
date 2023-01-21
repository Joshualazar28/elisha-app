import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Inputs from './Inputs'
const ProfileSection = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#011826', width: 1200, height: 700, }}>
        <Image style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 30,
          height: 30,
        }} source={require("../assest/backicons.png")} />
        <Text style={{
          position: "absolute",
          top: 80,
          left: 70,
          fontSize: 25,
          fontWeight: '600',
          color: 'white',
        }}>Profile Settings</Text>

        <Text style={{
          position: "absolute",
          top: 140,
          left: 70,
          fontSize: 15,
          fontWeight: '600',
          color: '#2EAAE0',
        }}>Edit Profile</Text>
        <Text style={{
          position: "absolute",
          top: 140,
          left: 180,
          fontSize: 15,
          fontWeight: '300',
          color: 'rgba(255, 255, 255, 0.5)',
        }}>Accounts</Text>
        <View style={{ width: 850, height: 3.5, backgroundColor: 'rgba(255, 255, 255, 0.42)', position: 'absolute', left: 70, top: 165, borderRadius: 10 }}></View>
        <View style={{ width: 50, height: 2, backgroundColor: 'white', position: 'absolute', left: 70, top: 166, borderRadius: 10 }}></View>

        <View style={{ width:200, height: 270, backgroundColor: 'rgba(255, 255, 255, 0.04)', position: 'absolute', left: 70, top: 200, }}>
        <Image style={{
          position: "absolute",
          top: 30,
          left: 40,
          width: 120,
          height: 120,
        }} source={require("../assest/userlgo.png")} />
              <LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={{ alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                height: 30,
                width: 100,
                marginTop: 170,
              marginLeft:50}}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={{fontSize:12,fontWeight:'500'}}>Upload</Text>
            </LinearGradient>
            <Text style={{fontSize:12,fontWeight:'500',color:'rgba(46, 170, 224, 1)' ,position: 'absolute', left: 50, top: 210,fontSize:20}}>Julian Tape</Text>

        </View>
        <View style={{ width:200, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.04)', position: 'absolute', left: 70, top: 480, }}>
        <Text style={{fontSize:12,fontWeight:'500',color:'rgba(255, 255, 255, 1)' ,position: 'absolute', left: 10, top: 12,fontSize:12}}>Light Mode</Text>

        </View>

        <View style={{width:610,height:530,backgroundColor:'rgba(255, 255, 255, 0.04)',position:'absolute',left:290,top:200}}>
        <Text style={{fontSize:12,fontWeight:'600',color:'rgba(255, 255, 255, 1)' ,position: 'absolute', left: 15, top: 15,fontSize:15}}>Personal Info</Text>
<Inputs/>
        </View>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({})

export default ProfileSection
