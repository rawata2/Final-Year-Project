import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, Color } from "../GlobalStyles";

const Navigation1 = ({ style }) => {
  return (
    <View style={[styles.navigation, style, styles.offFlexBox]}>
      <View style={[styles.homeOnOffWrapper, styles.offFlexBox]}>
        <Image
          style={styles.offLayout}
          contentFit="cover"
          source={require("../assets/instructors-on-off.png")}
        />
      </View>
      <View style={[styles.homeOnOffWrapper, styles.offFlexBox]}>
        <Image
          style={styles.offLayout}
          contentFit="cover"
          source={require("../assets/profile-on-off3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  offLayout: {
    height: 30,
    width: 30,
  },
  homeOnOffWrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
  navigation: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.secondaryColor,
  },
});

export default Navigation1;
