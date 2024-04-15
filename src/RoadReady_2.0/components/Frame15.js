import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const Frame15 = ({ style }) => {
  return (
    <View
      style={[styles.drivingOnOffParent, style, styles.driverIcon2FlexBox1]}
    >
      <View style={styles.drivingOnOff}>
        <View style={[styles.driverIcon2, styles.driverIcon2FlexBox1]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  driverIcon2FlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  driverIcon2: {
    width: 30,
    height: 30,
    overflow: "hidden",
    padding: Padding.p_12xs,
  },
  drivingOnOff: {
    flexDirection: "row",
  },
  drivingOnOffParent: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame15;
