import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {colors} from "../Utils/brandColors";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors;

export default function UnitsPicker() {
  return (
    <View style={styles.weatherDetails}>
      <Text>This is units picker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
});
