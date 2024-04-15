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

const Group5 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.group, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "TheoryTest" })
      }
    >
      <Image
        style={styles.theoryOnOffIcon}
        contentFit="cover"
        source={require("../assets/theory-on-off1.png")}
      />
      <Text style={styles.theoryTest}>Theory Test</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  theoryOnOffIcon: {
    width: 30,
    height: 30,
  },
  theoryTest: {
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

export default Group5;
