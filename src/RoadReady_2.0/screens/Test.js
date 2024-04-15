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
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";

const Test = () => {
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
      <View style={styles.test}>
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
          <View style={styles.qNum}>
            <Text style={styles.question}>Question</Text>
            <Text style={[styles.text, styles.textTypo]}>19/25</Text>
          </View>
          <View style={[styles.mainImg, styles.mainImgFlexBox]}>
            <Image
              style={styles.qImgPlaceholderIcon}
              contentFit="cover"
              source={require("../assets/q-img-placeholder.png")}
            />
          </View>
          <View style={[styles.answerSelection, styles.mainImgFlexBox]}>
            <View style={[styles.question1, styles.aSpaceBlock]}>
              <Text style={[styles.whatShouldYou, styles.textTypo]}>
                What should you do if fog closes in completely while you are
                driving, and visibility is reduced to near zero?
              </Text>
            </View>
            <View style={styles.allans}>
              <View style={[styles.a, styles.aSpaceBlock]}>
                <Pressable style={[styles.aParent, styles.parentFlexBox]}>
                  <Text style={styles.a1}>A</Text>
                  <Text style={[styles.answer, styles.answerTypo]}>Answer</Text>
                </Pressable>
              </View>
              <View style={[styles.b, styles.aSpaceBlock]}>
                <Pressable style={[styles.bParent, styles.parentFlexBox]}>
                  <Text style={styles.a1}>B</Text>
                  <Text style={[styles.answer1, styles.answerTypo]}>
                    Answer
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.b, styles.aSpaceBlock]}>
                <Pressable style={[styles.bParent, styles.parentFlexBox]}>
                  <Text style={styles.a1}>C</Text>
                  <Text style={[styles.answer2, styles.answerTypo]}>
                    Answer
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.b, styles.aSpaceBlock]}>
                <View style={[styles.dParent, styles.parentFlexBox]}>
                  <Text style={styles.a1}>D</Text>
                  <Text style={[styles.answer3, styles.answerTypo]}>
                    Answer
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.previousNext, styles.aSpaceBlock]}>
            <Pressable style={styles.button}>
              <View style={[styles.previous, styles.previousFlexBox]}>
                <View style={styles.ionarrowBackParent}>
                  <Image
                    style={styles.ionarrowIconLayout}
                    contentFit="cover"
                    source={require("../assets/ionarrowback.png")}
                  />
                  <Text style={[styles.previous1, styles.nextTypo]}>
                    Previous
                  </Text>
                </View>
              </View>
            </Pressable>
            <View style={styles.button1}>
              <Pressable style={[styles.nextButton, styles.previousFlexBox]}>
                <View style={styles.ionarrowBackParent}>
                  <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                  <Image
                    style={[
                      styles.ionarrowForwardOutlineIcon,
                      styles.ionarrowIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/ionarrowforwardoutline.png")}
                  />
                </View>
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
    paddingHorizontal: 0,
    paddingVertical: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  textTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  answerTypo: {
    color: Color.lightLabelPrimary,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  previousFlexBox: {
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
  },
  ionarrowIconLayout: {
    height: 30,
    width: 30,
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
  question: {
    fontSize: FontSize.size_lg,
    lineHeight: 20,
    textTransform: "capitalize",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorText2,
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    marginLeft: 20,
    color: Color.colorText2,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 28,
    fontSize: FontSize.size_base,
  },
  qNum: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  qImgPlaceholderIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  mainImg: {
    height: 245,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
  whatShouldYou: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorText1,
    alignSelf: "stretch",
  },
  question1: {
    justifyContent: "center",
    overflow: "hidden",
  },
  a1: {
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  answer: {
    marginLeft: 18,
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
  },
  answer3: {
    marginLeft: 15,
  },
  dParent: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  allans: {
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  answerSelection: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  previous1: {
    color: Color.red2,
    marginLeft: 20,
  },
  ionarrowBackParent: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  previous: {
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
  ionarrowForwardOutlineIcon: {
    marginLeft: 20,
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
  previousNext: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  test: {
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Test;
