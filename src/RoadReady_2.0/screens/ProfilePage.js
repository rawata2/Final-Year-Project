import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePage}>
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
        <View style={styles.profile}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <Image
            style={styles.editIcon}
            contentFit="cover"
            source={require("../assets/edit.png")}
          />
          <View style={styles.nameFrame}>
            <Text style={styles.name}>Name</Text>
          </View>
        </View>
        <View style={styles.form}>
          <View style={[styles.email, styles.passBorder]}>
            <View style={[styles.emailIcon, styles.iconLayout]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector61.png")}
              />
            </View>
            <TextInput
              style={styles.changeEmail}
              placeholder="Change Email"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
          </View>
          <View style={[styles.changePass, styles.passSpaceBlock]}>
            <Text style={[styles.changePassword, styles.changePasswordTypo]}>
              Change Password?
            </Text>
          </View>
          <View style={[styles.currentPass, styles.passSpaceBlock]}>
            <View style={[styles.passwordIcon, styles.iconLayout]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector51.png")}
              />
            </View>
            <TextInput
              style={styles.changeEmail}
              placeholder="Current Password"
              secureTextEntry={true}
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye-icon11.png")}
            />
          </View>
          <View style={[styles.newPass, styles.passSpaceBlock]}>
            <View style={[styles.passwordIcon, styles.iconLayout]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector51.png")}
              />
            </View>
            <TextInput
              style={styles.changeEmail}
              placeholder="New Password"
              secureTextEntry={true}
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye-icon11.png")}
            />
          </View>
          <View style={[styles.newPass, styles.passSpaceBlock]}>
            <View style={[styles.passwordIcon, styles.iconLayout]}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector51.png")}
              />
            </View>
            <TextInput
              style={styles.changeEmail}
              placeholder="Confirm New Password"
              secureTextEntry={true}
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye-icon11.png")}
            />
          </View>
          <View style={[styles.buttons, styles.passSpaceBlock]}>
            <Pressable style={styles.confirm}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text
                  style={[styles.confirmChanges, styles.changePasswordTypo]}
                >
                  Confirm Changes
                </Text>
              </View>
            </Pressable>
            <TouchableOpacity
              style={styles.signOut}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("SignIn")}
            >
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text
                  style={[styles.confirmChanges, styles.changePasswordTypo]}
                >
                  Sign Out
                </Text>
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
  passBorder: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 2,
    borderColor: Color.red2,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  passSpaceBlock: {
    marginTop: 29,
    alignSelf: "stretch",
  },
  changePasswordTypo: {
    fontFamily: FontFamily.subHeading,
    letterSpacing: 0,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_mini,
    alignSelf: "stretch",
    alignItems: "center",
  },
  imageIcon: {
    width: 139,
    height: 139,
    zIndex: 0,
  },
  editIcon: {
    position: "absolute",
    top: 113,
    left: 92,
    width: 31,
    height: 31,
    zIndex: 1,
  },
  name: {
    fontSize: FontSize.subHeading_size,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#272422",
    textAlign: "left",
    fontWeight: "600",
  },
  nameFrame: {
    height: 49,
    zIndex: 2,
    marginTop: 10,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  profile: {
    paddingTop: Padding.p_xl,
  },
  vectorIcon: {
    width: 26,
    height: 19,
  },
  emailIcon: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  changeEmail: {
    fontFamily: FontFamily.interRegular,
    marginLeft: 21,
    fontSize: FontSize.subheadlineBold_size,
    flex: 1,
  },
  email: {
    alignSelf: "stretch",
  },
  changePassword: {
    fontSize: FontSize.size_mid,
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  changePass: {
    justifyContent: "center",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: 26,
    width: 20,
  },
  passwordIcon: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_12xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  eyeIcon: {
    height: 20,
    width: 20,
    marginLeft: 21,
    overflow: "hidden",
  },
  currentPass: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 2,
    borderColor: Color.red2,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  newPass: {
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 2,
    borderColor: Color.red2,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  confirmChanges: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.subheadlineBold_size,
  },
  button: {
    borderRadius: Border.br_94xl,
    backgroundColor: Color.red2,
    paddingHorizontal: 0,
    justifyContent: "center",
    overflow: "hidden",
  },
  confirm: {
    alignItems: "center",
    flex: 1,
  },
  signOut: {
    marginLeft: 29,
    alignItems: "center",
    flex: 1,
  },
  buttons: {
    justifyContent: "center",
    flexDirection: "row",
  },
  form: {
    padding: Padding.p_xl,
    marginTop: 5,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  profilePage: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ProfilePage;
