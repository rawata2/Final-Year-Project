import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { auth, db } from '../firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";

const Form = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [docState, setDocState] = useState()
  
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("HomePage")
      }
    })

    return unsubscribe
  }, [])


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      setDoc(doc(db, "user", email), {
        email: email, name: username
      });
      console.log('Registered with:', user.email);
      updateProfile(user, {
        displayName: username
      })
    })
    .catch(error => alert(error.message))
}

  return (
    <View style={styles.form}>
      <Text style={styles.signUp}>Sign Up</Text>
      <View style={[styles.name, styles.nameBorder]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/profile-on-off.png")}
        />
        <TextInput
          style={styles.fullName}
          placeholder="Full Name"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={[styles.name, styles.nameBorder]}>
        <View style={[styles.emailIcon, styles.iconFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <TextInput
          style={styles.fullName}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={[styles.name, styles.nameBorder]}>
        <View style={[styles.passwordIcon, styles.iconFlexBox]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <TextInput
          style={styles.fullName}
          placeholder="Password"
          secureTextEntry={!passwordVisible} // Toggle visibility
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={text => setPassword(text)}
        />
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            style={styles.eyeIcon}
            contentFit="cover"
            source={passwordVisible ? require("../assets/eye-icon.png") : require("../assets/eye-icon.png")} // Toggle icon based on visibility
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.signup, styles.signupSpaceBlock]}
        onPress={() => handleSignUp() }
      >
        <Pressable
          style={[styles.signUpButton, styles.passwordIconFlexBox]}
          onPress={() => handleSignUp() }
        >
          <Text style={styles.signUp1}>Sign Up</Text>
        </Pressable>
      </Pressable>
      <View style={[styles.footer, styles.textFlexBox]}>
        <View style={[styles.text, styles.textFlexBox]}>
          <Text style={[styles.alreadyHaveAn, styles.signIn1Typo]}>
            Already have an Account?
          </Text>
          <Pressable
            style={styles.signIn}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameBorder: {
    marginTop: 29,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 2,
    borderColor: Color.red2,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  signupSpaceBlock: {
    paddingVertical: 0,
    marginTop: 29,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  passwordIconFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  textFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  signIn1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.primaryColor,
  },
  signUp: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.primaryColor,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  fullName: {
    fontSize: FontSize.subheadlineBold_size,
    marginLeft: 21,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  name: {
    alignItems: "center",
    marginTop: 29,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 2,
    borderColor: Color.red2,
    borderStyle: "solid",
  },
  vectorIcon: {
    width: 26,
    height: 19,
  },
  emailIcon: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_7xs,
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  vectorIcon1: {
    height: 26,
    width: 20,
  },
  passwordIcon: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_12xs,
    height: 30,
    width: 30,
    flexDirection: "row",
    overflow: "hidden",
  },
  eyeIcon: {
    height: 20,
    width: 20,
    marginLeft: 21,
    overflow: "hidden",
  },
  confirmPassword: {
    marginTop: 29,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 2,
    borderColor: Color.red2,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  signUp1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  signUpButton: {
    backgroundColor: Color.red2,
    height: 61,
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  signup: {
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.interRegular,
  },
  signIn1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  signIn: {
    marginLeft: 30,
  },
  text: {
    flex: 1,
  },
  footer: {
    paddingVertical: 0,
    marginTop: 29,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  form: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
});

export default Form;
