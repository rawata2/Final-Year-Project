import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import RoadTraffic from "../components/RoadTraffic";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const TheoryTest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.theoryTest}>
      <TitleBar
        home="Back"
        hamburgerOnOffFlex={1}
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <ScrollView
        style={styles.main}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollViewContent}
      >
        <View style={[styles.carpng, styles.carpngFlexBox]}>
          <View style={styles.carWithText}>
            <Image
              style={[styles.carIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/car-icon.png")}
            />
            <Text style={[styles.permitB, styles.permitBTypo]}>Permit B</Text>
          </View>
        </View>
        <View style={[styles.containerTry, styles.trybuttonSpaceBlock]}>
          <View style={[styles.theorydashboard, styles.buttonimgSpaceBlock]}>
            <Text style={styles.readyToTake}>Ready to take a Mock Test?</Text>
            <View style={[styles.buttonimg, styles.buttonimgSpaceBlock]}>
              <TouchableOpacity
                style={[styles.trybutton, styles.trybuttonFlexBox]}
                activeOpacity={0.2}
                onPress={() => navigation.navigate("Test")}
              >
                <Text style={[styles.tryTheTest, styles.trybuttonFlexBox]}>
                  Try the test!
                </Text>
              </TouchableOpacity>
              <View style={[styles.checkboardimg, styles.carpngFlexBox]}>
                <Image
                  style={[styles.checkboardimgIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/checkboardimg.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.alltheorytiles}>
          <View style={styles.iconscontainertheoryFlexBox}>
            <TouchableOpacity
              style={[styles.practiceqtile, styles.practiceqtileFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("PracticeQs")}
            >
              <View style={styles.innerpractice}>
                <Image
                  style={styles.image15Icon}
                  contentFit="cover"
                  source={require("../assets/image-15.png")}
                />
                <Text
                  style={[styles.practiceQuestions, styles.testHistoryTypo]}
                >
                  Practice Questions
                </Text>
              </View>
            </TouchableOpacity>
            <RoadTraffic
              image202402070026273702={require("../assets/image-20240207-002627370-2.png")}
              roadTrafficSigns={`Road & Traffic Signs`}
            />
          </View>
          <View
            style={[
              styles.iconscontainertheory2,
              styles.iconscontainertheoryFlexBox,
            ]}
          >
            <RoadTraffic
              image202402070026273702={require("../assets/studyimg.png")}
              roadTrafficSigns="Study"
              propOverflow="unset"
              propMarginLeft="unset"
              propWidth={70}
            />
            <TouchableOpacity
              style={[styles.progressiontile, styles.practiceqtileFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TestHistory")}
            >
              <Image
                style={styles.image15Icon}
                contentFit="cover"
                source={require("../assets/progressionimg.png")}
              />
              <View style={styles.innerprogression}>
                <Text style={styles.testHistoryTypo}>Test History</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  carpngFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconLayout1: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  permitBTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  trybuttonSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  buttonimgSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
  },
  trybuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  practiceqtileFlexBox: {
    padding: Padding.p_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    justifyContent: "flex-end",
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  testHistoryTypo: {
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  iconscontainertheoryFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  carIcon: {
    height: 74,
  },
  permitB: {
    color: "#d12828",
    opacity: 0.7,
    fontSize: FontSize.subHeading_size,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  carWithText: {
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  carpng: {
    width: 360,
    paddingHorizontal: 100,
    paddingVertical: 50,
    overflow: "hidden",
  },
  readyToTake: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.subHeading_size,
    alignSelf: "stretch",
  },
  tryTheTest: {
    fontSize: FontSize.subheadlineBold_size,
    color: "#ff7f7f",
    display: "flex",
    width: 120,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  trybutton: {
    borderRadius: Border.br_94xl,
    height: 63,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
  },
  checkboardimgIcon: {
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  checkboardimg: {
    height: 108,
    alignItems: "center",
    flex: 1,
  },
  buttonimg: {
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  theorydashboard: {
    backgroundColor: "rgba(255, 127, 127, 0.7)",
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_3xs,
  },
  containerTry: {
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  image15Icon: {
    width: 80,
    height: 70,
  },
  practiceQuestions: {
    marginTop: 8,
  },
  innerpractice: {
    justifyContent: "flex-end",
  },
  practiceqtile: {
    overflow: "hidden",
  },
  innerprogression: {
    marginTop: 5,
    justifyContent: "flex-end",
  },
  progressiontile: {
    marginLeft: 20,
  },
  iconscontainertheory2: {
    marginTop: 20,
  },
  alltheorytiles: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  theoryTest: {
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default TheoryTest;
