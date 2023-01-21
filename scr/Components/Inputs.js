import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style={styles.container}>
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Email"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            <Image style={{ position: 'absolute', left: 20, top: 53, width: 15, height: 15 }} source={require("../assest/Profile.png")} />


            {/* ,message */}
            <TextInput style={{
               position: 'absolute',
               left: 210,
               top: 43,
               height: 35,
               paddingTop: 10,
               paddingLeft: 35,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 10,
               borderRadius: 10
            }}
               underlineColorAndroid="transparent"
               placeholder="Email"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            <Image style={{ position: 'absolute', left: 220, top: 53, width: 15, height: 15 }} source={require("../assest/Message.png")} />
            {/*  */}
            <TextInput style={{
               position: 'absolute',
               left: 210,
               top: 90,
               height: 35,
               paddingTop: 10,
               paddingLeft: 35,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 10,
               borderRadius: 10
            }}
               underlineColorAndroid="transparent"
               placeholder="Password"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            <Image style={{ position: 'absolute', left: 220, top: 100, width: 12, height: 12 }} source={require("../assest/Lock.png")} />


            {/*  */}
            <TextInput style={{
               position: 'absolute',
               left: 10,
               top: 90,
               height: 35,
               paddingTop: 10,
               paddingLeft: 35,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 10,
               borderRadius: 10
            }}
               underlineColorAndroid="transparent"
               placeholder="Password"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />


            <Image style={{ position: 'absolute', left: 20, top: 100, width: 12, height: 12 }} source={require("../assest/Lock.png")} />

            <Text style={{ fontSize: 12, fontWeight: '600', color: 'rgba(255, 255, 255, 1)', position: 'absolute', left: 15, top: 140, fontSize: 15 }}>Tell Us about yourself ?</Text>

            <TextInput style={{
               position: 'absolute',
               left: 10,
               top: 170,
               height: 100,
               paddingBottom: 70,
               paddingLeft: 10,
               width: 580,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 10,
               borderRadius: 10,
               fontWeight: '300'

            }}
               underlineColorAndroid="transparent"
               placeholder="Tell us about yourself...."
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />


            {/* ,message */}
            <TextInput style={{
               position: 'absolute',
               left: 10,
               top: 290,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'
            }}
               underlineColorAndroid="transparent"
               placeholder="What is you’re all time favorite Movie ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            {/*  */}
            <TextInput style={{
               position: 'absolute',
               left: 210,
               top: 290,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'

            }}
               underlineColorAndroid="transparent"
               placeholder="Who is you’re favorite Villain ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />

            <TextInput style={{
               position: 'absolute',
               left: 410,
               top: 290,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'

            }}
               underlineColorAndroid="transparent"
               placeholder="Who is you’re favorite Villain ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />


            <TextInput style={{
               position: 'absolute',
               left: 10,
               top: 340,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'
            }}
               underlineColorAndroid="transparent"
               placeholder="Who is you’re all time favorite Actress ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            {/*  */}
            <TextInput style={{
               position: 'absolute',
               left: 210,
               top: 340,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'

            }}
               underlineColorAndroid="transparent"
               placeholder="Which is you’re favorite Animated Movie ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />

            <TextInput style={{
               position: 'absolute',
               left: 410,
               top: 340,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'

            }}
               underlineColorAndroid="transparent"
               placeholder="What is you’re all time favorite TV-Series ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />


            <TextInput style={{
               position: 'absolute',
               left: 10,
               top: 390,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'
            }}
               underlineColorAndroid="transparent"
               placeholder="Who is you’re all time favorite Producer ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            {/*  */}
            <TextInput style={{
               position: 'absolute',
               left: 210,
               top: 390,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'

            }}
               underlineColorAndroid="transparent"
               placeholder="Who is you’re all time favorite Actor ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />

            <TextInput style={{
               position: 'absolute',
               left: 410,
               top: 390,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'

            }}
               underlineColorAndroid="transparent"
               placeholder="What is you’re all time favorite TV-Series ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />

            <TextInput style={{
               position: 'absolute',
               left: 10,
               top: 440,
               height: 35,
               paddingTop: 10,
               paddingLeft: 10,
               width: 180,
               backgroundColor: 'rgba(90, 108, 234, 0.07)',
               fontSize: 8,
               borderRadius: 10,
               fontWeight: '300'
            }}
               underlineColorAndroid="transparent"
               placeholder="Which is you’re favorite Vintage Movie ?"
               placeholderTextColor="rgba(255, 255, 255, 1)"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />
            <LinearGradient
               colors={['#6168F8', '#00ECD4']}
               style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  height: 30,
                  width: 120,
                 position:'absolute',
                 top:444,
                 left:210,
               }}
               start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
            >
               <Text style={{fontSize:10,fontWeight:'600'}}>Save Changes</Text>
            </LinearGradient>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      // margin: 10,
      marginTop: 20,
      marginLeft: 10,
      height: 35,
      paddingTop: 10,
      paddingLeft: 35,
      width: 180,
      backgroundColor: 'rgba(90, 108, 234, 0.07)',
      fontSize: 10,
      borderRadius: 10
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText: {
      color: 'white'
   }
})