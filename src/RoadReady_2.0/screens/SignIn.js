import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth"


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
      navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
    })
    .catch(error => alert(error.message))
  }
  
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("SignIn")
    })
    .catch(error => alert(error.message))
  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" });
      }
    });
  
    return unsubscribe;
  }, []);
  
  
  return (
    <View style={[styles.signIn, styles.signInFlexBox]}>
      <View style={[styles.titlebar, styles.titlebarFlexBox]}>
        <View style={[styles.backButton, styles.eyeIconLayout]} />
      </View>
      <View style={styles.main}>
        <Image
          style={styles.eclipseIcon}
          contentFit="cover"
          source={require("../assets/eclipse1.png")}
        />
        <View style={[styles.form, styles.formSpaceBlock]}>
          <Text style={styles.signIn1}>Sign In</Text>
          <View style={[styles.emailOrUsername, styles.footerSpaceBlock]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/profile-on-off1.png")}
            />
            <TextInput
              style={styles.emailOrUsername1}
              placeholder="Email or Username"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={[styles.emailOrUsername, styles.footerSpaceBlock]}>
            <View style={[styles.passwordIcon, styles.iconLayout]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector51.png")}
              />
            </View>
            <TextInput
              style={styles.emailOrUsername1}
              placeholder="Password"
              secureTextEntry={!passwordVisible} // Toggle visibility
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              onChangeText={(text) => setPassword(text)}
              />

        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            style={[styles.eyeIcon, styles.eyeIconLayout]}
            contentFit="cover"
            source={passwordVisible ? require("../assets/eye-icon.png") : require("../assets/eye-icon.png")}
          />
        </Pressable>
        </View>
          <Pressable
            style={[styles.signIn2, styles.footerSpaceBlock]}
            onPress={() => handleLogin()}
          >
            <Pressable
              style={[styles.signInButton, styles.signInButtonFlexBox]}
              activeOpacity={0.2}
              onPress={() => handleLogin()}
            >
              <Text style={[styles.signIn3, styles.signIn3Typo]}>Sign In</Text>
            </Pressable>
          </Pressable>
          <View style={[styles.footer, styles.footerSpaceBlock]}>
            <View style={[styles.forgotSignup, styles.formFlexBox]}>
              <Text onPress={handleSignOut} style={[styles.forgetPassword, styles.signIn3Typo]}>
                Forget Password?
              </Text>
              <View style={styles.dontHave}>
                <Text style={[styles.dontHaveAn, styles.signUp1Typo]}>
                  Don’t have an account?
                </Text>
                <Pressable
                  style={styles.signUp}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={[styles.signUp1, styles.signUp1Typo]}>
                    Sign up
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  titlebarFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  eyeIconLayout: {
    height: 20,
    overflow: "hidden",
  },
  formSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  footerSpaceBlock: {
    marginTop: 29,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  signInButtonFlexBox: {
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  signIn3Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  formFlexBox: {
    justifyContent: "flex-end",
    flex: 1,
  },
  signUp1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.primaryColor,
  },
  backButton: {
    alignItems: "center",
    flex: 1,
  },
  titlebar: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.secondaryColor,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_34xl,
    paddingRight: Padding.p_11xl,
    paddingBottom: Padding.p_mini,
    flexDirection: "row",
    alignItems: "center",
  },
  eclipseIcon: {
    width: 242,
    height: 192,
  },
  signIn1: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.primaryColor,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  emailOrUsername1: {
    fontSize: FontSize.subheadlineBold_size,
    marginLeft: 21,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  emailOrUsername: {
    borderStyle: "solid",
    borderColor: Color.red2,
    borderWidth: 2,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    paddingVertical: Padding.p_3xs,
  },
  vectorIcon: {
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
    width: 20,
    marginLeft: 21,
  },
  signIn3: {
    color: Color.colorWhite,
    flex: 1,
  },
  signInButton: {
    backgroundColor: Color.red2,
    height: 61,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  signIn2: {
    paddingVertical: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  forgetPassword: {
    color: Color.primaryColor,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  dontHaveAn: {
    fontFamily: FontFamily.interRegular,
  },
  signUp1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  signUp: {
    marginLeft: 30,
  },
  dontHave: {
    marginTop: 30,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  forgotSignup: {
    alignItems: "center",
  },
  footer: {
    alignItems: "flex-end",
    padding: Padding.p_11xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  form: {
    paddingVertical: Padding.p_3xs,
    justifyContent: "flex-end",
    flex: 1,
    alignSelf: "stretch",
  },
  main: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_lg,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  signIn: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    alignItems: "center",
    flex: 1,
  },
});

export default SignIn;
