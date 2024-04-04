import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../components/GlobalStyles";

const SidePanel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sidePanel}>
      <View style={[styles.sidePanel1, styles.backgroundLayout]}>
        <View style={[styles.background, styles.backgroundPosition]}>
          <View style={[styles.backgroundChild, styles.backgroundPosition]} />
          <View style={styles.backgroundItem} />
        </View>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse11.png")}
        />
        <View style={[styles.home, styles.testLayout]}>
          <TouchableOpacity
            style={[styles.rectangleParent, styles.testLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TestCentre")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={styles.home1}>Home</Text>
          </TouchableOpacity>
          <Image
            style={[styles.image9Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
        </View>
        <View style={[styles.drivingTest, styles.testLayout]}>
          <TouchableOpacity
            style={[styles.rectangleParent, styles.testLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TestCentre")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={styles.home1}>Driving Test</Text>
          </TouchableOpacity>
          <Image
            style={[styles.image10Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-10.png")}
          />
        </View>
        <View style={[styles.theoryTest, styles.testLayout]}>
          <TouchableOpacity
            style={[styles.rectangleParent, styles.testLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TestCentre")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={styles.home1}>Theory Test</Text>
          </TouchableOpacity>
          <Image
            style={[styles.image11Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-111.png")}
          />
        </View>
        <View style={[styles.routes, styles.testLayout]}>
          <TouchableOpacity
            style={[styles.rectangleParent, styles.testLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TestCentre")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={styles.home1}>Routes</Text>
          </TouchableOpacity>
          <Image
            style={[styles.image9Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
        </View>
        <View style={[styles.instructors, styles.testLayout]}>
          <TouchableOpacity
            style={[styles.rectangleParent, styles.testLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TestCentre")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={styles.home1}>Instructors</Text>
          </TouchableOpacity>
          <Image
            style={[styles.image9Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-13.png")}
          />
        </View>
        <View style={[styles.learningMaterial, styles.testLayout]}>
          <TouchableOpacity
            style={[styles.rectangleParent, styles.testLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("TestCentre")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.learning, styles.userFlexBox]}>Learning</Text>
          </TouchableOpacity>
          <Image
            style={[styles.image9Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-14.png")}
          />
        </View>
        <TouchableOpacity
          style={[styles.rectangleParent3, styles.groupChild3Layout]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("TestCentre")}
        >
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
          <Text style={[styles.signOut, styles.userFlexBox]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.heading, styles.headingLayout]}>
        <Image
          style={[styles.vectorIcon, styles.testLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.heading1, styles.headingLayout]}>
          <Image
            style={[styles.image7Icon, styles.headingLayout]}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Text style={[styles.user, styles.userFlexBox]}>User</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    height: 852,
    width: 393,
  },
  backgroundPosition: {
    top: 0,
    left: 0,
  },
  testLayout: {
    height: 50,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  iconLayout: {
    width: 36,
    left: 18,
  },
  iconPosition: {
    top: 6,
    position: "absolute",
  },
  userFlexBox: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  groupChild3Layout: {
    width: 364,
    height: 50,
    position: "absolute",
  },
  headingLayout: {
    height: 60,
    position: "absolute",
  },
  backgroundChild: {
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    position: "absolute",
    height: 852,
    width: 393,
  },
  backgroundItem: {
    top: 101,
    height: 751,
    left: 0,
    position: "absolute",
    width: 393,
    backgroundColor: Color.colorWhite,
  },
  background: {
    left: 0,
    position: "absolute",
    height: 852,
    width: 393,
  },
  ellipseIcon: {
    top: 140,
    left: -80,
    width: 540,
    height: 492,
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorCrimson,
    borderWidth: 2,
    height: 50,
    position: "absolute",
    width: 224,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  home1: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorCrimson,
    fontSize: FontSize.size_xl,
    left: 67,
    top: 13,
    position: "absolute",
  },
  rectangleParent: {
    width: 224,
    height: 50,
    left: 0,
    top: 0,
  },
  image9Icon: {
    top: 7,
    height: 36,
    position: "absolute",
  },
  home: {
    top: 142,
    width: 224,
    height: 50,
    left: 78,
  },
  image10Icon: {
    height: 39,
    width: 36,
    left: 18,
  },
  drivingTest: {
    top: 215,
    width: 224,
    height: 50,
    left: 78,
  },
  image11Icon: {
    left: 17,
    width: 37,
    height: 37,
  },
  theoryTest: {
    top: 288,
    width: 224,
    height: 50,
    left: 78,
  },
  routes: {
    top: 361,
    width: 224,
    height: 50,
    left: 78,
  },
  instructors: {
    top: 434,
    width: 224,
    height: 50,
    left: 78,
  },
  learning: {
    width: 83,
    color: Color.colorCrimson,
    display: "flex",
    fontSize: FontSize.size_xl,
    top: 13,
    left: 67,
  },
  learningMaterial: {
    top: 507,
    width: 224,
    height: 50,
    left: 78,
  },
  groupChild3: {
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  signOut: {
    left: 109,
    color: Color.colorWhite,
    width: 135,
    fontSize: FontSize.size_xl,
    top: 13,
    display: "flex",
  },
  rectangleParent3: {
    top: 779,
    left: 15,
  },
  sidePanel1: {
    overflow: "hidden",
    zIndex: 0,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    top: 5,
    left: 313,
    width: 50,
  },
  image7Icon: {
    width: 70,
    left: 0,
    top: 0,
  },
  user: {
    top: 12,
    left: 87,
    fontSize: FontSize.size_13xl,
    width: 206,
    height: 42,
    color: Color.colorCrimson,
    display: "flex",
  },
  heading1: {
    width: 293,
    left: 0,
    top: 0,
  },
  heading: {
    top: 17,
    left: -2,
    width: 363,
    zIndex: 1,
  },
  sidePanel: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
  },
});

export default SidePanel;
