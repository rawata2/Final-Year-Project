import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1DrivingOff = ({ propMarginTop }) => {
  const property1DrivingOffStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.property1drivingOff, property1DrivingOffStyle]}>
      <View style={styles.driverIcon2}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector7.png")}
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
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_12xs,
    flexDirection: "row",
  },
  property1drivingOff: {
    marginTop: 20,
    flexDirection: "row",
  },
});

export default Property1DrivingOff;
