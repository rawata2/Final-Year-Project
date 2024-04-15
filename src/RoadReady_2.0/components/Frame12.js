import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame12 = ({ style }) => {
  return (
    <View style={[styles.theoryOnOffParent, style]}>
      <Image
        style={styles.theoryOnOffIcon}
        contentFit="cover"
        source={require("../assets/theory-on-off3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  theoryOnOffIcon: {
    width: 30,
    height: 30,
  },
  theoryOnOffParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame12;
