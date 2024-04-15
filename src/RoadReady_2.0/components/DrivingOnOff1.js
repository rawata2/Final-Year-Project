import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const DrivingOnOff = () => {
  return (
    <View style={styles.drivingOnOff}>
      <View style={[styles.driverIcon2, styles.iconLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 27,
    height: 27,
  },
  driverIcon2: {
    padding: Padding.p_12xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  drivingOnOff: {
    flexDirection: "row",
  },
});

export default DrivingOnOff;
