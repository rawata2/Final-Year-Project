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

const Group2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.group, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "ProfilePage" })
      }
    >
      <Image
        style={styles.profileOnOffIcon}
        contentFit="cover"
        source={require("../assets/profile-on-off2.png")}
      />
      <Text style={styles.profile}>Profile</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  profileOnOffIcon: {
    width: 30,
    height: 30,
  },
  profile: {
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

export default Group2;
