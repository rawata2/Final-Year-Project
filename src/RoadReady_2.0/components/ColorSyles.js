import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const ColorSyles = () => {
  return (
    <View style={styles.colorSyles}>
      <View style={styles.primarycolor} />
      <View style={[styles.secondarycolor, styles.fontcolorLayout]} />
      <View style={[styles.fontcolor, styles.fontcolorLayout]} />
      <View style={[styles.fontcolor2, styles.fontcolorLayout]} />
      <View style={[styles.redcolor2, styles.fontcolorLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  fontcolorLayout: {
    marginLeft: 11,
    height: 30,
    width: 30,
    borderRadius: Border.br_6xs,
  },
  primarycolor: {
    backgroundColor: Color.primaryColor,
    height: 30,
    width: 30,
    borderRadius: Border.br_6xs,
  },
  secondarycolor: {
    backgroundColor: Color.secondaryColor,
  },
  fontcolor: {
    backgroundColor: Color.colorDarkslategray_100,
  },
  fontcolor2: {
    backgroundColor: Color.instructorButton,
  },
  redcolor2: {
    backgroundColor: Color.red2,
  },
  colorSyles: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flexDirection: "row",
    padding: Padding.p_xl,
  },
});

export default ColorSyles;
