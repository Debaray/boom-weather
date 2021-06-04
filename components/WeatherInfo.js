import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
        name,
    } = currentWeather;

    const { icon, main, description } = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    
    return (
        <View>
            <Text>This is weather info</Text>
        </View>
    )
}

