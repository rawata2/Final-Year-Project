import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RoadTraffic = ({
  image202402070026273702,
  roadTrafficSigns,
  propOverflow,
  propMarginLeft,
  propWidth,
}) => {
  const roadTrafficStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", propOverflow),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propOverflow, propMarginLeft]);

  const image202402070026273702IconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.roadtraffic, roadTrafficStyle]}>
      <View style={styles.innerpractice}>
        <Image
          style={[
            styles.image202402070026273702Icon,
            image202402070026273702IconStyle,
          ]}
          contentFit="cover"
          source={image202402070026273702}
        />
        <Text style={styles.roadTraffic}>{roadTrafficSigns}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image202402070026273702Icon: {
    width: 98,
    height: 70,
  },
  roadTraffic: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.subHeading,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    marginTop: 8,
  },
  innerpractice: {
    justifyContent: "flex-end",
  },
  roadtraffic: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    overflow: "hidden",
    padding: Padding.p_3xs,
    marginLeft: 20,
    justifyContent: "flex-end",
  },
});

export default RoadTraffic;
