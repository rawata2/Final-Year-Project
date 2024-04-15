import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame1 = ({ style }) => {
  return <View style={[styles.instructorsOnOffParent, style]} />;
};

const styles = StyleSheet.create({
  instructorsOnOffParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame1;
