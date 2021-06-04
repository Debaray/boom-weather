import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../utils/brandColors';
import { styles } from './WeatherInfoStyle';
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
        <View style={styles.weatherInfo}>
             <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.texSecondary}>{main}</Text>
        </View>
    )
}

