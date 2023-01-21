// import React, { useRef, useState } from 'react';
// import { View, Text, Dimensions, Button } from 'react-native';
// import CarouselItem from '../Slider/CarouselItem';
// import CustomPaging from './CustomPaging';
// import styles from '../Slider/style';
// import Carousel from 'react-native-snap-carousel';

// const { width } = Dimensions.get('window');
// export default function CustomSlider({ data }) {
//   const carouselRef = useRef(null);
//   const [slideIndex, setSlideIndex] = useState(0);

//   const settings = {
//     onSnapToItem: (index) => setSlideIndex(index),
//     sliderWidth: 820,
//     sliderHeight: 50,
//     itemWidth:280,
//     data: data,
//     renderItem: CarouselItem,
//     hasParallaxImages: true,
//   };
//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={carouselRef}
//         {...settings}
//         /*         onSnapToItem={(index) => setSlideIndex(index)} */
//           loop={true}
//         autoplay={false}
//         lockScrollWhileSnapping={true} 
//       />
//       <CustomPaging data={data} activeSlide={slideIndex} />
      
    
//     </View>
//   );
// }
