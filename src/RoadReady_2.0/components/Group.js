import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.group, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
      }
    >
      <Image
        style={styles.ionhomeIcon}
        contentFit="cover"
        source={require("../assets/home-onoff2.png")}
      />
      <Text style={styles.home}>Home</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ionhomeIcon: {
    width: 30,
    height: 30,
  },
  home: {
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
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Group;
