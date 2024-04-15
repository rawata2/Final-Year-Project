import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const HomeOnOffIcon3 = ({ style }) => {
  return (
    <Image
      style={[styles.homeOnOffIcon, style]}
      contentFit="cover"
      source={require("../assets/home-onoff3.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeOnOffIcon: {
    width: 30,
    height: 30,
  },
});

export default HomeOnOffIcon3;
