import * as React from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const ProfileOnOffIcon = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.profileOnOff, style]}
      onPress={() =>
        navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
      }
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/profile-on-off4.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  profileOnOff: {
    width: 30,
    height: 30,
  },
});

export default ProfileOnOffIcon;
