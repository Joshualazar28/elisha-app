import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const Movieplayscreen = () => {
    return (
        <View>
            <Image style={styles.backimg} source={require("../assest/advrunnsimg.png")} />
            <Image style={styles.backimgshadow} source={require("../assest/shadowmovieplay.png")} />
            <Image style={styles.backicon} source={require("../assest/backicons.png")} />
            <Text style={styles.BladeText}>Blade Runner</Text>
            <Text style={styles.LoremText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim dolore magna aliqua. Ut </Text>
                <LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={styles.playtext}>Play</Text>
            </LinearGradient>

            <LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={styles.linearGradient2}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={styles}>More info</Text>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    backimg: {
        width: 980,
        height: 550,
        position: 'relative',
        top: 0,
    },
    backimgshadow: {
        width: 980,
        height: 550,
        position: "absolute",
        top: 0,
    },
    backicon: {
        position: "absolute",
        top: 40,
        left: 40,
        width: 30,
        height: 30,
    },
    BladeText: {
        position: 'absolute',
        top: 180,
        left: 100,
        fontSize: 40,
        color: 'white',
        // fontWeight:600,
    },
    LoremText: {
        position: 'absolute',
        top: 250,
        left: 100,
        width: 420,
        color: '#E6E6E6',
        fontSize: 15,
        lineHeight: 25,
        // fontWeight:200,

    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 30,
        width: 120,
        position:'absolute',
        top:350,
        left:100,
        borderRadius:50,
    },
    linearGradient2: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 30,
        width: 120,
        position:'absolute',
        top:350,
        left:250,
        borderRadius:50,
    },
    playtext:{

    }
})

export default Movieplayscreen;
