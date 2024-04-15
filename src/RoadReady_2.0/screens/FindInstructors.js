import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import Instructor from "../components/Instructor";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const FindInstructors = () => {
  const [selectionOpen, setSelectionOpen] = useState(false);
  const [selectionValue, setSelectionValue] = useState();
  const [selectionItems, setSelectionItems] = useState([
    { value: "Dublin", label: "Dublin" },
    { value: "Meath", label: "Meath" },
    { value: "Cork", label: "Cork" },
  ]);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.findInstructors}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.findInstructorsScrollViewContent}
    >
      <TitleBar
        home="Back"
        hamburgerOnOffFlex={1}
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <ScrollView
        style={styles.main}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollViewContent}
      >
        <View style={styles.county}>
          <Text style={[styles.chooseACounty, styles.chooseACountyTypo]}>
            Choose a county:
          </Text>
          <View style={[styles.selection, styles.selectionSpaceBlock]}>
            <DropDownPicker
              style={styles.dropdownpicker}
              open={selectionOpen}
              setOpen={setSelectionOpen}
              value={selectionValue}
              setValue={setSelectionValue}
              placeholder="All counties"
              items={selectionItems}
              labelStyle={styles.selectionValue}
              dropDownContainerStyle={styles.selectiondropDownContainer}
            />
          </View>
        </View>
        <View style={styles.drivingInsSpaceBlock}>
          <Text style={[styles.searchDrivingIns, styles.chooseACountyTypo]}>
            Search driving instructor, ADI or school:
          </Text>
          <TextInput
            style={[styles.selection1, styles.selection1Bg]}
            placeholder="Type here"
            placeholderTextColor="#404040"
          />
        </View>
        <View style={[styles.centerContainer, styles.drivingInsSpaceBlock]}>
          <View style={[styles.innercontainer, styles.selection1Bg]}>
            <Instructor />
            <Instructor
              verifyIconPaddingHorizontal="unset"
              verifyIconPaddingVertical="unset"
              verifyIconMarginTop={10}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectionValue: {
    color: "#404040",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  selectiondropDownContainer: {
    backgroundColor: "#f1f1f1",
  },
  mainScrollViewContent: {
    flexDirection: "column",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  findInstructorsScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  chooseACountyTypo: {
    textAlign: "center",
    color: Color.lightLabelPrimary,
    letterSpacing: 0,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
  },
  selectionSpaceBlock: {
    marginTop: 10,
    paddingHorizontal: Padding.p_lg,
    height: 50,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    justifyContent: "center",
  },
  selection1Bg: {
    backgroundColor: Color.colorDarkslategray_200,
    alignSelf: "stretch",
  },
  drivingInsSpaceBlock: {
    marginTop: 13,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  chooseACounty: {
    fontSize: FontSize.subHeading_size,
    textAlign: "center",
    color: Color.lightLabelPrimary,
    letterSpacing: 0,
  },
  dropdownpicker: {
    backgroundColor: Color.secondaryColor,
  },
  selection: {
    alignSelf: "stretch",
  },
  county: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  searchDrivingIns: {
    fontSize: FontSize.size_lg,
  },
  selection1: {
    marginTop: 10,
    paddingHorizontal: Padding.p_lg,
    height: 50,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    backgroundColor: Color.colorDarkslategray_200,
    fontSize: FontSize.subHeading_size,
  },
  innercontainer: {
    borderRadius: 20,
    padding: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  centerContainer: {
    height: 458,
    alignItems: "center",
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  findInstructors: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default FindInstructors;
