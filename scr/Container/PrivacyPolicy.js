import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrivacyPolicySection from '../Components/PrivacyPolicySection'
import Footer from '../Components/Footer'


const PrivacyPolicy = () => {
  return (
    <ScrollView>
        <View>
      
<PrivacyPolicySection/>
<Footer/>

        </View>
        </ScrollView>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})