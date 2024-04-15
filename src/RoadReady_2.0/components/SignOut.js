import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SignOut = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.signOut, style]}
      onPress={() => navigation.navigate("SignIn")}
    >
      <Text style={styles.signOut1}>Sign Out</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  signOut1: {
    fontSize: FontSize.subheadlineBold_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.subHeading,
    color: Color.colorWhite,
    textAlign: "center",
    alignSelf: "stretch",
  },
  signOut: {
    borderRadius: Border.br_94xl,
    backgroundColor: Color.red2,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    alignSelf: "stretch",
  },
});

export default SignOut;
