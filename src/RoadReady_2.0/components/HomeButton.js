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
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const HomeButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.homeButton, style, styles.groupFlexBox]}
      onPress={() =>
        navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
      }
    >
      <View style={[styles.group, styles.groupFlexBox]}>
        <Image
          style={styles.ionhomeIcon}
          contentFit="cover"
          source={require("../assets/ionhome.png")}
        />
        <Text style={styles.home}>Home</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
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
    flexDirection: "row",
  },
  homeButton: {
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
    overflow: "hidden",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
  },
});

export default HomeButton;
