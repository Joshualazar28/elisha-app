import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import RatingSliderCom from '../Components/RatingSlider'
import LinearGradient from 'react-native-linear-gradient'
import UselessTextInputMultiline from './UselessTextInputMultiline'

const MoveRating1Section = () => {
  return (
    <ScrollView>
      <View style={{ width: 1000, height: 550 }}>
        <Image style={{ width: 1000, height: 550 }} source={require("../assest/rating1.png")} />
        <Image style={styles.backimgshadow} source={require("../assest/shadowmovieplay.png")} />
        <Image style={styles.backicon} source={require("../assest/backicons.png")} />

        <Text style={{ position: 'absolute', left: 50, top: 100, fontSize: 25, fontWeight: '500' }}>Vote for</Text>
        <Text style={{ position: 'absolute', left: 150, top: 100, fontSize: 25, fontWeight: '500',color:'rgba(46, 170, 224, 1)' }}>Interstellar</Text>

     
        <Text style={{ position: 'absolute', left: 50, top: 155, fontSize: 17, fontWeight: '600' }}>No.</Text>
        <Text style={{ position: 'absolute', left: 80, top: 150, fontSize: 23, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>2</Text>
        <Text style={{ position: 'absolute', left: 97, top: 155, fontSize: 17, fontWeight: '600' }}>in group 1</Text>
        <Text style={{ position: 'absolute', left: 50, top: 180, fontSize: 14, fontWeight: '400' }}>Votes</Text>
        <Text style={{ position: 'absolute', left: 90, top: 180, fontSize: 14, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>332</Text>
        <Text style={{ position: 'absolute', left: 50, top: 200, fontSize: 14, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>Short Films</Text>
        <Text style={{ position: 'absolute', left: 300, top: 200, fontSize: 22, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>25</Text>
        <Text style={{ position: 'absolute', left: 330, top: 205, fontSize: 16, fontWeight: '600', color: 'white' }}>People Watching</Text>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 250, }}>
          <Text>Director</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 280, }}>
          <Text>Tom Hanks Best Actor</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 310, }}>
          <Text>Iliana Best Actress</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 340, }}>
          <Text>Joh Supporting Actor</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 370, }}>
          <Text>Ayelet Zurer Actress</Text>
          <RatingSliderCom />

        </View>
        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 400, }}>
          <Text>Supporting Actress</Text>
          <RatingSliderCom />

        </View>
        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 430, }}>
          <Text>Sound</Text>
          <RatingSliderCom />

        </View>
        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 460, }}>
          <Text>Writer</Text>
          <RatingSliderCom />

        </View>
        <Text style={{ position: 'absolute', left: 350, top: 490, fontSize: 20, fontWeight: '800' }}>OverAll </Text>
        <Text style={{ position: 'absolute', left: 445, top: 485, fontSize: 23, fontWeight: '800', color: 'rgba(46, 170, 224, 1)' }}>5</Text>

        <Text style={{ position: 'absolute', left: 600, top: 250, fontSize: 16, fontWeight: '600', color: 'white' }}>What  do you think about this film?</Text>

        <UselessTextInputMultiline/>
        <Text style={{ position: 'absolute', left: 850, top: 440, fontSize: 8, fontWeight: '200', color: 'rgba(255, 255, 255, 0.49)' }}>0/200 Maximum</Text>
   


      
  
<LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={{ 
                  alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                height: 30,
                width: 100,
                position:'absolute',
                top:490,
                left:820,
                }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={{ fontSize: 12,fontWeight:'600'}}>Vote</Text>
            </LinearGradient>
{/*  */}
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
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
})


export default MoveRating1Section
