import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, FontFamily, Color, Border, Padding } from "../components/GlobalStyles";
import { useNavigation } from '@react-navigation/core'

const TheoryTest1 = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.theoryTest}>
      <View style={styles.header}>
        <Text style={styles.drivingTest}>{`Theory `}</Text>
        <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SidePanel")}
      >
        <Image
          style={styles.iconHamburgerMenu}
          contentFit="cover"
          source={require("../assets/-icon-hamburger-menu1.png")}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.carIconRedGraphics8433168}
            contentFit="cover"
            source={require("../assets/cariconredgraphics84331681removebgpreview-1.png")}
          />
          <Text style={styles.permitB}>Permit B</Text>
        </View>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <View style={styles.frame4} />
            <View style={styles.frame5}>
              <View style={styles.frame6}>
                <View style={styles.frame7}>
                  <View style={styles.tryTheTestWrapper}>
                    <Text style={styles.tryTheTest}>Try the test!</Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.image202402062353404231Icon}
                contentFit="cover"
                source={require("../assets/image-20240206-235340423-1.png")}
              />
            </View>
          </View>
          <View style={styles.frame8}>
            <View style={styles.frame9}>
              <View style={styles.frame10}>
                <TouchableOpacity
                  style={styles.frame11}
                  activeOpacity={0.2}
                  onPress={() => navigation.navigate("Practice")}
                  >
                <View style={styles.frame11}>
                  <Text style={styles.practiceQuestions}>
                    Practice Questions
                  </Text>
                </View>
                  </TouchableOpacity>
                <View style={styles.frame12}>
                  <Image
                    style={styles.image202402070026273701Icon}
                    contentFit="cover"
                    source={require("../assets/image-20240207-002627370-1.png")}
                  />
                  <Text
                    style={styles.roadTraffic}
                  >{`Road & Traffic Signs`}</Text>
                </View>
              </View>
              <View style={styles.frame13}>
                <Image
                  style={styles.image15Icon}
                  contentFit="cover"
                  source={require("../assets/image-151.png")}
                />
              </View>
            </View>
            <View style={styles.frame14}>
              <View style={styles.frame15}>
                <View style={styles.frame16}>
                  <Text style={styles.practiceQuestions}>Study</Text>
                </View>
                <View style={styles.image16Wrapper}>
                  <Image
                    style={styles.image16Icon}
                    contentFit="cover"
                    source={require("../assets/image-16.png")}
                  />
                </View>
              </View>
              <View style={styles.frame17}>
                <View style={styles.frame18}>
                  <Text style={styles.practiceQuestions}>Progression</Text>
                </View>
                <View style={styles.image17Wrapper}>
                  <Image
                    style={styles.image17Icon}
                    contentFit="cover"
                    source={require("../assets/image-17.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdowndropDownContainer: {
    backgroundColor: "rgba(255, 127, 127, 0.7)",
  },
  drivingTest: {
    position: "relative",
    fontSize: FontSize.size_21xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 246,
    height: 34,
  },
  iconHamburgerMenu: {
    position: "relative",
    width: 23,
    height: 25,
    marginLeft: 26,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 393,
    height: 99,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingTop: Padding.p_13xl,
    paddingBottom: Padding.p_14xl,
  },
  carIconRedGraphics8433168: {
    position: "relative",
    width: 152,
    height: 74,
  },
  permitB: {
    position: "relative",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: "#d12828",
    textAlign: "center",
    opacity: 0.7,
  },
  frame1: {
    width: 152,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 98,
    marginLeft: 1,
  },
  frame4: {
    width: 158,
    height: 50,
    overflow: "hidden",
    marginTop: 108,
  },
  dropdownpicker: {
    backgroundColor: "rgba(255, 127, 127, 0.7)",
  },
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    width: 353,
    height: 202,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 27,
  },
  tryTheTest: {
    position: "relative",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorLightcoral_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 23,
  },
  tryTheTestWrapper: {
    borderRadius: Border.br_94xl,
    backgroundColor: Color.colorWhite,
    width: 120,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 14,
  },
  frame7: {
    position: "absolute",
    top: 0,
    left: 14,
    width: 120,
    height: 169,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame6: {
    position: "relative",
    width: 353,
    height: 202,
    overflow: "hidden",
  },
  image202402062353404231Icon: {
    borderRadius: Border.br_3xs,
    width: 186,
    height: 119,
    marginTop: 67,
    marginLeft: -205,
  },
  frame5: {
    width: 353,
    height: 202,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: -334,
  },
  frame3: {
    width: 388,
    height: 202,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 29,
  },
  practiceQuestions: {
    position: "relative",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  frame11: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 169,
    height: 115,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
  },
  image202402070026273701Icon: {
    position: "relative",
    width: 85,
    height: 61,
  },
  roadTraffic: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    height: 15,
    marginLeft: 9,
    marginTop: 14,
  },
  frame12: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 169,
    height: 115,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_7xs,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_2xs,
    marginLeft: 15,
  },
  frame10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 353,
    height: 115,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image15Icon: {
    position: "relative",
    width: 80,
    height: 70,
  },
  frame13: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 80,
    height: 80,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame9: {
    width: 353,
    height: 115,
    overflow: "hidden",
    marginLeft: 6,
  },
  frame16: {
    position: "absolute",
    top: 88,
    left: 0,
    width: 47,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  image16Icon: {
    position: "relative",
    width: 62,
    height: 62,
  },
  image16Wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 169,
    height: 115,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 13,
  },
  frame15: {
    position: "relative",
    width: 169,
    height: 115,
    overflow: "hidden",
  },
  frame18: {
    position: "absolute",
    top: 92,
    left: 0,
    width: 82,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  image17Icon: {
    position: "relative",
    width: 72,
    height: 67,
  },
  image17Wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 169,
    height: 115,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: Padding.p_xs,
  },
  frame17: {
    position: "relative",
    width: 169,
    height: 115,
    overflow: "hidden",
    marginLeft: 15,
  },
  frame14: {
    width: 353,
    height: 119,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 6,
    marginTop: 24,
  },
  frame8: {
    width: 359,
    height: 258,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 58,
  },
  frame2: {
    width: 417,
    height: 518,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 21,
  },
  frame: {
    position: "absolute",
    top: 105,
    left: -12,
    width: 417,
    height: 637,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  theoryTest: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default TheoryTest1;
