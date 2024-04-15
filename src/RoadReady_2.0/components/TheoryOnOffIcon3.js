import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const TheoryOnOffIcon3 = ({ style }) => {
  return (
    <Image
      style={[styles.theoryOnOffIcon, style]}
      contentFit="cover"
      source={require("../assets/theory-on-off.png")}
    />
  );
};

const styles = StyleSheet.create({
  theoryOnOffIcon: {
    width: 30,
    height: 30,
  },
});

export default TheoryOnOffIcon3;
