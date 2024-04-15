import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, Color } from "../GlobalStyles";

const Navigation3 = ({ style }) => {
  return (
    <View style={[styles.navigation, style]}>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/home-onoff1.png")}
        />
      </View>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <View style={styles.drivingOnOff}>
          <View style={[styles.driverIcon2, styles.iconLayout]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={vector}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/theory-on-off.png")}
        />
      </View>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/profile-on-off3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  driverIcon2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  homeOnOffWrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  driverIcon2: {
    overflow: "hidden",
    padding: Padding.p_12xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  drivingOnOff: {
    flexDirection: "row",
  },
  navigation: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.secondaryColor,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Navigation3;
