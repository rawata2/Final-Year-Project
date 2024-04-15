import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame2 = ({ style }) => {
  return (
    <View style={[styles.homeOnOffParent, style]}>
      <Image
        style={styles.homeOnOffIcon}
        contentFit="cover"
        source={require("../assets/home-onoff1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeOnOffIcon: {
    width: 30,
    height: 30,
  },
  homeOnOffParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame2;
