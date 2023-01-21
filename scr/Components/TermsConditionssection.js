import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import Header2 from './Header2'
import Sidebar from './Sidebar'
import Footer from './Footer'


const TermsConditionssection = () => {
  return (
    <ScrollView>
    <View style={stylesHelp.helpcentermain}>
      <Header2 />
      <View style={stylesHelp.linediv}></View>
      <Sidebar />
      <Text style={stylesHelp.helpcenter}>Help Center</Text>
      <Text style={stylesHelp.yourevery}>Your every question’s answer about sonder blue  film festival will be here</Text>
      <Text style={stylesHelp.Faqs}>FAQ’s</Text>
      <Text style={stylesHelp.PrivacyTxt}>Privacy Policy</Text>
      <View style={stylesHelp.faqsline}></View>
       <Text style={stylesHelp.Termstext}>Terms & Conditions</Text>
     
      <View style={stylesHelp.mainHeadingsection}>
      <Image style={stylesHelp.mainheadingimg} source={require("../assest/UserLogo1.png")} />
      <Text style={stylesHelp.mainheadingext}>Main heading</Text>
      <Text style={stylesHelp.mainheadingextLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.</Text>
      <View style={stylesHelp.mainheadingline}></View>
      </View>
   

      <View style={stylesHelp.mainHeadingsection2}>
      <Image style={stylesHelp.mainheadingimg} source={require("../assest/UserLogo1.png")} />
      <Text style={stylesHelp.mainheadingext}>Main heading</Text>
      <Text style={stylesHelp.mainheadingextLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.</Text>
      <View style={stylesHelp.mainheadingline}></View>
      </View>

      <View style={stylesHelp.mainHeadingsection3}>
      <Image style={stylesHelp.mainheadingimg} source={require("../assest/UserLogo1.png")} />
      <Text style={stylesHelp.mainheadingext}>Main heading</Text>
      <Text style={stylesHelp.mainheadingextLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper lectus et mauris sed dis scelerisque. Turpis potenti orci scelerisque quam consectetur aliquam a. Consequat sit aliquam elementum risus. Ullamcorper ut morbi dignissim cras sit turpis potenti.</Text>
      <View style={stylesHelp.mainheadingline}></View>
      </View>



    </View>
  </ScrollView>
  )
}
const stylesHelp = StyleSheet.create({
    helpcentermain: {
      backgroundColor: '#011826',
      width: 1200,
      height: 730,
  
    },
    helpcenter: {
      position: 'absolute',
      top: 100,
      left: 100,
      fontSize: 30,
      color: 'white',
  
    },
    yourevery: {
      position: 'absolute',
      top: 160,
      left: 100,
      fontSize: 15,
      color: 'white',
      width: 350,
      lineHeight: 23,
    },
    linediv: {
      width: 1200,
      backgroundColor: "white",
      height: 0.2,
      position: 'absolute',
      top: 60,
    },
    Faqs: {
      position: 'absolute',
      top: 230,
      left: 100,
      fontSize: 18,
      color: 'rgba(255, 255, 255, 0.4)',

  
    },
    faqsline: {
      width: 150,
      height: 1.5,
      backgroundColor: 'rgba(46, 170, 224, 1)',
      position: 'absolute',
      top: 260,
      left: 360,
    },
    PrivacyTxt: {
      position: 'absolute',
      top: 230,
      left: 200,
      fontSize: 18,
      color: 'rgba(255, 255, 255, 0.4)',
    },
    Termstext: {
      position: 'absolute',
      top: 230,
      left: 360,
      fontSize: 18,
      color: 'white',


    },
    Supporttext: {
      position: 'absolute',
      top: 320,
      left: 100,
      fontSize: 10,
      color: 'white',
    },
    FAQsText: {
      position: 'absolute',
      top: 340,
      left: 100,
      fontSize: 16,
      color: 'rgba(46, 170, 224, 1)',
    },
    LoremFAQsText:{
      position: 'absolute',
      top: 360,
      left: 100,
      fontSize: 11,
      color: 'white',
      width:380,
      lineHeight:20,
    
    },
    mainHeadingsection:{
        position:'absolute',
        top:320,
        left:100,
    },
    mainheadingimg:{
        width:20,
        height:20,
    },
    mainheadingext:{
        marginLeft:40,
        marginTop:-20,
        fontSize:15,
        color:'rgba(46, 170, 224, 1)',
    },
    mainheadingextLorem:{
        marginLeft:40,
        marginTop:10,
        fontSize:12,
        width:700,
        lineHeight:18,
    },

    mainheadingline:{
        width:760,
        height:0.7,
        backgroundColor:'rgba(91, 90, 90, 1)',
        marginTop:15 ,
    }, 
    mainHeadingsection2:{
        position:'absolute',
        top:450,
        left:100,
    },
    mainHeadingsection3:{
        position:'absolute',
        top:570,
        left:100,
    },
  
  })
  
export default TermsConditionssection