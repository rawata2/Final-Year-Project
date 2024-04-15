import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const FrameComponent2 = ({ style }) => {
  return <View style={[styles.theoryOnOffParent, style]} />;
};

const styles = StyleSheet.create({
  theoryOnOffParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default FrameComponent2;
