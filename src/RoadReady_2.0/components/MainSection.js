import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const MainSection = (props) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.mainsection}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.mainSectionScrollViewContent}
    >
      <View style={[styles.framePassFail, styles.buttonsSpaceBlock]}>
        <Text style={styles.congratulations}>{(props.score > (props.count / 1.33)) ? "Congratulations" : "Better luck Next Time"}</Text>
        <Image
          style={styles.framePassFailChild}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={styles.drivingTestPassed}>{(props.score > (props.count / 1.33)) ? "driving Test Passed" : "driving Test Failed"}</Text>
        <View style={styles.stat}>
          <View style={styles.resultsFlexBox}>
            <Text style={styles.text}>{props.score}/{props.count}</Text>
            <Text style={[styles.results1, styles.time1FlexBox]}>Results</Text>
          </View>
          <View style={styles.resultsFlexBox}>
            <Text style={styles.text1}>13:20</Text>
            <Text style={[styles.time1, styles.time1FlexBox]}>Time</Text>
          </View>
        </View>
      </View>
      <View style={[styles.buttons, styles.resultsFlexBox]}>
        <View style={styles.newTest}>
          <Pressable
            style={[styles.signOut, styles.answerFlexBox]}
            activeOpacity={0.2}
            onPress={() => props.reset()}
          >
            <Text style={[styles.startNewTest, styles.startNewTestTypo]}>
              Start New Test
            </Text>
          </Pressable>
        </View>
        <Pressable onPress={() => navigation.navigate("TestHistory")} style={styles.checkResults}>
          <View style={[styles.answer, styles.answerFlexBox]}>
            <Text style={[styles.checkResults1, styles.startNewTestTypo]}>
              Check Results
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainSectionScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 35,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonsSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  time1FlexBox: {
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    alignSelf: "stretch",
  },
  resultsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  answerFlexBox: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: 0,
    overflow: "hidden",
    borderRadius: Border.br_94xl,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  startNewTestTypo: {
    fontFamily: FontFamily.subHeading,
    fontSize: FontSize.subheadlineBold_size,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  congratulations: {
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorText1,
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 20,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  framePassFailChild: {
    width: 192,
    height: 182,
    marginTop: 22,
  },
  drivingTestPassed: {
    fontSize: FontSize.size_5xl,
    color: Color.colorText2,
    fontFamily: FontFamily.subheadlineBold,
    fontWeight: "700",
    marginTop: 22,
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 20,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  text: {
    textAlign: "left",
    fontSize: FontSize.subHeading_size,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.subheadlineBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  results1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
  },
  text1: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.subHeading_size,
    fontFamily: FontFamily.subheadlineBold,
    alignSelf: "stretch",
  },
  time1: {
    fontSize: FontSize.size_smi_6,
    fontFamily: FontFamily.poppinsRegular,
  },
  stat: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    alignItems: "center",
    alignSelf: "stretch",
  },
  framePassFail: {
    paddingHorizontal: Padding.p_71xl,
    alignItems: "center",
  },
  startNewTest: {
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  signOut: {
    backgroundColor: Color.red2,
  },
  newTest: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  checkResults1: {
    color: Color.red2,
  },
  answer: {
    backgroundColor: Color.colorWhite,
  },
  checkResults: {
    borderStyle: "solid",
    borderColor: Color.red2,
    borderWidth: 2,
    marginTop: 20,
    borderRadius: Border.br_94xl,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttons: {
    paddingHorizontal: Padding.p_11xl,
    marginTop: 54,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  mainsection: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default MainSection;
