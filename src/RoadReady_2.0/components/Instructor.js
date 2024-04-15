import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Instructor = ({
  verifyIconPaddingHorizontal,
  verifyIconPaddingVertical,
  verifyIconMarginTop,
}) => {
  const instructor1Style = useMemo(() => {
    return {
      ...getStyleValue("paddingHorizontal", verifyIconPaddingHorizontal),
      ...getStyleValue("paddingVertical", verifyIconPaddingVertical),
      ...getStyleValue("marginTop", verifyIconMarginTop),
    };
  }, [
    verifyIconPaddingHorizontal,
    verifyIconPaddingVertical,
    verifyIconMarginTop,
  ]);

  return (
    <View style={[styles.instructor1, instructor1Style]}>
      <View style={styles.nameCentre}>
        <Text style={styles.instructorName}>BRIAN HEWITT</Text>
        <Text style={styles.brianHewitt}>Brian Hewitt</Text>
      </View>
      <View style={[styles.addrEmailContianer, styles.contianerFlexBox]}>
        <View style={styles.outerAddress}>
          <Text style={[styles.address, styles.edt1Typo]}>Address</Text>
          <Text
            style={[styles.addrLine, styles.dublinTypo]}
          >{`14 Lower Dorset St,
Dublin 1`}</Text>
        </View>
        <View style={styles.outerEmail}>
          <Text style={[styles.address, styles.edt1Typo]}>Email</Text>
          <Text style={[styles.addrLine, styles.dublinTypo]}>
            bhbrianhewitt@gmail.com
          </Text>
        </View>
      </View>
      <View style={[styles.phoneEdtContianer, styles.contianerFlexBox]}>
        <View style={styles.outerAddress}>
          <Text style={[styles.address, styles.edt1Typo]}>Phone</Text>
          <Text style={[styles.addrLine, styles.dublinTypo]}>0861529034</Text>
        </View>
        <View style={styles.outerEmail}>
          <View style={styles.edt}>
            <Text style={[styles.edt1, styles.edt1Typo]}>EDT</Text>
            <Image
              style={styles.verifyIcon}
              contentFit="cover"
              source={require("../assets/verify-icon.png")}
            />
          </View>
          <Text style={[styles.addrLine, styles.dublinTypo]}>
            ADI NUMBER | 35758
          </Text>
        </View>
      </View>
      <View style={[styles.countyContainer, styles.contianerFlexBox]}>
        <View style={styles.outerCounty}>
          <View style={styles.countyPlace}>
            <Text style={[styles.address, styles.edt1Typo]}>County</Text>
          </View>
          <Pressable style={styles.name}>
            <Text style={[styles.dublin, styles.dublinTypo]}>Dublin</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianerFlexBox: {
    marginTop: 10,
    alignItems: "center",
    alignSelf: "stretch",
  },
  edt1Typo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    letterSpacing: 0,
  },
  dublinTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  instructorName: {
    fontSize: FontSize.subHeading_size,
    textAlign: "left",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  brianHewitt: {
    color: Color.colorFirebrick_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  nameCentre: {
    height: 36,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  address: {
    alignSelf: "stretch",
  },
  addrLine: {
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  outerAddress: {
    flex: 1,
    alignItems: "center",
  },
  outerEmail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addrEmailContianer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  edt1: {
    flex: 1,
  },
  verifyIcon: {
    width: 30,
    height: 30,
  },
  edt: {
    paddingRight: Padding.p_88xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  phoneEdtContianer: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countyPlace: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dublin: {
    color: Color.colorWhite,
    display: "flex",
    width: 37,
    height: 16,
    alignItems: "center",
  },
  name: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.instructorButton,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  outerCounty: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  countyContainer: {
    paddingRight: Padding.p_181xl,
    justifyContent: "center",
  },
  instructor1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default Instructor;
