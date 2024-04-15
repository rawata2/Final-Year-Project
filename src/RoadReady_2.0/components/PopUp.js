import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Padding, Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const PopUp = ({ onClose }) => {

  const navigation = useNavigation();

  return (
    <View style={[styles.popUp, styles.popUpFlexBox]}>
      <View style={[styles.sureqParent, styles.popUpFlexBox]}>
        <View style={styles.sureq}>
          <Text style={[styles.areYouSure, styles.youFlexBox]}>
            Are you sure you want to quit?
          </Text>
          <View style={styles.sureq}>
            <Text style={[styles.anyProgressYou, styles.youFlexBox]}>
              Any progress you have completed will be lost.
            </Text>
          </View>
        </View>
        <View style={[styles.buttons, styles.popUpFlexBox]}>
          <Pressable style={styles.buttonLayout}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text  style={[styles.noIWant, styles.youFlexBox]}>
                No, I want to continue
              </Text>
            </View>
          </Pressable>
          <Pressable style={[styles.quitButton, styles.buttonLayout]}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text onPress={() => navigation.navigate("TheoryTest")} style={[styles.noIWant, styles.youFlexBox]}>Yes, :(</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popUpFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  youFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: 0,
    borderRadius: Border.br_94xl,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonLayout: {
    width: 353,
    alignItems: "center",
  },
  areYouSure: {
    fontSize: FontSize.subHeading_size,
    color: Color.colorText1,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
  },
  anyProgressYou: {
    fontSize: FontSize.size_base,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorText1,
    textAlign: "center",
    letterSpacing: 0,
  },
  sureq: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  noIWant: {
    fontSize: FontSize.subheadlineBold_size,
    color: Color.colorWhite,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  button: {
    backgroundColor: "#83c883",
  },
  button1: {
    backgroundColor: Color.red2,
  },
  quitButton: {
    marginTop: 29,
  },
  buttons: {
    marginTop: 10,
  },
  sureqParent: {
    flex: 1,
  },
  popUp: {
    borderRadius: 50,
    backgroundColor: Color.secondaryColor,
    width: 465,
    height: 250,
    flexDirection: "row",
    padding: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignItems: "center",
  },
});

export default PopUp;
