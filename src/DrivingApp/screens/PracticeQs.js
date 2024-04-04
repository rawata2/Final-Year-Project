import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, FontFamily, Color, Border, Padding } from "../components/GlobalStyles";

const PracticeQs = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState("All counties");
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    { value: "Carlow", label: "Carlow" },
    { value: "Cavan", label: "Cavan" },
    { value: "Clare", label: "Clare" },
    { value: "Cork", label: "Cork" },
    { value: "Donegal", label: "Donegal" },
    { value: "Dublin", label: "Dublin" },
    { value: "Galway", label: "Galway" },
    { value: "Kerry", label: "Kerry" },
    { value: "Kildare", label: "Kildare" },
    { value: "Kilkenny", label: "Kilkenny" },
    { value: "Laois", label: "Laois" },
    { value: "Leitrim", label: "Leitrim" },
    { value: "Limerick", label: "Limerick" },
    { value: "Longford", label: "Longford" },
    { value: "Louth", label: "Louth" },
    { value: "Mayo", label: "Mayo" },
    { value: "Meath", label: "Meath" },
    { value: "Monaghan", label: "Monaghan" },
    { value: "Offaly", label: "Offaly" },
    { value: "Roscommon", label: "Roscommon" },
    { value: "Sligo", label: "Sligo" },
    { value: "Tipperary", label: "Tipperary" },
    { value: "Waterford", label: "Waterford" },
    { value: "Westmeath", label: "Westmeath" },
    { value: "Wexford", label: "Wexford" },
    { value: "Wicklow", label: "Wicklow" },
  ]);
  const [frameDropdown1Open, setFrameDropdown1Open] = useState(false);
  const [frameDropdown1Value, setFrameDropdown1Value] =
    useState("All counties");
  const [frameDropdown1Items, setFrameDropdown1Items] = useState([
    { value: "Carlow", label: "Carlow" },
    { value: "Cavan", label: "Cavan" },
    { value: "Clare", label: "Clare" },
    { value: "Cork", label: "Cork" },
    { value: "Donegal", label: "Donegal" },
    { value: "Dublin", label: "Dublin" },
    { value: "Galway", label: "Galway" },
    { value: "Kerry", label: "Kerry" },
    { value: "Kildare", label: "Kildare" },
    { value: "Kilkenny", label: "Kilkenny" },
    { value: "Laois", label: "Laois" },
    { value: "Leitrim", label: "Leitrim" },
    { value: "Limerick", label: "Limerick" },
    { value: "Longford", label: "Longford" },
    { value: "Louth", label: "Louth" },
    { value: "Mayo", label: "Mayo" },
    { value: "Meath", label: "Meath" },
    { value: "Monaghan", label: "Monaghan" },
    { value: "Offaly", label: "Offaly" },
    { value: "Roscommon", label: "Roscommon" },
    { value: "Sligo", label: "Sligo" },
    { value: "Tipperary", label: "Tipperary" },
    { value: "Waterford", label: "Waterford" },
    { value: "Westmeath", label: "Westmeath" },
    { value: "Wexford", label: "Wexford" },
    { value: "Wicklow", label: "Wicklow" },
  ]);
  const [frameDropdown2Open, setFrameDropdown2Open] = useState(false);
  const [frameDropdown2Value, setFrameDropdown2Value] =
    useState("All counties");
  const [frameDropdown2Items, setFrameDropdown2Items] = useState([
    { value: "Carlow", label: "Carlow" },
    { value: "Cavan", label: "Cavan" },
    { value: "Clare", label: "Clare" },
    { value: "Cork", label: "Cork" },
    { value: "Donegal", label: "Donegal" },
    { value: "Dublin", label: "Dublin" },
    { value: "Galway", label: "Galway" },
    { value: "Kerry", label: "Kerry" },
    { value: "Kildare", label: "Kildare" },
    { value: "Kilkenny", label: "Kilkenny" },
    { value: "Laois", label: "Laois" },
    { value: "Leitrim", label: "Leitrim" },
    { value: "Limerick", label: "Limerick" },
    { value: "Longford", label: "Longford" },
    { value: "Louth", label: "Louth" },
    { value: "Mayo", label: "Mayo" },
    { value: "Meath", label: "Meath" },
    { value: "Monaghan", label: "Monaghan" },
    { value: "Offaly", label: "Offaly" },
    { value: "Roscommon", label: "Roscommon" },
    { value: "Sligo", label: "Sligo" },
    { value: "Tipperary", label: "Tipperary" },
    { value: "Waterford", label: "Waterford" },
    { value: "Westmeath", label: "Westmeath" },
    { value: "Wexford", label: "Wexford" },
    { value: "Wicklow", label: "Wicklow" },
  ]);
  const [frameDropdown3Open, setFrameDropdown3Open] = useState(false);
  const [frameDropdown3Value, setFrameDropdown3Value] =
    useState("All counties");
  const [frameDropdown3Items, setFrameDropdown3Items] = useState([
    { value: "Carlow", label: "Carlow" },
    { value: "Cavan", label: "Cavan" },
    { value: "Clare", label: "Clare" },
    { value: "Cork", label: "Cork" },
    { value: "Donegal", label: "Donegal" },
    { value: "Dublin", label: "Dublin" },
    { value: "Galway", label: "Galway" },
    { value: "Kerry", label: "Kerry" },
    { value: "Kildare", label: "Kildare" },
    { value: "Kilkenny", label: "Kilkenny" },
    { value: "Laois", label: "Laois" },
    { value: "Leitrim", label: "Leitrim" },
    { value: "Limerick", label: "Limerick" },
    { value: "Longford", label: "Longford" },
    { value: "Louth", label: "Louth" },
    { value: "Mayo", label: "Mayo" },
    { value: "Meath", label: "Meath" },
    { value: "Monaghan", label: "Monaghan" },
    { value: "Offaly", label: "Offaly" },
    { value: "Roscommon", label: "Roscommon" },
    { value: "Sligo", label: "Sligo" },
    { value: "Tipperary", label: "Tipperary" },
    { value: "Waterford", label: "Waterford" },
    { value: "Westmeath", label: "Westmeath" },
    { value: "Wexford", label: "Wexford" },
    { value: "Wicklow", label: "Wicklow" },
  ]);
  const [frameDropdown4Open, setFrameDropdown4Open] = useState(false);
  const [frameDropdown4Value, setFrameDropdown4Value] =
    useState("All counties");
  const [frameDropdown4Items, setFrameDropdown4Items] = useState([
    { value: "Carlow", label: "Carlow" },
    { value: "Cavan", label: "Cavan" },
    { value: "Clare", label: "Clare" },
    { value: "Cork", label: "Cork" },
    { value: "Donegal", label: "Donegal" },
    { value: "Dublin", label: "Dublin" },
    { value: "Galway", label: "Galway" },
    { value: "Kerry", label: "Kerry" },
    { value: "Kildare", label: "Kildare" },
    { value: "Kilkenny", label: "Kilkenny" },
    { value: "Laois", label: "Laois" },
    { value: "Leitrim", label: "Leitrim" },
    { value: "Limerick", label: "Limerick" },
    { value: "Longford", label: "Longford" },
    { value: "Louth", label: "Louth" },
    { value: "Mayo", label: "Mayo" },
    { value: "Meath", label: "Meath" },
    { value: "Monaghan", label: "Monaghan" },
    { value: "Offaly", label: "Offaly" },
    { value: "Roscommon", label: "Roscommon" },
    { value: "Sligo", label: "Sligo" },
    { value: "Tipperary", label: "Tipperary" },
    { value: "Waterford", label: "Waterford" },
    { value: "Westmeath", label: "Westmeath" },
    { value: "Wexford", label: "Wexford" },
    { value: "Wicklow", label: "Wicklow" },
  ]);

  return (
    <View style={styles.practiceQs}>
      <View style={styles.frame}>
        <View style={styles.header}>
          <Text style={styles.drivingTest}>Practice</Text>
          <Image
            style={styles.iconHamburgerMenu}
            contentFit="cover"
            source={require("../assets/-icon-hamburger-menu1.png")}
          />
        </View>
        <View style={styles.wrapper}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={frameDropdownOpen}
            setOpen={setFrameDropdownOpen}
            value={frameDropdownValue}
            setValue={setFrameDropdownValue}
            placeholder="All counties"
            items={frameDropdownItems}
            labelStyle={styles.frameDropdownValue}
            dropDownContainerStyle={styles.frameDropdowndropDownContainer}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.image19Parent}>
            <Image
              style={styles.image19Icon}
              contentFit="cover"
              source={require("../assets/image-19.png")}
            />
            <View style={styles.frameChild} />
          </View>
          <Text style={styles.whatDoesThis}>What does this sign tell you?</Text>
        </View>
        <View style={styles.frame3}>
          <View style={styles.frame4}>
            <View style={styles.container}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={frameDropdown1Open}
                setOpen={setFrameDropdown1Open}
                value={frameDropdown1Value}
                setValue={setFrameDropdown1Value}
                placeholder="All counties"
                items={frameDropdown1Items}
                labelStyle={styles.frameDropdown1Value}
                textStyle={styles.frameDropdown1Text}
                dropDownContainerStyle={styles.frameDropdown1dropDownContainer}
              />
            </View>
            <View style={styles.frameView}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={frameDropdown2Open}
                setOpen={setFrameDropdown2Open}
                value={frameDropdown2Value}
                setValue={setFrameDropdown2Value}
                placeholder="All counties"
                items={frameDropdown2Items}
                labelStyle={styles.frameDropdown2Value}
                textStyle={styles.frameDropdown2Text}
                dropDownContainerStyle={styles.frameDropdown2dropDownContainer}
              />
            </View>
            <View style={styles.frameView}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={frameDropdown3Open}
                setOpen={setFrameDropdown3Open}
                value={frameDropdown3Value}
                setValue={setFrameDropdown3Value}
                placeholder="All counties"
                items={frameDropdown3Items}
                labelStyle={styles.frameDropdown3Value}
                textStyle={styles.frameDropdown3Text}
                dropDownContainerStyle={styles.frameDropdown3dropDownContainer}
              />
            </View>
            <View style={styles.wrapper2}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={frameDropdown4Open}
                setOpen={setFrameDropdown4Open}
                value={frameDropdown4Value}
                setValue={setFrameDropdown4Value}
                placeholder="All counties"
                items={frameDropdown4Items}
                labelStyle={styles.frameDropdown4Value}
                textStyle={styles.frameDropdown4Text}
                dropDownContainerStyle={styles.frameDropdown4dropDownContainer}
              />
            </View>
          </View>
          <View style={styles.submitAnswerWrapper}>
            <Text style={styles.submitAnswer}>Submit answer</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdowndropDownContainer: {
    backgroundColor: "rgba(64, 64, 64, 0.07)",
  },
  frameDropdown1Value: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown1Text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown1dropDownContainer: {
    backgroundColor: "rgba(64, 64, 64, 0.07)",
  },
  frameDropdown2Value: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown2Text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown2dropDownContainer: {
    backgroundColor: "rgba(64, 64, 64, 0.07)",
  },
  frameDropdown3Value: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown3Text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown3dropDownContainer: {
    backgroundColor: "rgba(64, 64, 64, 0.07)",
  },
  frameDropdown4Value: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown4Text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameDropdown4dropDownContainer: {
    backgroundColor: "rgba(64, 64, 64, 0.07)",
  },
  drivingTest: {
    position: "relative",
    fontSize: FontSize.size_21xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 246,
    height: 34,
  },
  iconHamburgerMenu: {
    position: "relative",
    width: 23,
    height: 25,
    marginLeft: 26,
  },
  header: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 393,
    height: 99,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingTop: Padding.p_13xl,
    paddingBottom: Padding.p_14xl,
  },
  dropdownpicker: {
    backgroundColor: Color.colorDarkslategray_200,
  },
  wrapper: {
    borderRadius: Border.br_3xs,
    width: 259,
    height: 49,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 19,
    paddingVertical: 0,
    marginLeft: 14,
    marginTop: 27,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 393,
    height: 175,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image19Icon: {
    position: "relative",
    borderRadius: Border.br_3xs,
    width: 342,
    height: 206,
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 342,
    height: 205,
    marginTop: -205,
  },
  image19Parent: {
    width: 342,
    height: 206,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 1,
  },
  whatDoesThis: {
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 285,
    height: 23,
    marginRight: 114,
    marginTop: 27,
  },
  frame2: {
    width: 399,
    height: 256,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    borderRadius: Border.br_3xs,
    width: 342,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_6xs,
    marginLeft: 1,
  },
  frameView: {
    borderRadius: Border.br_3xs,
    width: 342,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_6xs,
    marginLeft: 1,
    marginTop: 11,
  },
  wrapper2: {
    borderRadius: Border.br_3xs,
    width: 342,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_6xs,
    marginLeft: 1,
    marginTop: 11,
  },
  frame4: {
    width: 343,
    height: 169,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  submitAnswer: {
    position: "relative",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 23,
  },
  submitAnswerWrapper: {
    borderRadius: Border.br_94xl,
    backgroundColor: Color.colorLightcoral_100,
    width: 341,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 14,
    marginLeft: 2,
    marginTop: 27,
  },
  frame3: {
    width: 343,
    height: 246,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 18,
  },
  frame1: {
    position: "absolute",
    top: 220,
    left: -3,
    width: 399,
    height: 520,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  practiceQs: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default PracticeQs;
