import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const SignupQrCode = () => {
    return (
        <ScrollView>
        <View style={{ backgroundColor: 'rgba(1, 24, 38, 1)', width: 1000, height: 600 }}>
            <Image style={{ position: 'absolute', width: 970, height: 600 }} source={require("../assest/qrcode.png")} />
            <Image style={{ position: 'absolute', left: 40, top: 40, width: 35, height: 35 }} source={require("../assest/backicons.png")} />
            <Text style={{ position: 'absolute', left: 80, top: 80, fontSize: 22, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>Follow these steps on your computer or mobile device</Text>
            <Image style={{ position: 'absolute', left: 600, top: 100, width: 230, height: 230 }} source={require("../assest/Qrccode.png")} />

            <View style={{ position: 'absolute' }}>
                <Image style={{ position: 'absolute', left: 80, top: 180, width: 80, height: 28 }} source={require("../assest/borderpic.png")} />
                <Text style={{ position: 'absolute', left: 100, top: 177, fontSize: 12, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>STEP  1</Text>
            </View>
            <Text style={{ position: 'absolute', left: 190, top: 177, fontSize: 14, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>Scan the symbol with your phone’s camera or go to:</Text>
            <Text style={{ position: 'absolute', left: 190, top: 220, fontSize: 23, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>FilmFestival.com/tv9</Text>

            <View style={{ position: 'absolute', top: 100 }}>
                <Image style={{ position: 'absolute', left: 80, top: 180, width: 80, height: 28 }} source={require("../assest/borderpic.png")} />
                <Text style={{ position: 'absolute', left: 100, top: 177, fontSize: 12, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>STEP  2</Text>
                <Text style={{ position: 'absolute', left: 190, top: 177, fontSize: 14, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>Enter sign-in code:</Text>

                <View style={{ width: 220, height: 10, position: 'absolute', left: 190, top: 260, }}>
                    <View style={{ width: 25, height: 1, backgroundColor: 'rgba(241, 13, 204, 1)' }}></View>
                    <Text style={{ position: 'absolute', left: 6, top:-35, fontSize: 20, fontWeight: '700', color: 'white', width: 380, }}>7</Text>

                    <View style={{ width: 25, height: 1, backgroundColor: 'rgba(255, 255, 255, 1)', marginLeft: 40, marginTop: -1 }}></View>
                    <View style={{ width: 25, height: 1, backgroundColor: 'rgba(255, 255, 255, 1)', marginLeft: 80, marginTop: -1 }}></View>
                    <View style={{ width: 25, height: 1, backgroundColor: 'rgba(255, 255, 255, 1)', marginLeft: 120, marginTop: -1 }}></View>
                    <View style={{ width: 25, height: 1, backgroundColor: 'rgba(255, 255, 255, 1)', marginLeft: 160, marginTop: -1 }}></View>
                    <View style={{ width: 25, height: 1, backgroundColor: 'rgba(255, 255, 255, 1)', marginLeft: 200, marginTop: -1 }}></View>
                </View>

            </View>
            <View style={{ position: 'absolute', top: 230  }}>
                <Image style={{ position: 'absolute', left: 80, top: 180, width: 80, height: 28 }} source={require("../assest/borderpic.png")} />
                <Text style={{ position: 'absolute', left: 100, top: 177, fontSize: 12, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>STEP  1</Text>

            </View>
            <Text style={{ position: 'absolute', left: 190, top: 405, fontSize: 14, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>Sign in to FilmFestival. TV will be ready to watch!</Text>
            <View style={{width:700,height:.5,backgroundColor:'rgba(255, 255, 255, 1)',position:'absolute',left:120,top:480}}></View>
            <Text style={{ position: 'absolute', left: 300, top: 490, fontSize: 14, fontWeight: '700', color: 'white', width: 380, lineHeight: 35, }}>or enter your email and password with your remote.</Text>

            <LinearGradient
                            colors={['#6168F8', '#00ECD4']}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                height: 30,
                                width: 150,
                                position: 'absolute',
                                left: 390,
                                top: 530,
                            }}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                        >
                            <Text style={{ fontWeight: '700', fontSize: 10 }}>Sign In with Remote</Text>
                        </LinearGradient>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({})

export default SignupQrCode
