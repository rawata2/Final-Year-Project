import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Fonts = () => {
  return (
    <View style={styles.fonts}>
      <View style={styles.styles}>
        <Text style={styles.heading1}>Heading 1</Text>
        <Text style={[styles.chooseADriving, styles.bodyTypo]}>Heading 2</Text>
        <Text style={[styles.heading3, styles.bodyTypo]}>Heading 3</Text>
        <Text style={[styles.body, styles.bodyTypo]}>Body</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyTypo: {
    marginTop: 10,
    width: 144,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    letterSpacing: 0,
  },
  heading1: {
    fontSize: FontSize.title_size,
    height: 38,
    width: 144,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    letterSpacing: 0,
    display: "flex",
    fontFamily: FontFamily.subheadlineBold,
    alignItems: "center",
  },
  chooseADriving: {
    fontSize: FontSize.subHeading_size,
    fontFamily: FontFamily.subHeading,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
  },
  heading3: {
    fontSize: FontSize.subheadlineBold_size,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    fontFamily: FontFamily.subheadlineBold,
  },
  body: {
    fontSize: FontSize.body_size,
    height: 13,
    fontFamily: FontFamily.subHeading,
    marginTop: 10,
  },
  styles: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: "center",
  },
  fonts: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
  },
});

export default Fonts;
