import React, { useState } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';

export default function RatingSlider() {

    const [range, setRange] = useState('0%');


    return (
        <View>
            <Text style={{ fontSize: 15, fontWeight: '600', color: 'white', position: 'absolute', left: 400, top: -20 }}>{range}</Text>


            <Slider
                style={{ width: 250, position: 'absolute', top: -20, left: 150, }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor='rgba(5, 117, 230, 1)'
                maximumTrackTintColor='#000'
                thumbTintColor='rgba(0, 236, 212, 1)'
                value={0}
                onValueChange={value => {
                    setRange(parseInt(value *   5))
                }}
            />
        </View>
    );
}

const styleSheet = StyleSheet.create({


});