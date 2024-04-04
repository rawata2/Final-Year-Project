import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../components/GlobalStyles";

const TestCentre1 = () => {
  return (
    <View style={styles.testCentre}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.header}>
            <Text style={styles.drivingTest}>Test Centre</Text>
            <Image
              style={styles.iconHamburgerMenu}
              contentFit="cover"
              source={require("../assets/-icon-hamburger-menu1.png")}
            />
          </View>
          <View style={styles.header1}>
            <Text style={styles.drivingTest}>Test Centre</Text>
            <Image
              style={styles.iconHamburgerMenu}
              contentFit="cover"
              source={require("../assets/-icon-hamburger-menu1.png")}
            />
          </View>
        </View>
        <View style={styles.frame2}>
          <Text style={styles.selectATest}>Select a Test Route</Text>
          <Text style={styles.selectATest1}>Select a Test Route</Text>
        </View>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <View style={styles.route1Wrapper}>
              <Text style={styles.selectATest}>Route 1</Text>
            </View>
            <View style={styles.route1Container}>
              <Text style={styles.selectATest}>Route 1</Text>
            </View>
          </View>
          <View style={styles.frame6}>
            <View style={styles.route1Wrapper}>
              <Text style={styles.selectATest}>Route 2</Text>
            </View>
            <View style={styles.route1Container}>
              <Text style={styles.selectATest}>Route 2</Text>
            </View>
          </View>
          <View style={styles.frame6}>
            <View style={styles.route1Wrapper}>
              <Text style={styles.selectATest}>Route 3</Text>
            </View>
            <View style={styles.route1Container}>
              <Text style={styles.selectATest}>Route 3</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame8}>
          <View style={styles.frame9}>
            <View style={styles.frame5}>
              <View style={styles.route1Wrapper}>
                <Text style={styles.selectATest}>Route 4</Text>
              </View>
              <View style={styles.route1Container}>
                <Text style={styles.selectATest}>Route 4</Text>
              </View>
            </View>
            <View style={styles.frame11}>
              <View style={styles.route5Wrapper}>
                <Text style={styles.selectATest}>Route 5</Text>
              </View>
              <View style={styles.route5Container}>
                <Text style={styles.selectATest}>Route 5</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame12}>
            <View style={styles.route5Wrapper}>
              <Text style={styles.selectATest}>Route 6</Text>
            </View>
            <View style={styles.route5Container}>
              <Text style={styles.selectATest}>Route 6</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  header1: {
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
    marginTop: -99,
  },
  frame1: {
    width: 393,
    height: 99,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  selectATest: {
    position: "relative",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  selectATest1: {
    position: "relative",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginTop: -24,
  },
  frame2: {
    width: 181,
    height: 24,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 7,
    marginTop: 25,
  },
  frame: {
    width: 393,
    height: 148,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  route1Wrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 331,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  route1Container: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 331,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: -50,
  },
  frame5: {
    width: 331,
    height: 50,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 7,
  },
  frame6: {
    width: 331,
    height: 50,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 7,
    marginTop: 9,
  },
  frame4: {
    width: 338,
    height: 168,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  route5Wrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mid,
    paddingVertical: 0,
  },
  route5Container: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mid,
    paddingVertical: 0,
    marginTop: -50,
  },
  frame11: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    marginLeft: 0,
    marginTop: 9,
  },
  frame9: {
    width: 338,
    height: 109,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame12: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    marginLeft: 0,
    marginTop: 14,
  },
  frame8: {
    width: 338,
    height: 173,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 9,
  },
  frame3: {
    width: 338,
    height: 350,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25,
  },
  testCentre: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default TestCentre1;
