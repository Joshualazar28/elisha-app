import { StyleSheet, View,Image,Text } from 'react-native'
import React from 'react'

const FilmMaker = () => {
  return (
    <View>
            <Image style={{height:'100%',width:'100%'}} source={require("../assest/filmdetials.png")} />
            <Image style={{ height:'100%',width:'100%',position:'absolute'}} source={require("../assest/filmmakeshadow.png")} />
            <Image style={{ height:30,width:30,position:'absolute',left:30,top:30}} source={require("../assest/arrow.png")} />
            <Text  style={{color:'rgba(46, 170, 224, 1)',position:'absolute',fontSize:40,top:150,left:50,fontWeight:'600'}} >Denis Villeneuve</Text>
            <Image style={{ height:15,width:15,position:'absolute',left:30,top:220}} source={require("../assest/right.png")} />
            <Image style={{ height:15,width:15,position:'absolute',left:390,top:250}} source={require("../assest/left.png")} />

            <Text  style={{color:'rgba(255, 255, 255, 1)',position:'absolute',fontSize:17,top:230,left:50,fontWeight:'300'}}>Filmmaking is a chance to live many lifetimes.</Text>
            <Text  style={{color:'rgba(255, 255, 255, 1)',position:'absolute',fontSize:20,top:290,left:50,fontWeight:'800'}}>Why I became a Film Maker?</Text>
            <Text  style={{color:'rgba(255, 255, 255, 1)',position:'absolute',fontSize:15,top:330,left:50,fontWeight:'300',width:390,lineHeight:25}}>Sed ut perspiciatis unde asddsa sddaomnis iste natus error sit voluptatem accusantiumasd as doloremdque laudantium, totam rem aperiam, eaque ipsa quae ab idallo inventore veritatis east quasi architecto beatae vitae dasddicta sunt explicabo. N</Text>
            <Text  style={{color:'rgba(255, 255, 255, 1)',position:'absolute',fontSize:25,top:100,left:550,fontWeight:'800'}}>My Productions</Text>
            

            
     
    </View>
  )
}

export default FilmMaker

const styles = StyleSheet.create({})