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

const ProfileButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.profileButton, style, styles.groupFlexBox3]}
      onPress={() =>
        navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
      }
    >
      <View style={[styles.group, styles.groupFlexBox3]}>
        <Image
          style={styles.profileOnOffIcon}
          contentFit="cover"
          source={require("../assets/profile-on-off2.png")}
        />
        <Text style={styles.profile}>Profile</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupFlexBox3: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
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
    flexDirection: "row",
  },
  profileButton: {
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

export default ProfileButton;
