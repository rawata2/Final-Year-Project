import React, { useState } from "react";
import Group2 from "../components/Group2";
import ProfileOnOffIcon1 from "../components/ProfileOnOffIcon1";
import Group from "../components/Group";
import HomeOnOffIcon2 from "../components/HomeOnOffIcon2";
import Group4 from "../components/Group4";
import DrivingOnOff2 from "../components/DrivingOnOff2";
import Group5 from "../components/Group5";
import TheoryOnOffIcon2 from "../components/TheoryOnOffIcon2";
import Group3 from "../components/Group3";
import InstructorsOnOffIcon2 from "../components/InstructorsOnOffIcon2";
import Group1 from "../components/Group1";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";
import { auth, db } from '../firebaseConfig'

const SidePanel1 = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <Group2 />,
    <Group />,
    <Group4 />,
    <Group5 />,
    <Group3 />,
    <Group1 />,
  ]);
  const [drawerItemsActive] = useState([
    <ProfileOnOffIcon1 />,
    <HomeOnOffIcon2 />,
    <DrivingOnOff2 />,
    <TheoryOnOffIcon2 />,
    <InstructorsOnOffIcon2 />,
    <Group1 />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("SignIn")
      })
      .catch(error => alert(error.message))
  }

  console.log(auth)
  return (
    <View style={styles.sidePanel}>
      <View style={styles.titlebar}>
        <View style={styles.backButton}>
          <Pressable style={styles.buttton} onPress={() => navigation.goBack()}>
            <Image
              style={styles.backOnOffIcon}
              contentFit="cover"
              source={require("../assets/back-on-off1.png")}
            />
            <Text style={styles.back}>Back</Text>
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
      <View style={styles.menu}>
        <View style={styles.profile}>
          <View style={styles.group3Wrapper}>
            <Image
              style={styles.group3Icon}
              contentFit="cover"
              source={require("../assets/group3.png")}
            />
          </View>
          <View style={styles.helloParent}>
            <Text style={styles.hello}>Hello</Text>
            <Text style={[styles.user, styles.userTypo]}>{auth.currentUser.displayName ? auth.currentUser.displayName : "User"}</Text>
          </View>
        </View>
        <View style={styles.menuChild} />
        <View style={styles.drawerMenuItems}>
          {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
          {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
          {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
          {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
          {stateIndex === 4 ? drawerItemsActive[4] : drawerItemsNormal[4]}
          {stateIndex === 5 ? drawerItemsActive[5] : drawerItemsNormal[5]}
        </View>
        <View style={[styles.allButtons, styles.allButtonsSpaceBlock]}>
          <View style={styles.allButtonsSpaceBlock}>
             {auth ? (
            <TouchableOpacity
              style={styles.signOut}
              activeOpacity={0.2}
              onPress={() => handleSignOut()}
            >
              <Text style={[styles.signOut1, styles.profile1Typo]}>
                Sign Out
              </Text>
            </TouchableOpacity>
              ):
              <TouchableOpacity
              style={styles.signOut}
              activeOpacity={0.2}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={[styles.signOut1, styles.profile1Typo]}>
                Sign In
              </Text>
            </TouchableOpacity>
              }
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt28: {
    marginTop: 28,
  },
  userTypo: {
    fontSize: FontSize.subHeading_size,
    textAlign: "left",
  },
  profile1Typo: {
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  offLayout: {
    height: 30,
    width: 30,
  },
  allButtonsSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  backOnOffIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  back: {
    fontFamily: FontFamily.interRegular,
    marginLeft: 3,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.subheadlineBold_size,
    flex: 1,
  },
  buttton: {
    width: 62,
    flexDirection: "row",
    alignItems: "center",
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
    paddingTop: Padding.p_34xl,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_mini,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  group3Icon: {
    width: 49,
    height: 49,
  },
  group3Wrapper: {
    flexDirection: "row",
  },
  hello: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.robotoRegular,
    color: Color.instructorButton,
    textAlign: "left",
  },
  user: {
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.subheadlineBold,
    color: Color.colorDarkslategray_100,
  },
  helloParent: {
    marginLeft: 12,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuChild: {
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
    marginTop: 20,
    alignSelf: "stretch",
  },
  drawerMenuItems: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  signOut1: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.subheadlineBold_size,
    alignSelf: "stretch",
  },
  signOut: {
    borderRadius: Border.br_94xl,
    backgroundColor: Color.red2,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  allButtons: {
    marginTop: 20,
    justifyContent: "center",
  },
  menu: {
    padding: Padding.p_xl,
    flex: 1,
    alignSelf: "stretch",
  },
  sidePanel: {
    backgroundColor: Color.colorWhite,
    width: 393,
    height: 852,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SidePanel1;
