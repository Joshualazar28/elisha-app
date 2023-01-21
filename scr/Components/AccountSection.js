import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const AccountSection = () => {
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
                    fontWeight: '300',
                    color: 'rgba(255, 255, 255, 0.5)',
                }}>Edit Profile</Text>
                <Text style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#2EAAE0',
                    position: "absolute",
                    top: 140,
                    left: 180,

                }}>Accounts</Text>
                <View style={{ width: 850, height: 3.5, backgroundColor: 'rgba(255, 255, 255, 0.42)', position: 'absolute', left: 70, top: 165, borderRadius: 10 }}></View>
                <View style={{ width: 57, height: 2, backgroundColor: 'white', position: 'absolute', left: 177, top: 166, borderRadius: 10 }}></View>

                <View style={{ width: 120, height: 160, position: 'absolute', top: 190, left: 80, borderWidth: 1, borderColor: 'rgba(0, 236, 212, 1)', borderRadius: 15 }}>
                    <Text style={{ position: 'absolute', left: 35, top: 10, color: '#2EAAE0', fontSize: 15, fontWeight: '600' }}>Status</Text>
                    <Image style={{ width: 40, height: 40, position: 'absolute', left: 35, top: 50 }} source={require("../assest/accounttick.png")} />
                    <Text style={{ position: 'absolute', left: 30, top: 110, color: 'rgba(255, 255, 255, 1)', fontSize: 20, fontWeight: '600' }}>Active</Text>
                </View>

                <View style={{ width: 180, height: 160, position: 'absolute', top: 190, left: 230, borderWidth: 1, borderColor: 'rgba(0, 236, 212, 1)', borderRadius: 15 }}>
                    <Text style={{ position: 'absolute', left: 15, top: 10, color: '#2EAAE0', fontSize: 14, fontWeight: '600' }}>Membership Duration</Text>
                    <Text style={{ position: 'absolute', left: 15, top: 45, color: 'rgba(255, 255, 255, 1)', fontSize: 12, fontWeight: '600' }}>Start Date</Text>
                    <Text style={{ position: 'absolute', left: 15, top: 65, color: 'rgba(255, 255, 255, 1)', fontSize: 12, fontWeight: '400' }}>June 13, 2022</Text>
                    <View style={{ width: 60, height: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)', position: 'absolute', left: 15, top: 90 }}></View>
                    <Text style={{ position: 'absolute', left: 15, top: 100, color: 'rgba(255, 255, 255, 1)', fontSize: 12, fontWeight: '600' }}>Start Date</Text>
                    <Text style={{ position: 'absolute', left: 15, top: 120, color: 'rgba(255, 255, 255, 1)', fontSize: 12, fontWeight: '400' }}>June 13, 2022</Text>
                </View>

                <View style={{ width: 330, height: 160, position: 'absolute', top: 190, left: 440, borderWidth: 1, borderColor: 'rgba(0, 236, 212, 1)', borderRadius: 15 }}>
                    <Text style={{ position: 'absolute', left: 15, top: 10, color: '#2EAAE0', fontSize: 14, fontWeight: '600' }}>Summary of Plan</Text>
                    <Image style={{ width: 50, height: 50, position: 'absolute', left: 35, top: 40 }} source={require("../assest/accountflag.png")} />
                    <Text style={{ position: 'absolute', left: 30, top: 90, color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: '800' }}>Monthly</Text>
                    <View style={{ width: .2, height: 60, position: 'absolute', top: 40, left: 120, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 15 }}></View>


                    <Image style={{ position: 'absolute', left: 135, top: 34, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                    <Text style={{ position: 'absolute', left: 150, top: 30, fontWeight: '400', color: 'white', fontSize: 10 }}>2 devices at a time</Text>

                    <Image style={{ position: 'absolute', left: 135, top: 53, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                    <Text style={{ width: 140, position: 'absolute', left: 150, top: 50, fontWeight: '400', color: 'white', fontSize: 10 }}>Unlimited movie access</Text>

                    <Image style={{ position: 'absolute', left: 135, top: 73, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                    <Text style={{ width: 140, position: 'absolute', left: 150, top: 70, fontWeight: '400', color: 'white', fontSize: 10 }}>Standard & HD Viewing</Text>

                    <Image style={{ position: 'absolute', left: 135, top: 95, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                    <Text style={{ width: 140, position: 'absolute', left: 150, top: 92, fontWeight: '400', color: 'white', fontSize: 10 }}>Standard & HD Viewing</Text>

                    <LinearGradient
                        colors={['rgba(255, 169, 135, 1)', 'rgba(255, 49, 49, 1)']}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                            height: 20,
                            width: 80,
                            marginTop: 125,
                            marginLeft: 90
                        }}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <Text style={{ fontWeight: '700', fontSize: 7 }}>Cancel Membership</Text>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#6168F8', '#00ECD4']}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                            height: 20,
                            width: 60,
                            marginTop: -20,
                            marginLeft: 180
                        }}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <Text style={{ fontWeight: '700', fontSize: 7 }}>Change Plan</Text>
                    </LinearGradient>
                </View>


                <View style={{ width: 330, height: 270, position: 'absolute', top: 370, left: 80, borderWidth: 1, borderColor: 'rgba(0, 236, 212, 1)', borderRadius: 15 }}>
                    <Text style={{ position: 'absolute', left: 15, top: 10, color: '#2EAAE0', fontSize: 14, fontWeight: '600' }}>Member of Spotlight Series</Text>
                    <Image style={{ width: 15, height: 15, position: 'absolute', left: 15, top: 40 }} source={require("../assest/Warning.png")} />
                    <Text style={{ position: 'absolute', left: 40, top: 37, color: 'rgba(255, 255, 255, 1)', fontSize: 15, fontWeight: '500' }}>Not Joined</Text>

                    <View style={{ position: 'absolute', right: 450, top: 70 }}>
                        <Image style={{ position: 'absolute', left: 135, top: 34, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 30, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Text style={{ position: 'absolute', left: 140, top: 1, fontWeight: '600', color: 'white', fontSize: 12 }}>Perks of being in Spotlight Series </Text>

                        <Image style={{ position: 'absolute', left: 135, top: 53, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 50, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>

                        <Image style={{ position: 'absolute', left: 135, top: 73, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 70, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>

                        <Image style={{ position: 'absolute', left: 135, top: 95, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 92, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Image style={{ position: 'absolute', left: 135, top: 117, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 114, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Image style={{ position: 'absolute', left: 135, top: 139, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 135, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Image style={{ position: 'absolute', left: 135, top: 95, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 92, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>


                        <LinearGradient
                            colors={['#6168F8', '#00ECD4']}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                height: 20,
                                width: 90,
                                position: 'absolute',
                                left: 135,
                                top: 160,
                            }}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                        >
                            <Text style={{ fontWeight: '700', fontSize: 7 }}>Become a member</Text>
                        </LinearGradient>
                    </View>
                </View>

                {/*  */}

                <View style={{ width: 330, height: 270, position: 'absolute', top: 370, left: 440, borderWidth: 1, borderColor: 'rgba(0, 236, 212, 1)', borderRadius: 15 }}>
                    <Text style={{ position: 'absolute', left: 15, top: 10, color: '#2EAAE0', fontSize: 14, fontWeight: '600' }}>Member of Film Festival</Text>
                    <Image style={{ width: 15, height: 15, position: 'absolute', left: 15, top: 40 }} source={require("../assest/Warning.png")} />
                    <Text style={{ position: 'absolute', left: 40, top: 37, color: 'rgba(255, 255, 255, 1)', fontSize: 15, fontWeight: '500' }}>Already a Member</Text>

                    <View style={{ position: 'absolute', right: 450, top: 70 }}>
                        <Image style={{ position: 'absolute', left: 135, top: 34, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 30, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Text style={{ position: 'absolute', left: 140, top: 1, fontWeight: '600', color: 'white', fontSize: 12 }}>Perks of being in Spotlight Series </Text>

                        <Image style={{ position: 'absolute', left: 135, top: 53, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 50, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>

                        <Image style={{ position: 'absolute', left: 135, top: 73, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 70, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>

                        <Image style={{ position: 'absolute', left: 135, top: 95, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 92, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Image style={{ position: 'absolute', left: 135, top: 117, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 114, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Image style={{ position: 'absolute', left: 135, top: 139, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 135, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>
                        <Image style={{ position: 'absolute', left: 135, top: 95, width: 8, height: 8, }} source={require("../assest/bluetick.png")} />
                        <Text style={{ position: 'absolute', left: 150, top: 92, fontWeight: '400', color: 'white', fontSize: 10 }}>At vero eos et accusamus et iusto odio </Text>


                        <LinearGradient
                            colors={['#6168F8', '#00ECD4']}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                height: 20,
                                width: 90,
                                position: 'absolute',
                                left: 135,
                                top: 160,
                            }}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                        >
                            <Text style={{ fontWeight: '700', fontSize: 7 }}>Become a member</Text>
                        </LinearGradient>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default AccountSection

const styles = StyleSheet.create({})