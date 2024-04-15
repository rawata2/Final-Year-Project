import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const DrivingOnOff = () => {
  return (
    <View style={styles.drivingOnOff}>
      <View style={[styles.driverIcon2, styles.driverIcon2FlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector111.png")}
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
    width: 30,
    height: 30,
    overflow: "hidden",
    padding: Padding.p_12xs,
  },
  drivingOnOff: {
    flexDirection: "row",
  },
});

export default DrivingOnOff;
