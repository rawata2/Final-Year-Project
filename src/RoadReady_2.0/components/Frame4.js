import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const Frame4 = ({ style }) => {
  return (
    <View style={[styles.instructorsOnOffParent, style]}>
      <Image
        style={styles.instructorsOnOffIcon}
        contentFit="cover"
        source={require("../assets/instructors-on-off21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  instructorsOnOffIcon: {
    width: 30,
    height: 30,
  },
  instructorsOnOffParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
});

export default Frame4;
