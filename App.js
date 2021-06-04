import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from 'react-native-dotenv';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [])

  async function load() {
    setCurrentWeather(null);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app.');
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weatherUrl)

      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
        alert(result);
      } else {
        setErrorMessage(result.message)
        alert(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
