import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HelpCenterSection from '../Components/HelpCenterSection'
import Footer from '../Components/Footer'

const HelpCenter = () => {
  return (
    <ScrollView>
      <HelpCenterSection/>
      <Footer/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({})

export default HelpCenter
