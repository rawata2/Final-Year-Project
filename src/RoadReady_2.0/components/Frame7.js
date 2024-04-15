import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame7 = ({ style }) => {
  return (
    <View style={[styles.drivingOnOffParent, style, styles.drivingFlexBox]}>
      <View style={[styles.drivingOnOff, styles.drivingFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drivingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  drivingOnOff: {
    width: 30,
    height: 30,
    overflow: "hidden",
    padding: Padding.p_12xs,
  },
  drivingOnOffParent: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame7;
