// import React from 'react';
// import { ParallaxImage } from 'react-native-snap-carousel';
// import { View, Text, Pressable, SafeAreaView } from 'react-native';
// import styles from '../Slider/style';

// function CarouselItem({ item, index }, parallaxProps) {
//   console.log('item', item);
//   return (
//     <Pressable onPress={() => alert('Image description:' + item.source)}>
//       <SafeAreaView style={styles.item}>
//         <ParallaxImage
//           AnimatedImageComponent={{ uri: item.source }}
//           showSpinner={true}
//           containerStyle={styles.imageContainer}
//           style={styles.image}
//           {...parallaxProps}
//         />
//         <Text style={styles.title} numberOfLines={2}>
//           {item.title}
//         </Text>
//       </SafeAreaView>
//     </Pressable>
//   );
// }

// export default CarouselItem;