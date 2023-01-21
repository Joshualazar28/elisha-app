import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import RatingSliderCom from '../Components/RatingSlider'
import LinearGradient from 'react-native-linear-gradient'

const moviemoreinfosection = () => {
  return (
    <ScrollView>
      <View style={{ width: 1000, height: 700 }}>
        <Image style={{ width: 1000, height: 700 }} source={require("../assest/moreinnfomiainpic.png")} />
        <Image style={styles.backimgshadow} source={require("../assest/shadowmovieplay.png")} />
        <Image style={styles.backicon} source={require("../assest/backicons.png")} />
        <Text style={{ position: 'absolute', left: 50, top: 80, }}>INFO</Text>
        <Text style={{ position: 'absolute', left: 50, top: 120, fontSize: 25, fontWeight: '800' }}>Blade Runner</Text>
        <Text style={{ position: 'absolute', left: 50, top: 155, fontSize: 15, fontWeight: '400' }}>Rating summary</Text>
        <Text style={{ position: 'absolute', left: 50, top: 185, fontSize: 17, fontWeight: '600' }}>No.</Text>
        <Text style={{ position: 'absolute', left: 80, top: 179, fontSize: 23, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>2</Text>
        <Text style={{ position: 'absolute', left: 97, top: 185, fontSize: 17, fontWeight: '600' }}>in group 1</Text>
        <Text style={{ position: 'absolute', left: 97, top: 185, fontSize: 17, fontWeight: '500' }}>in group 1</Text>
        <Text style={{ position: 'absolute', left: 50, top: 210, fontSize: 14, fontWeight: '400' }}>Votes</Text>
        <Text style={{ position: 'absolute', left: 90, top: 210, fontSize: 14, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>332</Text>
        <Text style={{ position: 'absolute', left: 50, top: 230, fontSize: 14, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>Short Films</Text>
        <Text style={{ position: 'absolute', left: 300, top: 230, fontSize: 22, fontWeight: '600', color: 'rgba(0, 236, 212, 1)' }}>25</Text>
        <Text style={{ position: 'absolute', left: 340, top: 235, fontSize: 16, fontWeight: '600', color: 'white' }}>People Watching</Text>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 270, }}>
          <Text>Director</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 300, }}>
          <Text>Tom Hanks Best Actor</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 330, }}>
          <Text>Iliana Best Actress</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 360, }}>
          <Text>Joh Supporting Actor</Text>
          <RatingSliderCom />

        </View>

        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 390, }}>
          <Text>Ayelet Zurer Actress</Text>
          <RatingSliderCom />

        </View>
        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 420, }}>
          <Text>Supporting Actress</Text>
          <RatingSliderCom />

        </View>
        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 450, }}>
          <Text>Sound</Text>
          <RatingSliderCom />

        </View>
        <View style={{ width: 400, height: 30, position: 'absolute', left: 50, top: 480, }}>
          <Text>Writer</Text>
          <RatingSliderCom />

        </View>
        <Text style={{ position: 'absolute', left: 330, top: 510, fontSize: 20, fontWeight: '800' }}>OverAll </Text>
        <Text style={{ position: 'absolute', left: 420, top: 510, fontSize: 23, fontWeight: '800', color: 'rgba(46, 170, 224, 1)' }}>5</Text>

        <Text style={{ position: 'absolute', left: 50, top: 540, fontSize: 16, fontWeight: '600' }}>Recent comments </Text>
{/*  */}
{/* <ScrollView> */}
      <View style={{width:400,height:120,position:'absolute',top:570,left:50}}>

      <View style={{width:370,height:110,position:'absolute',top:5,left:10}}>
      <Image style={{width:30,height:30,borderRadius:50}} source={require("../assest/userlogo.png")}/>
      <Text style={{ position: 'absolute', left: 40, top: 5, fontSize: 10, fontWeight: '800',color:'white' }}>Andy Jones</Text>
      <Text style={{ position: 'absolute', left: 40, top:19, fontSize: 6, fontWeight: '300',color:'white' }}>03 May, 2022 . 12:54 AM</Text>
      <Text style={{ position: 'absolute', left: 40, top: 30, fontSize: 10, fontWeight: '400',color:'white',width:340 }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender</Text>
      </View>
      </View>
      {/* </ScrollView> */}

      <Text style={{ position: 'absolute', left: 600, top:150, fontSize: 17, fontWeight: '500',color:'white' }}>Cast & Crew</Text>
      <View  style={{position:'absolute',width:300,height:480,left:600,top:150,}}>

      <View style={{position:'absolute',top:30,width:280,height:70}}>
      <Image style={{width:100,height:70,position:'absolute'}} source={require("../assest/cast.png")}/>
      <Text style={{ position: 'absolute', left: 110, top:5, fontSize: 10, fontWeight: '500',color:'white' }}>Director: Mark</Text>
      <Text style={{ position: 'absolute', left: 110, top:20, fontSize: 9, fontWeight: '400',color:'white',width:170,lineHeight:13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in a erat suspendisse. a erat suspendisse. </Text>
      </View>


      <View style={{position:'absolute',top:110,width:280,height:70}}>
      <Image style={{width:100,height:70,position:'absolute'}} source={require("../assest/cast.png")}/>
      <Text style={{ position: 'absolute', left: 110, top:5, fontSize: 10, fontWeight: '500',color:'white' }}>Director: Mark</Text>
      <Text style={{ position: 'absolute', left: 110, top:20, fontSize: 9, fontWeight: '400',color:'white',width:170,lineHeight:13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in a erat suspendisse. a erat suspendisse. </Text>
      </View>

      <View style={{position:'absolute',top:190,width:280,height:70}}>
      <Image style={{width:100,height:70,position:'absolute'}} source={require("../assest/cast.png")}/>
      <Text style={{ position: 'absolute', left: 110, top:5, fontSize: 10, fontWeight: '500',color:'white' }}>Director: Mark</Text>
      <Text style={{ position: 'absolute', left: 110, top:20, fontSize: 9, fontWeight: '400',color:'white',width:170,lineHeight:13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in a erat suspendisse. a erat suspendisse. </Text>
      </View>

      <View style={{position:'absolute',top:270,width:280,height:70}}>
      <Image style={{width:100,height:70,position:'absolute'}} source={require("../assest/cast.png")}/>
      <Text style={{ position: 'absolute', left: 110, top:5, fontSize: 10, fontWeight: '500',color:'white' }}>Director: Mark</Text>
      <Text style={{ position: 'absolute', left: 110, top:20, fontSize: 9, fontWeight: '400',color:'white',width:170,lineHeight:13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in a erat suspendisse. a erat suspendisse. </Text>
      </View>

      <View style={{position:'absolute',top:350,width:280,height:70}}>
      <Image style={{width:100,height:70,position:'absolute'}} source={require("../assest/cast.png")}/>
      <Text style={{ position: 'absolute', left: 110, top:5, fontSize: 10, fontWeight: '500',color:'white' }}>Director: Mark</Text>
      <Text style={{ position: 'absolute', left: 110, top:20, fontSize: 9, fontWeight: '400',color:'white',width:170,lineHeight:13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in a erat suspendisse. a erat suspendisse. </Text>
      </View>
</View>
<LinearGradient
                colors={['#6168F8', '#00ECD4']}
                style={{ 
                  alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                height: 30,
                width: 150,
                position:'absolute',
                top:630,
                left:730,
                }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={{ fontSize: 12}}>Go watch Movie</Text>
            </LinearGradient>
{/*  */}
      </View>

    </ScrollView>

  )
}
const styles = StyleSheet.create({
  backimgshadow: {
    width: 980,
    height: 700,
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

export default moviemoreinfosection
