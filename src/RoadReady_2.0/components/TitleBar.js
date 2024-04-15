import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const getStyleValue = (key, value) => {
  const navigation = useNavigation();

  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TitleBar = ({
  home,
  hamburgerOnOffFlex,
  onButttonPress,
  onHamburgerOnOffPress,
}) => {
  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", hamburgerOnOffFlex),
    };
  }, [hamburgerOnOffFlex]);

  return (
    <View style={[styles.titlebar, styles.butttonFlexBox]}>
      <View style={[styles.backButton, styles.butttonFlexBox]}>
        <Pressable
          style={[styles.buttton, styles.butttonFlexBox]}
          onPress={onButttonPress}
        >
          <Image
            style={styles.backOnOffIcon}
            contentFit="cover"
            source={require("../assets/back-on-off1.png")}
          />
          <Text style={[styles.home, homeStyle]}>{home}</Text>
        </Pressable>
      </View>
      <TouchableOpacity
        style={styles.hamburgerOnOff}
        activeOpacity={0.2}
        onPress={onHamburgerOnOffPress}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector32.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  butttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  backOnOffIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.subheadlineBold_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    marginLeft: 3,
  },
  buttton: {
    width: 62,
  },
  backButton: {
    flex: 1,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 18,
    height: 13,
  },
  hamburgerOnOff: {
    width: 30,
    height: 30,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    justifyContent: "center",
  },
  titlebar: {
    alignSelf: "stretch",
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.secondaryColor,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_34xl,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_mini,
    justifyContent: "center",
  },
});

export default TitleBar;
