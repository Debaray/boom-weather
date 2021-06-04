import React from "react";
import {View, Platform, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReloadIcon() {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={ } //add load function after it is created
        name={reloadIconName }
        size={24}
        color={} //add primary color
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});
