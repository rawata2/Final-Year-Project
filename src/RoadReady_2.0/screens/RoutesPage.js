import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const RoutesPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.routesPage, styles.routesPageFlexBox]}>
      <TitleBar
        home="Back"
        hamburgerOnOffFlex={1}
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <View style={[styles.underconsText, styles.routesPageFlexBox]}>
        <Text style={styles.underConstruction}>Under Construction</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  routesPageFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  underConstruction: {
    fontSize: FontSize.subHeading_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.subHeading,
    color: "#3194ee",
    textAlign: "center",
    flex: 1,
  },
  underconsText: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_181xl,
  },
  routesPage: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default RoutesPage;
