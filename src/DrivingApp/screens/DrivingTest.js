import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView, TouchableOpacity, } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../components/GlobalStyles";
import { useNavigation } from '@react-navigation/core'

const DrivingTest = () => {
  const navigation = useNavigation()

  return (
    <ScrollView>
    <View style={styles.drivingTest}>
      <View style={styles.drivingTestParent}>
        <Text style={styles.drivingTest1}>Driving Test</Text>
        <Image
          style={styles.iconHamburgerMenu}
          contentFit="cover"
          source={require("../assets/-icon-hamburger-menu1.png")}
        />
      </View>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame7.png")}
          />
        </View>
        <Text style={styles.selectATest}>Select a Test Centre</Text>
      </View>
      <View style={styles.frame2}>
        <View style={styles.frame3}>
          <TouchableOpacity
            style={styles.charlestownWrapper}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TestCentre")}
          >
            <Text style={styles.charlestown}>Charlestown</Text>
          </TouchableOpacity>
          <Pressable style={styles.dunLaoghairedeansgrangeWrapper}>
            <Text style={styles.dunLaoghairedeansgrange}>
              Dun Laoghaire/Deansgrange
            </Text>
          </Pressable>
          <Pressable style={styles.dunLaoghairedeansgrangeWrapper}>
            <Text style={styles.dunLaoghairedeansgrange}>Finglas</Text>
          </Pressable>
        </View>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <Pressable style={styles.charlestownWrapper}>
              <Text style={styles.dunLaoghairedeansgrange}>Killester</Text>
            </Pressable>
            <View style={styles.dunLaoghairedeansgrangeWrapper}>
              <Text style={styles.dunLaoghairedeansgrange}>Mulladdart</Text>
            </View>
          </View>
          <View style={styles.mulladdartmapleHouseWrapper}>
            <Text style={styles.dunLaoghairedeansgrange}>
              Mulladdart/Maple House
            </Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  drivingTest1: {
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
  drivingTestParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 393,
    height: 94,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingTop: Padding.p_13xl,
    paddingBottom: Padding.p_14xl,
  },
  frameIcon: {
    position: "relative",
    width: 321,
    height: 254,
    overflow: "hidden",
  },
  frame1: {
    width: 393,
    height: 367,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  selectATest: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    height: 24,
    marginRight: 181,
    marginTop: -31,
  },
  frame: {
    width: 393,
    height: 367,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 2,
    marginTop: 10,
  },
  charlestown: {
    position: "relative",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
  },
  charlestownWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 331,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    marginRight: 10,
  },
  dunLaoghairedeansgrange: {
    position: "relative",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  dunLaoghairedeansgrangeWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 331,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    marginRight: 10,
    marginTop: 9,
  },
  frame3: {
    width: 341,
    height: 168,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame5: {
    width: 341,
    height: 109,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mulladdartmapleHouseWrapper: {
    alignSelf: "start",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    marginTop: 14,
  },
  frame4: {
    width: 341,
    height: 173,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 9,
  },
  frame2: {
    width: 341,
    height: 350,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  drivingTest: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DrivingTest;
