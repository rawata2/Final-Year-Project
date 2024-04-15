import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DrivingTest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.drivingTest}>
      <TitleBar
        home="Back"
        hamburgerOnOffFlex={1}
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <ScrollView
        style={styles.mainsection}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.mainSectionScrollViewContent}
      >
        <View style={styles.imageframe}>
          <View style={[styles.frame, styles.frameSpaceBlock]}>
            <Image
              style={styles.image2Icon}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
          </View>
        </View>
        <View style={styles.selection}>
          <Text style={[styles.selectATest, styles.selectATestTypo]}>
            Select a Test Centre
          </Text>
          <View style={styles.testCentres}>
            <TouchableOpacity
              style={styles.charlestownSpaceBlock}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TestRoute")}
            >
              <Text style={[styles.charlestown1, styles.selectATestTypo]}>
                Charlestown
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TestRoute")}
            >
              <Text style={[styles.charlestown1, styles.selectATestTypo]}>
                Dun Laoghaire/Deansgrange
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TestRoute")}
            >
              <Text style={[styles.charlestown1, styles.selectATestTypo]}>
                Finglas
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TestRoute")}
            >
              <Text style={[styles.charlestown1, styles.selectATestTypo]}>
                Killester
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TestRoute")}
            >
              <Text style={[styles.charlestown1, styles.selectATestTypo]}>
                Mulladdart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("TestRoute")}
            >
              <Text style={[styles.charlestown1, styles.selectATestTypo]}>
                Mulladdart/Maple House
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainSectionScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_11xl,
    alignSelf: "stretch",
  },
  selectATestTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.subHeading_size,
    alignSelf: "stretch",
  },
  charlestownSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    height: 50,
    backgroundColor: Color.colorDarkslategray_200,
    paddingVertical: 0,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  drivingOnOffFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  offLayout: {
    height: 30,
    width: 30,
  },
  image2Icon: {
    width: 311,
    height: 237,
    borderRadius: Border.br_3xs,
  },
  frame: {
    paddingTop: Padding.p_2xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imageframe: {
    height: 242,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  selectATest: {
    color: Color.lightLabelPrimary,
  },
  charlestown1: {
    color: Color.colorDarkslategray_100,
  },
  dunLaoghaire: {
    marginTop: 10,
  },
  testCentres: {
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  selection: {
    height: 429,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  mainsection: {
    alignSelf: "stretch",
    flex: 1,
  },
  drivingTest: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DrivingTest;
