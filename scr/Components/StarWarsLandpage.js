import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
// import tw from '../utils/useTailwind'

const StarWarsLandpage = () => {
    return (
        <View style={styles.starmain}>
            <Text style={styles.StarWarsEpisodeIXtext}>Star Wars : Episode IX</Text>
            <Text style={styles.ActionSCIFit}>Action SCI-Fi | 2h 50 min </Text>
            <Image style={styles.ActionSCIFit13} source={require("../assest/13+.png")} />
            <Image style={styles.ActionSCIFit13starimage} source={require("../assest/starimage.png")} />
            <Text style={styles.Actionsciwhensection}>
                When it’s  discovered that the evil Emperor Palpatine did not die at the hands of darth
                vader, the rebels must race against the clock to find out his whereabouts.
            </Text>
            <Image style={styles.playicon} source={require("../assest/playicons.png")} />


            <LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={styles.watchnowtext}>Watch Now</Text>
            </LinearGradient>

            <Image style={styles.warning} source={require("../assest/warning-2.png")} />

            <LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={styles.linearGradientt}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={styles.watchnowtext}>More info</Text>
            </LinearGradient>




        </View>
    )
}
const styles = StyleSheet.create({
    starmain: {
        position: 'absolute',
         top: 85,
        left: 95,
    },
    StarWarsEpisodeIXtext: {
        color: '#2EAAE0',
        fontSize: 30,
        fontWeight: '700',

    },
    ActionSCIFit: {
        marginTop: 6,
        fontSize: 13,
    },
    ActionSCIFit13: {
        marginLeft: 150,
        marginTop: -18,
        width: 25,
        height: 20,
    },
    ActionSCIFit13starimage: {
        marginLeft: 190,
        marginTop: -20,
        width: 45,
        height: 20,
    },
    Actionsciwhensection: {
        width: 290,
        marginTop: 15,
        lineHeight: 20,

    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 30,
        width: 120,
        marginTop: 15,
    },
    linearGradientt: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 30,
        width: 120,
        marginTop: -30,
        marginLeft:140,
        borderColor: 2

    },
    playicon: {
        position: 'absolute',
        top: 185,
        zIndex: 1,
        width: 10,
        height: 10,
        left: 12,

    },
    warning: {
        position: 'absolute',
        top: 183,
        zIndex: 1,
        width: 15,
        height: 15,
        left: 150,

    },
    watchnowtext: {
        fontSize: 12,
    },

 



})

export default StarWarsLandpage

