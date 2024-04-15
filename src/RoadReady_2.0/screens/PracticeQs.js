import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import PopUp from "../components/PopUp";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PracticeQs = () => {
  const [butttonVisible, setButttonVisible] = useState(false);
  const navigation = useNavigation();

  const openButtton = useCallback(() => {
    setButttonVisible(true);
  }, []);

  const closeButtton = useCallback(() => {
    setButttonVisible(false);
  }, []);

  return (
    <>
      <View style={styles.practiceQs}>
        <TitleBar
          home="Quit"
          hamburgerOnOffFlex={1}
          onButttonPress={openButtton}
          onHamburgerOnOffPress={() => navigation.toggleDrawer()}
        />
        <ScrollView
          style={styles.main}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.mainScrollViewContent}
        >
          <View style={[styles.category, styles.mainImgSpaceBlock]}>
            <View style={styles.categoryName}>
              <Text style={[styles.roadAndTraffic, styles.answerTypo]}>
                Road and traffic signs
              </Text>
            </View>
          </View>
          <View style={[styles.mainImg, styles.mainImgFlexBox]}>
            <Image
              style={styles.qImgPlaceholderIcon}
              contentFit="cover"
              source={require("../assets/q-img-placeholder.png")}
            />
          </View>
          <View style={[styles.answerSelection, styles.mainImgFlexBox]}>
            <View style={[styles.question, styles.aSpaceBlock]}>
              <Text style={styles.whatDoesThis}>
                What does this sign tell you?
              </Text>
            </View>
            <View style={styles.allans}>
              <View style={[styles.a, styles.aSpaceBlock]}>
                <Pressable style={[styles.aParent, styles.parentFlexBox]}>
                  <Text style={[styles.a1, styles.answerTypo]}>A</Text>
                  <Text style={[styles.answer, styles.answerTypo]}>Answer</Text>
                </Pressable>
              </View>
              <View style={[styles.b, styles.aSpaceBlock]}>
                <Pressable style={[styles.bParent, styles.parentFlexBox]}>
                  <Text style={[styles.a1, styles.answerTypo]}>B</Text>
                  <Text style={[styles.answer1, styles.answerTypo]}>
                    Answer
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.b, styles.aSpaceBlock]}>
                <Pressable style={[styles.bParent, styles.parentFlexBox]}>
                  <Text style={[styles.a1, styles.answerTypo]}>C</Text>
                  <Text style={[styles.answer2, styles.answerTypo]}>
                    Answer
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.b, styles.aSpaceBlock]}>
                <View style={[styles.dParent, styles.parentFlexBox]}>
                  <Text style={[styles.a1, styles.answerTypo]}>D</Text>
                  <Text style={[styles.answer3, styles.answerTypo]}>
                    Answer
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.buttonParent, styles.aSpaceBlock]}>
            <Pressable style={styles.button}>
              <View style={[styles.answer4, styles.answer4FlexBox]}>
                <Text style={[styles.answer5, styles.nextTypo]}>Answer</Text>
              </View>
            </Pressable>
            <View style={styles.button1}>
              <Pressable style={[styles.nextButton, styles.answer4FlexBox]}>
                <Text style={[styles.next, styles.nextTypo]}>Next</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal animationType="fade" transparent visible={butttonVisible}>
        <View style={styles.butttonOverlay}>
          <Pressable style={styles.butttonBg} onPress={closeButtton} />
          <PopUp onClose={closeButtton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mainScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImgSpaceBlock: {
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
  answerTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  mainImgFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  aSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    paddingVertical: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  answer4FlexBox: {
    paddingHorizontal: 0,
    borderRadius: Border.br_94xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  nextTypo: {
    fontSize: FontSize.subheadlineBold_size,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  butttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  butttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  roadAndTraffic: {
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  categoryName: {
    paddingHorizontal: Padding.p_lgi,
    justifyContent: "center",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
  category: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  qImgPlaceholderIcon: {
    maxWidth: "100%",
    height: 205,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  mainImg: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
  whatDoesThis: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  question: {
    justifyContent: "center",
    overflow: "hidden",
  },
  a1: {
    color: Color.colorGray_200,
  },
  answer: {
    marginLeft: 18,
    color: Color.lightLabelPrimary,
  },
  aParent: {
    paddingHorizontal: Padding.p_4xs,
    flex: 1,
  },
  a: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  answer1: {
    marginLeft: 17,
    color: Color.lightLabelPrimary,
  },
  bParent: {
    paddingHorizontal: Padding.p_2xs,
    alignSelf: "stretch",
  },
  b: {
    marginTop: 15,
    justifyContent: "center",
    overflow: "hidden",
  },
  answer2: {
    marginLeft: 16,
    color: Color.lightLabelPrimary,
  },
  answer3: {
    marginLeft: 15,
    color: Color.lightLabelPrimary,
  },
  dParent: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  allans: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  answerSelection: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  answer5: {
    color: Color.red2,
  },
  answer4: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 0,
  },
  button: {
    borderStyle: "solid",
    borderColor: Color.red2,
    borderWidth: 2,
    borderRadius: Border.br_94xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  next: {
    color: Color.colorWhite,
  },
  nextButton: {
    backgroundColor: Color.red2,
  },
  button1: {
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonParent: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  practiceQs: {
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default PracticeQs;
