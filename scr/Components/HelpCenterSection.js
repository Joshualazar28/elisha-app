import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header2 from '../Components/Header2'
import Sidebar from '../Components/Sidebar'
import DropDownItems from './DropDownItems'


const HelpCenterSection = () => {
  return (
    <ScrollView>
      <View style={stylesHelp.helpcentermain}>
        <Header2 />
        <View style={stylesHelp.linediv}></View>
        <Sidebar />
        <Text style={stylesHelp.helpcenter}>Help Center</Text>
        <Text style={stylesHelp.yourevery}>Your every question’s answer about sonder blue  film festival will be here</Text>
        <Text style={stylesHelp.Faqs}>FAQ’s</Text>
        <View style={stylesHelp.faqsline}></View>
        <Text style={stylesHelp.PrivacyTxt}>Privacy Policy</Text>
        <Text style={stylesHelp.Termstext}>Terms & Conditions</Text>
        <Text style={stylesHelp.Supporttext}>Support</Text>
        <Text style={stylesHelp.FAQsText}>FAQ’s</Text>
        <Text style={stylesHelp.LoremFAQsText}>
          Lorem ipsum dolor sit amet, consec asdq tetur
          adipiscing elit. Ultricies semper lectus et
          mauris sedasd dsa dis scealerisque. Turpis
          potenti orci asd asd ascselerisque d quam
          consectetur aliquam aasa. Consequat sit
          aliquamas welementum risudds. Ullamcorper
          ut morbi dignissim sad as crdas sd das
          sit turpis potenti.asd asdhasjd ioasjd
          das ioajsd sd ascselerisque quam consectetur
          aliquam aasa. aliquamas welementum risudds.
          Ullamcorper ut morbi dignissim sad as crdas
          sd das sit turpis potenti.asd asdhasjd ioasjd
          das ioajsd sd ascselerisque quam consectetur
          aliquam aasa. aliquamas welementum risudds.
          Ullamcorper ut morbi dignissim sad as crdas
          sd das sit turpis potenti.asd asdhasjd ioasjd </Text>

      <DropDownItems/>

     





      </View>
    </ScrollView>
  )
}
const stylesHelp = StyleSheet.create({
  helpcentermain: {
    backgroundColor: '#011826',
    width: 1200,
    height: 600,

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
    color: 'white',

  },
  faqsline: {
    width: 45,
    height: 1.5,
    backgroundColor: 'rgba(46, 170, 224, 1)',
    position: 'absolute',
    top: 260,
    left: 100,
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
    color: 'rgba(255, 255, 255, 0.4)',
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

})

export default HelpCenterSection
