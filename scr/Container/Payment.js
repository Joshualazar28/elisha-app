import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import LinearGradient from 'react-native-linear-gradient'
import { useState } from 'react'


const Payment = () => {
  const [bordercolor, setBordercolor] = useState('');
  const ShowBorder = () => {
    var color = ('rgb((255,255,255))');
    setBordercolor(color)
  }
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ScrollView>
      <View>
        <View style={styles.paymentmaindiv}>
          <Header />
          <Sidebar />
          <Image style={styles.paymentshadowdiv} source={require("../assest/shadowmovieplay.png")} />
          <Text style={{ color: 'rgba(46, 170, 224, 1)', fontWeight: "500", position: 'absolute', left: 110, top: 90, fontSize: 27, letterSpacing: 1 }}>Choose your plan.</Text>
          <Image style={{ position: 'absolute', left: 105, top: 150, width: 10, height: 8 }} source={require("../assest/tickimg.png")} />
          <Text style={{ color: 'white', fontWeight: "400", position: 'absolute', left: 120, top: 143, fontSize: 14, }}>No commitments, cancel aytime.</Text>
          <Image style={{ position: 'absolute', left: 105, top: 175, width: 10, height: 8 }} source={require("../assest/tickimg.png")} />
          <Text style={{ color: 'white', fontWeight: "400", position: 'absolute', left: 120, top: 170, fontSize: 14, }}>Everything on Sonder Blue for one low price.</Text>
          <Image style={{ position: 'absolute', left: 105, top: 200, width: 10, height: 8 }} source={require("../assest/tickimg.png")} />
          <Text style={{ color: 'white', fontWeight: "400", position: 'absolute', left: 120, top: 195, fontSize: 14, }}>No ads and no extra fees.</Text>

          <TouchableOpacity>
            <LinearGradient
              onPress={() => { ShowBorder() }}
              colors={['#F60ACB', 'rgba(170, 54, 227, 1)', '#6260FA']}
              style={{ width: 190, height: 260, position: 'absolute', top: 250, left: 170, borderRadius: 20, borderWidth: 2, borderLeftColor: bordercolor, borderRightColor: bordercolor, borderTopColor: bordercolor, borderBottomColor: bordercolor }}
              start={{ x: 1, y: 0.5 }}
              end={{ x: 0.5, y: 1 }}
            >
              <Image style={{ position: 'absolute', left: 70, top: 20, width: 50, height: 50 }} source={require("../assest/paymentlineardivimg.png")} />

              <Text style={{ position: 'absolute', left: 60, top: 70, fontWeight: '800', color: 'white', fontSize: 20 }}>Weekly</Text>
              <Image style={{ position: 'absolute', left: 20, top: 110, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
              <Text style={{ position: 'absolute', left: 35, top: 108, fontWeight: '500', color: 'white', fontSize: 10 }}>1 device at a time</Text>

              <Image style={{ position: 'absolute', left: 20, top: 130, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
              <Text style={{ width: 140, position: 'absolute', left: 35, top: 128, fontWeight: '500', color: 'white', fontSize: 10 }}>Social engagement without streaming</Text>

              <Image style={{ position: 'absolute', left: 20, top: 160, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
              <Text style={{ width: 140, position: 'absolute', left: 35, top: 158, fontWeight: '500', color: 'white', fontSize: 10 }}>Usage of Netflix, Hulu, Prime (must already have account)</Text>
              <Text style={{ width: 140, position: 'absolute', left: 60, top: 190, fontWeight: '900', color: 'white', fontSize: 18 }}>$10.00</Text>
              <Text style={{ width: 140, position: 'absolute', left: 67, top: 210, fontWeight: '500', color: 'white', fontSize: 9 }}>per month</Text>



            </LinearGradient>
          </TouchableOpacity>

          <LinearGradient
            colors={['#F60ACB', 'rgba(170, 54, 227, 1)', '#6260FA']}
            style={{ width: 190, height: 260, position: 'absolute', top: 250, left: 400, borderRadius: 20 }}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0.5, y: 1 }}
          >
            {/* <Image style={{ position: 'absolute', left: 70, top: 20, width: 50, height: 50 }} source={require("../assest/paymentlineardivimg.png")} /> */}

            <Text style={{ position: 'absolute', left: 60, top: 70, fontWeight: '800', color: 'white', fontSize: 20 }}>Monthly</Text>
            <Image style={{ position: 'absolute', left: 20, top: 110, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ position: 'absolute', left: 35, top: 108, fontWeight: '500', color: 'white', fontSize: 10 }}>1 device at a time</Text>

            <Image style={{ position: 'absolute', left: 20, top: 130, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 128, fontWeight: '500', color: 'white', fontSize: 10 }}>Unlimited movie access</Text>

            <Image style={{ position: 'absolute', left: 20, top: 150, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 148, fontWeight: '500', color: 'white', fontSize: 10 }}>Standard viewing</Text>
            <Image style={{ position: 'absolute', left: 20, top: 170, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 168, fontWeight: '500', color: 'white', fontSize: 10 }}>7-day trial</Text>

            <Text style={{ width: 140, position: 'absolute', left: 60, top: 190, fontWeight: '900', color: 'white', fontSize: 18 }}>$10.00</Text>
            <Text style={{ width: 140, position: 'absolute', left: 67, top: 210, fontWeight: '500', color: 'white', fontSize: 9 }}>per month</Text>



          </LinearGradient>

          <LinearGradient
            colors={['#F60ACB', 'rgba(170, 54, 227, 1)', '#6260FA']}
            style={{ width: 190, height: 260, position: 'absolute', top: 250, left: 630, borderRadius: 20 }}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0.5, y: 1 }}
          >
            <Image style={{ position: 'absolute', left: 70, top: 20, width: 50, height: 50 }} source={require("../assest/paymentlineardivimg.png")} />

            <Text style={{ position: 'absolute', left: 30, top: 70, fontWeight: '800', color: 'white', fontSize: 20 }}>Entire Festival</Text>
            <Image style={{ position: 'absolute', left: 20, top: 110, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ position: 'absolute', left: 35, top: 108, fontWeight: '500', color: 'white', fontSize: 10 }}>2 device at a time</Text>

            <Image style={{ position: 'absolute', left: 20, top: 130, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 128, fontWeight: '500', color: 'white', fontSize: 10 }}>Unlimited movie access</Text>

            <Image style={{ position: 'absolute', left: 20, top: 150, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 148, fontWeight: '500', color: 'white', fontSize: 10 }}>Standard & HD Viewing</Text>
            <Image style={{ position: 'absolute', left: 20, top: 170, width: 10, height: 10, }} source={require("../assest/paymenttick.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 168, fontWeight: '500', color: 'white', fontSize: 10 }}>7-day trial</Text>

            <Text style={{ width: 140, position: 'absolute', left: 60, top: 190, fontWeight: '900', color: 'white', fontSize: 18 }}>$10.00</Text>
            <Text style={{ width: 140, position: 'absolute', left: 67, top: 210, fontWeight: '500', color: 'white', fontSize: 9 }}>per month</Text>




          </LinearGradient>

          <Text style={{ color: 'white', fontWeight: "400", position: 'absolute', left: 120, top: 595, fontSize: 14, width: 290, lineHeight: 20, }}>All pricing in USD and renews automatically unless cancelled. Event completions count towards your total page views per month. If you need more than 50 sites, get in touch for pricing.</Text>

          <View style={{ width: 800, height: 220, position: 'absolute', top: 750, borderRadius: 20, left: 100, borderWidth: 1, borderColor: 'white' }}>
            <Text style={{ position: 'absolute', left: 20, top: 20, fontWeight: '600', color: 'white', fontSize: 16 }}>All plans include:</Text>
            <Image style={{ position: 'absolute', left: 20, top: 60, width: 10, height: 10, }} source={require("../assest/tickimg.png")} />
            <Text style={{ position: 'absolute', left: 35, top: 57, fontWeight: '500', color: 'white', fontSize: 10 }}>Good Video Quality</Text>

            <Image style={{ position: 'absolute', left: 20, top: 80, width: 10, height: 10, }} source={require("../assest/tickimg.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 78, fontWeight: '500', color: 'white', fontSize: 10 }}>Unlimited movie access</Text>

            <Image style={{ position: 'absolute', left: 20, top: 98, width: 10, height: 10, }} source={require("../assest/tickimg.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 98, fontWeight: '500', color: 'white', fontSize: 10 }}>720 Resolution</Text>

            <Image style={{ position: 'absolute', left: 20, top: 120, width: 10, height: 10, }} source={require("../assest/tickimg.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 35, top: 118, fontWeight: '500', color: 'white', fontSize: 10 }}>Cancel anytime</Text>

            <Image style={{ position: 'absolute', left: 200, top: 60, width: 10, height: 10, }} source={require("../assest/tickimg.png")} />
            <Text style={{ position: 'absolute', left: 215, top: 57, fontWeight: '500', color: 'white', fontSize: 10 }}>Privacy lay compliance</Text>

            <Image style={{ position: 'absolute', left: 200, top: 80, width: 10, height: 10, }} source={require("../assest/tickimg.png")} />
            <Text style={{ width: 140, position: 'absolute', left: 215, top: 78, fontWeight: '500', color: 'white', fontSize: 10 }}>Join unlimited groups</Text>

            <Image style={{ position: 'absolute', left: 200, top: 98, width: 10, height: 10, }} source={require("../assest/tickimg.png")} />
            <Text style={{ width: 340, position: 'absolute', left: 215, top: 98, fontWeight: '500', color: 'white', fontSize: 10 }}>You can watch on Phone | Tablet | Computer | TV</Text>

            <View style={{ width: 800, height: 1, backgroundColor: 'rgba(149, 146, 146, 1)', position: 'absolute', top: 140, }}></View>
            <SafeAreaView>

              <TextInput
                style={{
                  backgroundColor: 'grey',
                  borderRadius: 10,
                  placeholderTextColor: 'white',
                  height: 30,
                  paddingTop: 5,
                  width: 250,
                  marginTop: 150,
                  placeholderTextColor: 'white',
                  fontWeight: '700',
                  paddingLeft: 10,
                  marginLeft: 10,
                  paddingHorizontal:10,

                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Have you the promo code?"
                keyboardType="default"

              />
            </SafeAreaView>

            <LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={styles.linearGradientt}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={{fontWeight:'700',fontSize:10}}>Apply</Text>
            </LinearGradient>
            <Text style={{ width: 340, position: 'absolute', left: 650, top: 160, fontWeight: '500', color: 'rgba(149, 146, 146, 1)', fontSize: 12 }}>Discounted Price</Text>
            <Text style={{ width: 340, position: 'absolute', left: 650, top: 180, fontWeight: '500', color: 'white', fontSize: 17 }}>Sub total:</Text>
            <Text style={{ width: 340, position: 'absolute', left: 730, top: 175, fontWeight: '800', color: 'white', fontSize: 23 }}>$14</Text>
            
          </View>
          <LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={styles.linearGradienttnext}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={{fontWeight:'700',fontSize:15}}>Next</Text>
            </LinearGradient>

        </View>
      </View>





    </ScrollView>
  )
}
const styles = StyleSheet.create({
  paymentmaindiv: {
    backgroundColor: 'rgba(1, 24, 38, 1) ',
    width: 1200,
    height: 1030,
  },
  paymentshadowdiv: {
    position: 'absolute',
    zIndex: -1,

  },
  input: {
    height: 30,
    width: 250,
    position: 'absolute',
    top: 150,
    left: 20,
    backgroundColor: 'grey',
    borderRadius: 10,
    placeholderTextColor: 'white',
    zIndex: 1,



  },
  linearGradientt: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 30,
    width: 80,
    marginTop: -30,
    marginLeft:280,
    borderColor: 2,
    },

    linearGradienttnext: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      height: 35,
      width: 100,
      position:'absolute',
      top:980,
      left:800,
      borderColor: 2,
      
  
  },
})

export default Payment
