import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const OldSidePanel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sidePanel}>
      <View style={[styles.titlebar, styles.groupFlexBox]}>
        <View style={styles.backButton}>
          <Pressable
            style={[styles.buttton, styles.groupFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.backOnOffIcon}
              contentFit="cover"
              source={require("../assets/back-on-off1.png")}
            />
            <Text style={[styles.back, styles.backFlexBox]}>Back</Text>
          </Pressable>
        </View>
        <TouchableOpacity
          style={styles.offLayout}
          activeOpacity={0.2}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/hamburger-on-off.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.allButtons, styles.allButtonsFlexBox]}>
        <View style={[styles.routesButton, styles.buttonSpaceBlock]}>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Image
              style={styles.offLayout}
              contentFit="cover"
              source={require("../assets/create-route-on-off.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Routes</Text>
          </View>
        </View>
        <View style={[styles.signOutButton, styles.buttonSpaceBlock]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  backFlexBox: {
    textAlign: "left",
    flex: 1,
  },
  allButtonsFlexBox: {
    paddingHorizontal: Padding.p_11xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonSpaceBlock1: {
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    overflow: "hidden",
  },
  homeTypo: {
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  buttonSpaceBlock: {
    marginTop: 32,
    paddingHorizontal: Padding.p_11xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  offLayout: {
    height: 30,
    width: 30,
  },
  backOnOffIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  back: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
    marginLeft: 3,
    fontSize: FontSize.subheadlineBold_size,
  },
  buttton: {
    width: 62,
  },
  backButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  titlebar: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.secondaryColor,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  home: {
    fontSize: FontSize.subHeading_size,
    color: Color.red2,
    marginLeft: 20,
    textAlign: "left",
    flex: 1,
  },
  group: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  routesButton: {
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 4,
    borderColor: Color.red2,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  signOutButton: {
    paddingVertical: 0,
  },
  allButtons: {
    marginTop: 52,
    paddingVertical: 0,
    justifyContent: "center",
  },
  sidePanel: {
    width: 393,
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default OldSidePanel;
