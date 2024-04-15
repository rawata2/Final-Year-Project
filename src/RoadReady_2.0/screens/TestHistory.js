import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const TestHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.testHistory}>
      <TitleBar
        home="Back"
        hamburgerOnOffFlex={1}
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <View style={styles.heading}>
        <View style={[styles.headingName, styles.passAnalyFlexBox]}>
          <Text style={styles.testHistory1}>Test History</Text>
        </View>
      </View>
      <ScrollView
        style={styles.mainsection}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainSectionScrollViewContent}
      >
        <Text style={styles.overview}>Overview</Text>
        <View style={[styles.stats1, styles.statsSpaceBlock]}>
          <View style={styles.allStats}>
            <View style={styles.passAnalyFlexBox}>
              <Text style={[styles.statusOfThe, styles.statusOfTheTypo]}>
                Status of the test
              </Text>
              <Text style={[styles.numberOfCorrect, styles.statusOfTheTypo]}>
                Number of correct answers
              </Text>
              <Text style={[styles.numberOfCorrect, styles.statusOfTheTypo]}>
                Total Learning Time
              </Text>
            </View>
            <View style={styles.passAnalyFlexBox}>
              <Text style={[styles.passed, styles.textTypo]}>PASSED</Text>
              <Text style={[styles.text, styles.textTypo]}>39/40</Text>
              <Text style={[styles.text, styles.textTypo]}>27 min</Text>
            </View>
          </View>
        </View>
        <View style={[styles.stats2, styles.statsSpaceBlock]}>
          <View style={styles.allStats}>
            <View style={styles.passAnalyFlexBox}>
              <Text style={[styles.statusOfThe, styles.statusOfTheTypo]}>
                Status of the test
              </Text>
              <Text style={[styles.numberOfCorrect, styles.statusOfTheTypo]}>
                Number of correct answers
              </Text>
              <Text style={[styles.numberOfCorrect, styles.statusOfTheTypo]}>
                Total Learning Time
              </Text>
            </View>
            <View style={styles.passAnalyFlexBox}>
              <Text style={[styles.failed, styles.textTypo]}>FAILED</Text>
              <Text style={[styles.text, styles.textTypo]}>35/40</Text>
              <Text style={[styles.text, styles.textTypo]}>25 min</Text>
            </View>
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
    justifyContent: "flex-start",
  },
  passAnalyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  statsSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    marginTop: 20,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  statusOfTheTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi_6,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_smi_6,
    textAlign: "left",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  testHistory1: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  headingName: {
    backgroundColor: "#f38e55",
    paddingHorizontal: Padding.p_lgi,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    paddingVertical: Padding.p_xl,
    flex: 1,
  },
  heading: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  overview: {
    fontSize: FontSize.subHeading_size,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  statusOfThe: {
    color: Color.colorDarkslategray_100,
  },
  numberOfCorrect: {
    color: Color.colorDarkslategray_100,
    marginTop: 20,
  },
  passed: {
    color: "#28a164",
  },
  text: {
    color: Color.colorDarkslategray_100,
    marginTop: 20,
  },
  allStats: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  stats1: {
    backgroundColor: "#ddf0e6",
    marginTop: 20,
  },
  failed: {
    color: "#f35555",
  },
  stats2: {
    backgroundColor: "#fde4e4",
    marginTop: 20,
  },
  mainsection: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
    flex: 1,
  },
  testHistory: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default TestHistory;
