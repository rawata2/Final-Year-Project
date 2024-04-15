import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Form from "../components/Form";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp, styles.mainFlexBox]}>
      <View style={[styles.titlebar, styles.backFlexBox]}>
        <View style={[styles.backButton, styles.backFlexBox]}>
          <Pressable
            style={[styles.goBack, styles.backFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.backOnOffIcon}
              contentFit="cover"
              source={require("../assets/back-on-off11.png")}
            />
            <Text style={styles.back}>Back</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.main, styles.mainFlexBox]}>
        <Image
          style={styles.eclipseIcon}
          contentFit="cover"
          source={require("../assets/eclipse.png")}
        />
        <Form />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  backFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  backOnOffIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  back: {
    fontSize: FontSize.subheadlineBold_size,
    fontFamily: FontFamily.interRegular,
    color: Color.primaryColor,
    textAlign: "left",
    width: 343,
  },
  goBack: {
    width: 58,
  },
  backButton: {
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },
  titlebar: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.secondaryColor,
    justifyContent: "space-between",
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_34xl,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_mini,
    alignSelf: "stretch",
  },
  eclipseIcon: {
    width: 242,
    height: 192,
  },
  main: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_lg,
    alignSelf: "stretch",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default SignUp;
