// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   Dimensions,
//   StyleSheet,
//   ScrollView,
//   View,
// } from 'react-native';

// import Preview from '../Components/Second_Slider/Preview';
// import FlatListSlider from '../Components/Second_Slider/FlatListSlider';
// // import {FlatListSlider} from 'react-native-flatlist-slider';

// export default class extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           image:
//             'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
//           desc: 'Silent Waters in the mountains in midst of Himilayas',
//         },
//         {
//           image:
//             'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//           desc:
//             'Red fort in India New Delhi is a magnificient masterpeiece of humans',
//         },
//         {
//           image:
//             'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//           desc:
//             'Sample Description below the image for representation purpose only',
//         },
//         {
//           image:
//             'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//           desc:
//             'Sample Description below the image for representation purpose only',
//         },
//         {
//           image:
//             'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
//           desc:
//             'Sample Description below the image for representation purpose only',
//         },
//       ],
//     };
//   }

//   render() {
//     const screenWidth = Math.round(Dimensions.get('window').width);
//     return (
//       <SafeAreaView>
//         <ScrollView>
//           <FlatListSlider
//             data={this.state.data}
//             timer={2000}
//             imageKey={'image'}
//             local={false}
//             width={screenWidth}
//             separator={0}
//             loop={true}
//             autoscroll={true}
//             currentIndexCallback={index => console.log('Index', index)}
//             onPress={item => alert(JSON.stringify(item))}
//             indicator
//             animation
//           />
//           <View style={styles.separator} />
//           <FlatListSlider
//             data={this.state.data}
//             width={275}
//             timer={4000}
//             component={<Preview />}
//             onPress={item => alert(JSON.stringify(item))}
//             indicatorActiveWidth={40}
//             contentContainerStyle={styles.contentStyle}
//           />
//           <View style={styles.separator} />
//           <FlatListSlider
//             data={this.state.data}
//             timer={5000}
//             onPress={item => alert(JSON.stringify(item))}
//             indicatorContainerStyle={{position:'absolute', bottom: 20}}
//             indicatorActiveColor={'#8e44ad'}
//             indicatorInActiveColor={'#ffffff'}
//             indicatorActiveWidth={30}
//             animation
//           />
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   separator: {
//     height: 20,
//   },
//   contentStyle: {
//     paddingHorizontal: 16,
//   },
// });
import React, { useState,useRef } from 'react'

import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  CarouselRightArrow,
  CarouselLeftArrow
} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = Array.from({ length: 5 }).map((_, i) => {
  return {
    id: i.toString(),
    image: `https://picsum.photos/1440/2842?random=${i}`,
  };
});

const PlaneSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slideList.length;
  const flatListRef = useRef();

  const renderItem = ({ item }) => {
    const arr = Object.values( item );
    return (
      <View style={styles.imagesContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
    );
  }

  const goNextSlide = () => {
    setCurrent(current < length -1 ? current + 1 : 0);
    flatListRef.current.scrollToIndex({ index: current, animated: true });
  };
  const goPrevSlide = () => {
    setCurrent(current <= length - 1 && current >= 0 ? current -1 : 0);
    flatListRef.current.scrollToIndex({ index: current, animated: true });
  };

  console.log(current)

  return (
    <View style={styles.screen}>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlLeft} onPress={goPrevSlide}>
          <CarouselLeftArrow style={styles.leftArrow} size={28} fill='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlRight} onPress={goNextSlide}>
          <CarouselRightArrow style={styles.rightArrow} size={28} fill='black' />
        </TouchableOpacity>
      </View>
      <FlatList
        data={slideList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={flatListRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imagesContainer: {
    width: windowWidth,
    height: 250
  },
  image: {
    width: '100%',
    height: '100%'
  },
  controls: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    top: 100
  },
  controlLeft: {

  },
  controlRight: {

  }
})

export default PlaneSlider;