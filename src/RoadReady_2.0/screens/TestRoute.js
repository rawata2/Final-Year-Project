import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { Image } from "expo-image";

const TestRoute = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.name
  console.log(name)
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
          {name ==  "charlestown" ?
            <View>
              <Image source={require("../assets/charlestown.png")}/>
            </View>
            : name == "Finglas" ?
            <View>
              <iframe src="https://www.google.com/maps/embed?pb=!1m58!1m12!1m3!1d9516.088501476876!2d-6.307800119278631!3d53.396544101542545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x48670df799192299%3A0x4a18ad79d40206f8!2sRSA%20Finglas%20Driving%20Test%20Centre%2C%20Jamestown%20Road%2C%20Finglas%2C%20Dublin!3m2!1d53.3954355!2d-6.2954319!4m3!3m2!1d53.3984217!2d-6.2910203!4m3!3m2!1d53.4000846!2d-6.2938978!4m3!3m2!1d53.4011657!2d-6.2953354!4m3!3m2!1d53.4009578!2d-6.2952872!4m3!3m2!1d53.402767999999995!2d-6.3022126!4m3!3m2!1d53.3912913!2d-6.298747199999999!4m3!3m2!1d53.39156!2d-6.298049799999999!4m3!3m2!1d53.3903444!2d-6.2982108!4m3!3m2!1d53.3949765!2d-6.2950349999999995!5e0!3m2!1sen!2sie!4v1713305732439!5m2!1sen!2sie"></iframe>            
            </View>
            : 
            <View>
            </View>
            }
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
  )
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
