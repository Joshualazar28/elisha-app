import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StarWarsEpisodeIX = () => {
    return (
        <View style={styles.starmain}>
            <Text style={styles.StarWarsEpisodeIXtext}>Star Wars : Episode IX</Text>
            <Text style={styles.ActionSCIFit}>Action SCI-Fi | 2h 50 min </Text>

        </View>
    )
}
const styles = StyleSheet.create({
    starmain: {
        position: 'absolute',
        borderWidth: 1,
        top: 85,
        left: 95,
    },
    StarWarsEpisodeIXtext: {
        color: '#2EAAE0',
        fontSize: 30,
        fontWeight: '700'
    },
    ActionSCIFit: {
        fontWeight: 300,
        fontSize: 20,
        color: '#E9EFF4',
        paddingTop: 20,
    }
})

export default StarWarsEpisodeIX
