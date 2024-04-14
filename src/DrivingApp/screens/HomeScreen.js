import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View, Pressable, ScrollView } from 'react-native'
import { auth, db} from '../firebaseConfig'
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../components/GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    if (!auth.currentUser) {
      navigation.replace("Login")
    }
}, [])


  return (
    <ScrollView style={styles.home}>
      <Text style={styles.home1}>Home</Text>
      <View style={styles.homeChild} />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <Image
          style={[styles.image6Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Text style={styles.createRoutes}>Daily Tasks</Text>
      </View>
      <TouchableOpacity
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("FindInstructors")}
      >
        <View style={styles.groupChild} />
        <Image
          style={[styles.image5Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-511.png")}
        />
        <Text style={styles.createRoutes}>Find instructors</Text>
        </TouchableOpacity>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <Image
          style={[styles.image4Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-411.png")}
        />
        <Text style={styles.createRoutes}>Create routes</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => navigation.navigate("TheoryTest")}
      >
        <View style={styles.rectangleView} />
        <Image
          style={styles.image3Icon}
          contentFit="cover"
          source={require("../assets/image-311.png")}
        />
        <Text style={[styles.theoryTest, styles.testTypo]}>Theory Test</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.groupTouchableopacity, styles.groupLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("DrivingTest")}
      >
        <View style={styles.rectangleView} />
        <Image
          style={[styles.image2Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-221.png")}
        />
        <Text style={[styles.drivingTest, styles.testTypo]}>Driving Test</Text>
      </TouchableOpacity>
      <Image
        style={styles.iconHamburgerMenu}
        contentFit="cover"
        source={require("../assets/-icon-hamburger-menu.png")}
      />
    </ScrollView>
    // <View style={styles.container}>
    //   <Text>Email: {auth.currentUser?.email}</Text>
    //   <TouchableOpacity
    //     onPress={() => handleSignOut()}
    //     style={styles.button}
    //   >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 94,
    width: 120,
    top: 639,
    position: "absolute",
  },
  iconLayout: {
    height: 72,
    borderRadius: Border.br_3xs,
  },
  iconPosition: {
    left: 12,
    top: 6,
    position: "absolute",
  },
  groupLayout: {
    height: 123,
    top: 483,
    width: 162,
    position: "absolute",
  },
  testTypo: {
    height: 24,
    fontSize: FontSize.size_mini,
    top: 99,
    width: 90,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    letterSpacing: 0,
    position: "absolute",
  },
  iconPosition1: {
    top: 6,
    position: "absolute",
  },
  home1: {
    top: 32,
    left: 132,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 137,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    letterSpacing: 0,
    position: "absolute",
  },
  homeChild: {
    backgroundColor: Color.colorDarkslategray_200,
    width: 393,
    height: 99,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image1Icon: {
    top: 120,
    left: 9,
    borderRadius: Border.br_xl,
    width: 377,
    height: 421,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhitesmoke,
    height: 94,
    width: 120,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image6Icon: {
    left: 21,
    width: 77,
    top: 6,
    position: "absolute",
  },
  createRoutes: {
    top: 78,
    left: 15,
    fontSize: FontSize.size_3xs,
    height: 12,
    width: 90,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 273,
  },
  image5Icon: {
    width: 96,
    height: 72,
    borderRadius: Border.br_3xs,
  },
  rectangleGroup: {
    left: 146,
  },
  image4Icon: {
    borderRadius: Border.br_5xs,
    width: 95,
    height: 71,
  },
  rectangleContainer: {
    left: 19,
  },
  rectangleView: {
    height: 121,
    width: 162,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image3Icon: {
    top: 5,
    left: 20,
    borderRadius: Border.br_31xl,
    width: 121,
    height: 96,
    position: "absolute",
  },
  theoryTest: {
    left: 40,
  },
  groupView: {
    left: 212,
  },
  image2Icon: {
    marginLeft: -63,
    left: "50%",
    width: 129,
    height: 95,
    borderRadius: Border.br_3xs,
  },
  drivingTest: {
    left: 38,
  },
  groupTouchableopacity: {
    left: 27,
  },
  iconHamburgerMenu: {
    height: "2.93%",
    width: "5.93%",
    top: "4.34%",
    right: "6.03%",
    bottom: "92.72%",
    left: "88.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});