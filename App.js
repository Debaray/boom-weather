import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from 'react-native-dotenv';

import WeatherInfo from './components/WeatherInfo'
import UnitsPicker from './components/UnitsPicker'
import ReloadIcon from './components/ReloadIcon'
import WeatherDetails from './components/WeatherDetails'

import { colors } from './utils/brandColors';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [unitsSystem])

  async function load() {
    setCurrentWeather(null);
    setErrorMessage(null);
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
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topHeader}>
          <View style={styles.topHeaderPer}></View>
          <View style={styles.topHeaderPer}>
            <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
            <ReloadIcon load={load} />
          </View>
        </View>
        <View style={styles.main}>
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <View style={styles.footer}>
          <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem} />
        </View>
      </View>
    )
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load} />
        <Text style={{ textAlign: 'center' }}>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      borderWidth: 1
  },
  topHeader: {
      flex: .5,
      flexDirection: 'column'
  },
  topHeaderPer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
  },
  main: {
      justifyContent: 'center',
      flex: 1.5,
      borderWidth: 1,
  },
  footer: {
      justifyContent: 'center',
      flex: 1,
      borderWidth: 1
  }

})