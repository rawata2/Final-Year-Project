import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding } from "../GlobalStyles";

const DrivingOnOff2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.drivingOnOff, style]}
      onPress={() => navigation.navigate("DrivingTest")}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 27,
    height: 27,
  },
  drivingOnOff: {
    width: 30,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_12xs,
  },
});

export default DrivingOnOff2;
