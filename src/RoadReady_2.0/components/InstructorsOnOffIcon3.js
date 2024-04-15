import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const InstructorsOnOffIcon3 = ({ style }) => {
  return (
    <Image
      style={[styles.instructorsOnOffIcon, style]}
      contentFit="cover"
      source={require("../assets/instructors-on-off5.png")}
    />
  );
};

const styles = StyleSheet.create({
  instructorsOnOffIcon: {
    width: 30,
    height: 30,
  },
});

export default InstructorsOnOffIcon3;
