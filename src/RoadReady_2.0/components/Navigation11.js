import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1Profile from "./Property1Profile";
import Property1Driving from "./Property1Driving";
import { Border, Padding } from "../GlobalStyles";

const Navigation11 = () => {
  return (
    <View style={styles.navigation}>
      <Property1Profile
        homeOnOff={require("../assets/home-onoff2.png")}
        theoryOnOff={require("../assets/theory-on-off3.png")}
        instructorsOnOff={require("../assets/instructors-on-off4.png")}
        profileOnOff={require("../assets/property-1profile-off.png")}
        propMarginTop="unset"
      />
      <Property1Driving />
      <Property1Profile
        homeOnOff={require("../assets/home-onoff3.png")}
        theoryOnOff={require("../assets/theory-on-off1.png")}
        instructorsOnOff={require("../assets/instructors-on-off4.png")}
        profileOnOff={require("../assets/property-1profile-off.png")}
        propMarginTop={10}
      />
      <Property1Profile
        homeOnOff={require("../assets/home-onoff3.png")}
        theoryOnOff={require("../assets/theory-on-off3.png")}
        instructorsOnOff={require("../assets/instructors-on-off1.png")}
        profileOnOff={require("../assets/property-1profile-off.png")}
        propMarginTop={10}
      />
      <Property1Profile
        homeOnOff={require("../assets/home-onoff3.png")}
        theoryOnOff={require("../assets/theory-on-off3.png")}
        instructorsOnOff={require("../assets/instructors-on-off4.png")}
        profileOnOff={require("../assets/profile-on-off2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#7b61ff",
    borderWidth: 1,
    width: 400,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 14,
  },
});

export default Navigation11;
