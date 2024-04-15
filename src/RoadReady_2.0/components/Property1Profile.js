import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Profile = ({
  homeOnOff,
  theoryOnOff,
  instructorsOnOff,
  profileOnOff,
  propMarginTop,
}) => {
  const property1ProfileStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.property1profile, property1ProfileStyle]}>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={homeOnOff}
        />
      </View>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <View style={styles.drivingOnOff}>
          <View style={[styles.driverIcon2, styles.iconLayout]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={vector}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={theoryOnOff}
        />
      </View>
      <View style={[styles.homeOnOffWrapper, styles.driverIcon2FlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={instructorsOnOff}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  driverIcon2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  homeOnOffWrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  driverIcon2: {
    overflow: "hidden",
    padding: Padding.p_12xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  drivingOnOff: {
    flexDirection: "row",
  },
  property1profile: {
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.secondaryColor,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Property1Profile;
