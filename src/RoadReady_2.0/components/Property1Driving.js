import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding, Border, Color } from "../GlobalStyles";

const Property1Driving = () => {
  return (
    <View style={styles.property1driving}>
      <View style={[styles.homeOnOffWrapper, styles.offFlexBox]}>
        <Image
          style={styles.offLayout}
          contentFit="cover"
          source={require("../assets/instructors-on-off4.png")}
        />
      </View>
      <View style={[styles.homeOnOffWrapper, styles.offFlexBox]}>
        <Image
          style={styles.offLayout}
          contentFit="cover"
          source={require("../assets/property-1profile-off.png")}
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
  property1driving: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.secondaryColor,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Property1Driving;
