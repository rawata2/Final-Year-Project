import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { Color, FontFamily, FontSize, Border } from "../components/GlobalStyles";

const TestCentre = () => {
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

  return (
    <View style={styles.findInstructors}>
      <View style={[styles.frame, styles.frameLayout1]}>
        <View style={styles.frame1}>
          <View style={styles.frameChild} />
          <View style={[styles.email, styles.emailPosition]}>
            <Text style={[styles.email1, styles.email1FlexBox]}>Email</Text>
            <Text style={styles.lowerDorsetStTypo}>
              bhbrianhewitt@gmail.com
            </Text>
          </View>
          <Text style={[styles.dublin, styles.dublinTypo]}>Dublin</Text>
          <Text style={[styles.county, styles.countyTypo]}>County</Text>
          <View style={[styles.address, styles.emailPosition]}>
            <Text style={[styles.address1, styles.countyTypo]}>Address</Text>
            <Text
              style={[styles.lowerDorsetSt, styles.lowerDorsetStTypo]}
            >{`14 Lower Dorset St,
Dublin 1`}</Text>
          </View>
          <Text style={[styles.brianHewitt, styles.brianHewittFlexBox]}>
            Brian Hewitt
          </Text>
          <Text style={[styles.brianHewitt1, styles.brianHewitt1Typo]}>
            BRIAN HEWITT
          </Text>
          <Text style={[styles.edt, styles.edtTypo]}>EDT</Text>
          <Text style={[styles.adiNumber, styles.adiTypo]}>
            ADI NUMBER | 35758
          </Text>
          <Image
            style={[styles.verifiedAccountIcon, styles.verifiedIconLayout]}
            contentFit="cover"
            source={require("../assets/verified-account.png")}
          />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.email2, styles.email2Position]}>
            <Text style={[styles.email1, styles.email1FlexBox]}>Email</Text>
            <Text style={styles.lowerDorsetStTypo}>
              info@airportdrivingschool.ie
            </Text>
          </View>
          <Text style={[styles.dublin1, styles.meathPosition]}>Dublin</Text>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={[styles.kildare, styles.meathPosition]}>Kildare</Text>
          <View style={[styles.frameView, styles.frameLayout]} />
          <Text style={[styles.meath, styles.meathPosition]}>Meath</Text>
          <Text style={[styles.county1, styles.meathPosition]}>County</Text>
          <View style={[styles.address2, styles.email2Position]}>
            <Text style={[styles.address1, styles.countyTypo]}>Address</Text>
            <Text
              style={[styles.lowerDorsetSt, styles.lowerDorsetStTypo]}
            >{`Jamestown Business
Park, Finglas, D11`}</Text>
          </View>
          <Text
            style={[styles.airportDrivingSchool, styles.brianHewittFlexBox]}
          >
            Airport Driving School
          </Text>
          <Text style={[styles.thomasMurphy, styles.brianHewitt1Typo]}>
            THOMAS MURPHY
          </Text>
          <Text style={[styles.edt1, styles.edtTypo]}>EDT</Text>
          <Text style={[styles.adiNumber1, styles.adiTypo]}>
            ADI NUMBER | 34291
          </Text>
          <Image
            style={[styles.verifiedAccountIcon1, styles.verifiedIconLayout]}
            contentFit="cover"
            source={require("../assets/verified-account.png")}
          />
          <View style={[styles.rectangleView, styles.searchPosition]} />
          <View style={[styles.phone, styles.phoneLayout]}>
            <Text style={[styles.phone1, styles.countyTypo]}>Phone</Text>
            <View style={[styles.frame2, styles.framePosition1]}>
              <Text style={styles.text}>0861529034</Text>
            </View>
          </View>
          <View style={[styles.phone2, styles.phoneLayout]}>
            <Text style={[styles.phone1, styles.countyTypo]}>Phone</Text>
            <View style={[styles.frame2, styles.framePosition1]}>
              <Text style={styles.text}>018068000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame4, styles.frame4Position]}>
        <View style={[styles.header, styles.frame4Position]}>
          <Image
            style={styles.iconHamburgerMenu}
            contentFit="cover"
            source={require("../assets/-icon-hamburger-menu.png")}
          />
          <Text style={[styles.findInstructors1, styles.typeHereTypo]}>
            Find Instructors
          </Text>
        </View>
        <View style={styles.frame5}>
          <Text style={styles.chooseADriving}>Choose a county:</Text>
        </View>
        <View style={[styles.frame6, styles.framePosition1]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
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
        <View style={[styles.frame7, styles.framePosition]}>
          <Text style={[styles.search, styles.searchPosition]}>
            Search driving instructor, ADI or school:
          </Text>
        </View>
        <View style={[styles.frame8, styles.framePosition]}>
          <TextInput
            style={[styles.typeHere, styles.wrapperLayout]}
            placeholder="Type Here"
            placeholderTextColor="#000"
          />
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
  frameLayout1: {
    height: 407,
    left: 0,
  },
  emailPosition: {
    width: 246,
    top: 53,
    position: "absolute",
  },
  email1FlexBox: {
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
  },
  dublinTypo: {
    width: 37,
    left: 54,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  countyTypo: {
    width: 39,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  lowerDorsetStTypo: {
    width: 272,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: 16,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
  },
  brianHewittFlexBox: {
    height: 9,
    color: Color.colorFirebrick_100,
    left: 8,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
  },
  brianHewitt1Typo: {
    height: 23,
    fontSize: FontSize.size_xl,
    left: 5,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  edtTypo: {
    width: 30,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    letterSpacing: 0,
    left: 143,
    alignItems: "center",
    position: "absolute",
  },
  adiTypo: {
    width: 124,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    letterSpacing: 0,
    left: 143,
    alignItems: "center",
    position: "absolute",
  },
  verifiedIconLayout: {
    height: 14,
    width: 13,
    left: 167,
    position: "absolute",
  },
  frameLayout: {
    top: 317,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 24,
    width: 48,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  email2Position: {
    top: 225,
    width: 246,
    position: "absolute",
  },
  meathPosition: {
    top: 321,
    height: 16,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  searchPosition: {
    width: 347,
    top: 0,
    position: "absolute",
  },
  phoneLayout: {
    height: 32,
    width: 73,
    left: 5,
    position: "absolute",
  },
  framePosition1: {
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame4Position: {
    width: 393,
    top: 0,
    left: 0,
    position: "absolute",
  },
  typeHereTypo: {
    left: 40,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapperLayout: {
    width: 331,
    height: 50,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    width: 371,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 145,
    alignItems: "center",
    justifyContent: "flex-end",
    width: 48,
    backgroundColor: Color.colorGray_100,
    height: 24,
    borderRadius: Border.br_3xs,
    left: 48,
    position: "absolute",
  },
  email1: {
    width: 25,
    height: 16,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    textAlign: "center",
  },
  email: {
    left: 143,
  },
  dublin: {
    top: 149,
    height: 16,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  county: {
    left: 7,
    width: 39,
    top: 149,
    height: 16,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  address1: {
    height: 16,
    display: "flex",
    letterSpacing: 0,
    width: 39,
    alignItems: "center",
  },
  lowerDorsetSt: {
    marginTop: 6,
  },
  address: {
    left: 10,
  },
  brianHewitt: {
    top: 41,
    width: 55,
  },
  brianHewitt1: {
    top: 18,
    width: 147,
  },
  edt: {
    top: 108,
  },
  adiNumber: {
    top: 123,
  },
  verifiedAccountIcon: {
    top: 109,
  },
  frameItem: {
    left: 48,
    top: 317,
  },
  email2: {
    left: 143,
  },
  dublin1: {
    width: 37,
    left: 54,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  frameInner: {
    left: 101,
  },
  kildare: {
    left: 106,
    width: 42,
    color: Color.colorWhite,
    top: 321,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  frameView: {
    left: 154,
  },
  meath: {
    left: 161,
    width: 36,
    color: Color.colorWhite,
    top: 321,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  county1: {
    width: 39,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 7,
  },
  address2: {
    left: 10,
  },
  airportDrivingSchool: {
    top: 213,
    width: 107,
  },
  thomasMurphy: {
    top: 190,
    width: 186,
  },
  edt1: {
    top: 280,
  },
  adiNumber1: {
    top: 295,
  },
  verifiedAccountIcon1: {
    top: 281,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    height: 407,
    left: 0,
  },
  phone1: {
    height: 16,
    display: "flex",
    letterSpacing: 0,
    width: 39,
    alignItems: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    textDecoration: "underline",
    width: 87,
    left: 5,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  frame2: {
    top: 16,
    width: 92,
    height: 16,
  },
  phone: {
    top: 108,
  },
  phone2: {
    top: 280,
  },
  frame1: {
    width: 388,
    left: 24,
    top: 0,
    height: 407,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 344,
    width: 412,
    position: "absolute",
    overflow: "hidden",
  },
  iconHamburgerMenu: {
    height: "25.25%",
    width: "5.93%",
    top: "37.37%",
    right: "6.03%",
    bottom: "37.37%",
    left: "88.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  findInstructors1: {
    top: 37,
    fontSize: 35,
    color: Color.colorDarkslategray_100,
    width: 292,
    height: 18,
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  header: {
    height: 99,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
  },
  chooseADriving: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    left: 24,
    top: 0,
    position: "absolute",
  },
  frame5: {
    top: 124,
    width: 189,
    height: 24,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dropdownpicker: {
    backgroundColor: Color.colorDarkslategray_200,
  },
  wrapper: {
    left: 38,
  },
  frame6: {
    top: 160,
    width: 369,
    height: 50,
  },
  search: {
    fontSize: 18,
    textAlign: "left",
    width: 347,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    left: 24,
  },
  frame7: {
    top: 235,
    height: 22,
  },
  typeHere: {
    left: 40,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    backgroundColor: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xl,
  },
  frame8: {
    top: 269,
    height: 50,
  },
  frame4: {
    height: 319,
    overflow: "hidden",
  },
  findInstructors: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default TestCentre;
