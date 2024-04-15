import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const DriverIcon = ({ style }) => {
  return (
    <View style={[styles.driverIcon2, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 27,
    height: 27,
  },
  driverIcon2: {
    width: 30,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_12xs,
  },
});

export default DriverIcon;
