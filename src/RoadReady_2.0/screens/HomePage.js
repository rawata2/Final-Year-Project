import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homepage, styles.homepageLayout]}>
      <View style={[styles.titlebar, styles.titlebarFlexBox]}>
        <View style={styles.backButton} />
        <TouchableOpacity
          style={[styles.hamburgerOnOff, styles.iconLayout1]}
          activeOpacity={0.2}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector32.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.main}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.mainScrollViewContent}
      >
        <Image
          style={[styles.mainChild, styles.homepageLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <View style={styles.alltiles}>
          <View style={[styles.iconscontainer, styles.driverIcon2FlexBox]}>
            <TouchableOpacity
              style={styles.drivingiconFlexBox}
              activeOpacity={0.2}
              onPress={() =>
                navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
              }
            >
              <View style={styles.image}>
                <Image
                  style={[styles.testIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/test.png")}
                />
                <Text style={[styles.drivingTest, styles.drivingTestTypo]}>
                  Driving test
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.learnericon, styles.drivingiconFlexBox]}
              activeOpacity={0.2}
              onPress={() =>
                navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
              }
            >
              <View style={styles.image}>
                <Image
                  style={styles.image4Icon}
                  contentFit="cover"
                  source={require("../assets/image-4.png")}
                />
                <Text style={[styles.drivingTest, styles.drivingTestTypo]}>
                  Theory Test
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.iconscontainer, styles.driverIcon2FlexBox]}>
            <TouchableOpacity
              style={styles.drivingiconFlexBox}
              activeOpacity={0.2}
              onPress={() =>
                navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
              }
            >
              <View style={styles.image}>
                <Image
                  style={[styles.findInstructorsIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/find-instructors.png")}
                />
                <Text style={[styles.drivingTest, styles.drivingTestTypo]}>
                  Find Instructors
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.learnericon, styles.drivingiconFlexBox]}
              activeOpacity={0.2}
              onPress={() =>
                navigation.navigate("DrawerRoot", { screen: "RoutesPage" })
              }
            >
              <View style={styles.image}>
                <Image
                  style={styles.createRoutesIcon}
                  contentFit="cover"
                  source={require("../assets/create-routes.png")}
                />
                <Text style={styles.drivingTestTypo}>Create own Routes</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  homepageLayout: {
    width: "100%",
    overflow: "hidden",
  },
  titlebarFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.secondaryColor,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  driverIcon2FlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    width: 158,
    borderRadius: Border.br_3xs,
  },
  drivingTestTypo: {
    marginTop: 3,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.subheadlineBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.subheadlineBold_size,
  },
  drivingiconFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    backgroundColor: Color.secondaryColor,
    alignItems: "center",
    flex: 1,
  },
  backButton: {
    height: 20,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  vectorIcon: {
    width: 18,
    height: 13,
  },
  hamburgerOnOff: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_4xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  titlebar: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_34xl,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_mini,
  },
  mainChild: {
    maxWidth: "100%",
    height: 387,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  testIcon: {
    height: 100,
  },
  drivingTest: {
    alignSelf: "stretch",
  },
  image: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  image4Icon: {
    width: 159,
    height: 100,
    borderRadius: Border.br_3xs,
  },
  learnericon: {
    marginLeft: 18,
  },
  iconscontainer: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  findInstructorsIcon: {
    height: 99,
  },
  createRoutesIcon: {
    borderRadius: 8,
    width: 163,
    height: 100,
  },
  alltiles: {
    borderTopLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_4xs,
    marginTop: -43,
    alignSelf: "stretch",
    alignItems: "center",
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  homepage: {
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default HomePage;
