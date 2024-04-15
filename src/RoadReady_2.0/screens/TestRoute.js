import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TestRoute = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.testRoute, styles.testFlexBox]}>
      <TitleBar
        home="Back"
        hamburgerOnOffFlex={1}
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <ScrollView
        style={styles.selection}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.selectionScrollViewContent}
      >
        <Text style={styles.selectATest}>Select a Test Route</Text>
        <View style={[styles.testCentres, styles.testFlexBox]}>
          <Pressable style={[styles.charlestown, styles.charlestownSpaceBlock]}>
            <Text style={[styles.route1, styles.routeTypo]}>Route 1</Text>
          </Pressable>
          <Pressable
            style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
          >
            <Text style={[styles.route2, styles.routeTypo]}>Route 2</Text>
          </Pressable>
          <Pressable
            style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
          >
            <Text style={[styles.route2, styles.routeTypo]}>Route 3</Text>
          </Pressable>
          <Pressable
            style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
          >
            <Text style={[styles.route2, styles.routeTypo]}>Route 4</Text>
          </Pressable>
          <Pressable
            style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
          >
            <Text style={[styles.route2, styles.routeTypo]}>Route 5</Text>
          </Pressable>
          <Pressable
            style={[styles.dunLaoghaire, styles.charlestownSpaceBlock]}
          >
            <Text style={[styles.route2, styles.routeTypo]}>Route 6</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectionScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  testFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  charlestownSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_lg,
    height: 50,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  routeTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.subHeading_size,
  },
  selectATest: {
    color: Color.lightLabelPrimary,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.subHeading_size,
    alignSelf: "stretch",
  },
  route1: {
    display: "flex",
    width: 120,
    alignItems: "center",
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  charlestown: {
    alignSelf: "stretch",
  },
  route2: {
    alignSelf: "stretch",
  },
  dunLaoghaire: {
    width: 331,
    marginTop: 10,
  },
  testCentres: {
    marginTop: 20,
  },
  selection: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
    flex: 1,
  },
  testRoute: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default TestRoute;
