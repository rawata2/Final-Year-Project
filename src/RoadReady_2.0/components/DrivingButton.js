import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const DrivingButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.drivingButton, style]}
      onPress={() =>
        navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
      }
    >
      <View style={[styles.group, styles.groupFlexBox1]}>
        <View style={[styles.drivingOnOff, styles.groupFlexBox1]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Text style={styles.drivingTest}>Driving Test</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupFlexBox1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  drivingOnOff: {
    width: 30,
    height: 30,
    padding: Padding.p_12xs,
    overflow: "hidden",
    flexDirection: "row",
  },
  drivingTest: {
    flex: 1,
    fontSize: FontSize.subHeading_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.subHeading,
    color: Color.red2,
    textAlign: "left",
    marginLeft: 20,
  },
  group: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  drivingButton: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.red2,
    borderWidth: 4,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default DrivingButton;
