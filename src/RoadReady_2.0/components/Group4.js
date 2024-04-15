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
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const Group4 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.group, style, styles.groupFlexBox]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "DrivingTest" })
      }
    >
      <View style={[styles.drivingOnOff, styles.groupFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Text style={styles.drivingTest}>Driving Test</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  drivingOnOff: {
    width: 30,
    height: 30,
    overflow: "hidden",
    padding: Padding.p_12xs,
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
    alignSelf: "stretch",
  },
});

export default Group4;
