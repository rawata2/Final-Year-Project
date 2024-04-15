import * as React from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const HomeOnOffIcon = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.homeOnOff, style]}
      onPress={() =>
        navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
      }
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/home-onoff.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  homeOnOff: {
    width: 30,
    height: 30,
  },
});

export default HomeOnOffIcon;
