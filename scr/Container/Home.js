import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import useTailwind from '../utils/useTailwind'
import StarWarsLandpage from '../Components/StarWarsLandpage'
import Slider from '../Container/Slider'


const Home = () => {
 
    return (
        <View >
            <Image style={styles.landingpage} source={require("../assest/Landingpage.png")} />
            <Header/>
            <Sidebar />
            <StarWarsLandpage />
             <View style={styles.MoveList}>
                <Text style={styles.MoviesText}>Movies</Text>
                <Text style={styles.MoviesText1}>TV Shows</Text>
                <Text style={styles.MoviesText1}>Sports</Text>
                <Text style={styles.MoviesText1}>News</Text>
            </View>
            
            <Text style={styles.Action}>Action</Text>
    {/* <Slider/> */}
        </View>
    )
}
const styles = StyleSheet.create({
    landingpage: {
        width: 1000,
        height: 550,
        position: "absolute",
        top: 0,
        zIndex:-1,
    },
    MoveList: {
        zIndex: 1,
        position: 'absolute',
        top: 310,
        left: 320,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 350,

    },
    MoviesText: {
        fontSize: 26,
        color: 'white',
        fontWeight: "600"
    },
    MoviesText1: {
        fontSize: 15,
        color: "#FFFFFF",
        opacity: 0.6,
        marginTop: 10,
        fontWeight: '500',
    },
    Action:{
        position:'absolute',
        top: 340,
        left: 100,
        color:'#2EAAE0',
        fontSize:25,
        fontWeight:"500",
    }
})

export default Home;
