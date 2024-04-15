import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Property1CreateRouteOff from "./Property1CreateRouteOff";
import Property1DrivingOff from "./Property1DrivingOff";
import { Color, Border, Padding } from "../GlobalStyles";

const Icons = () => {
  return (
    <View style={styles.icons}>
      <Image
        style={styles.iconLayout1}
        contentFit="cover"
        source={require("../assets/ionarrowforwardoutline1.png")}
      />
      <Image
        style={[styles.ionarrowBackIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/ionarrowback1.png")}
      />
      <View style={[styles.passwordIcon, styles.iconLayout1]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector51.png")}
        />
      </View>
      <Image
        style={[styles.eyeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/eye-icon11.png")}
      />
      <View style={[styles.emailIcon, styles.iconLayout1]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector61.png")}
        />
      </View>
      <Image
        style={[styles.ionarrowBackIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/verify-icon.png")}
      />
      <View style={[styles.homeOnOff, styles.offBorder]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/property-1home.png")}
        />
        <Image
          style={[styles.property1homeOffIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/property-1home-off.png")}
        />
      </View>
      <View style={[styles.homeOnOff, styles.offBorder]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/property-1learn.png")}
        />
        <Image
          style={[styles.property1homeOffIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/property-1learn-off.png")}
        />
      </View>
      <View style={[styles.homeOnOff, styles.offBorder]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/property-1theory.png")}
        />
        <Image
          style={[styles.property1homeOffIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/property-1theory-off.png")}
        />
      </View>
      <View style={[styles.homeOnOff, styles.offBorder]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/property-1instructors.png")}
        />
        <Image
          style={[styles.property1homeOffIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/property-1instructors-off.png")}
        />
      </View>
      <View style={styles.offBorder}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/profile-on-off2.png")}
        />
        <Image
          style={[styles.property1homeOffIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/property-1profile-off.png")}
        />
      </View>
      <View style={styles.offBorder}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/create-route-on-off.png")}
        />
        <Property1CreateRouteOff />
      </View>
      <View style={styles.offBorder}>
        <View style={[styles.property1driving, styles.iconLayout1]}>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Property1DrivingOff />
      </View>
      <View style={styles.offBorder}>
        <View style={[styles.property1hamburger, styles.iconLayout1]}>
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector81.png")}
          />
        </View>
        <Image
          style={[styles.property1homeOffIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/hamburger-on-off.png")}
        />
      </View>
      <View style={styles.offBorder}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/back-on-off11.png")}
        />
        <Image
          style={[styles.property1backOffIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-on-off1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 30,
    width: 30,
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  offBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    marginLeft: 20,
    padding: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ionarrowBackIcon: {
    marginLeft: 20,
  },
  vectorIcon: {
    height: 26,
    width: 20,
  },
  passwordIcon: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_12xs,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 30,
    flexDirection: "row",
  },
  eyeIcon: {
    marginLeft: 20,
  },
  vectorIcon1: {
    width: 26,
    height: 19,
  },
  emailIcon: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_7xs,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 30,
  },
  property1homeOffIcon: {
    marginTop: 20,
  },
  homeOnOff: {
    flex: 1,
  },
  vectorIcon2: {
    width: 27,
    height: 27,
  },
  property1driving: {
    padding: Padding.p_12xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 30,
    flexDirection: "row",
  },
  vectorIcon3: {
    width: 18,
    height: 13,
  },
  property1hamburger: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 30,
  },
  property1backOffIcon: {
    marginTop: 20,
  },
  icons: {
    backgroundColor: Color.colorWhite,
    width: 1057,
    flexWrap: "wrap",
    padding: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default Icons;
