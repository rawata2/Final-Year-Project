import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame = ({ style }) => {
  return (
    <View style={[styles.drivingOnOffParent, style, styles.drivingFlexBox]} />
  );
};

const styles = StyleSheet.create({
  drivingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  drivingOnOffParent: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame;
