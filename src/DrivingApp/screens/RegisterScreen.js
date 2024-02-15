import {View, Text,TextInput, Button, Keyboard, Alert,StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { writeUserData, data} from '../firebaseConfig'
import { useNavigation } from '@react-navigation/core'
import { auth, db } from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../components/GlobalStyles";
import { ScrollView } from 'react-native-gesture-handler'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [docState, setDocState] = useState()
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    async function fetchDoc(){
      let docSnap = await getDoc(docRef)
      setDocState(docSnap.data())
    }
    fetchDoc()
  }, [])

  console.log(docState)
  console.log(auth)
  console.log(auth.currentUser)
  const docRef = doc(db, "cities", "SF");
  // const docSnap = getDoc(docRef);
  // getDoc(docRef).then((d) => {console.log(d.data())})
  const citiesRef = collection(db, "cities");


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      setDoc(doc(db, "user", email), {
        email: email, test: "1"
      });
      console.log('Registered with:', user.email);
      console.log(userCredentials)
    })
    .catch(error => alert(error.message))
}

  return (
    <ScrollView>
    <View style={[styles.signUp, styles.signUpFlexBox]}>
      <View style={[styles.headerParent, styles.signUpFlexBox]}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={styles.ionchevronBackIcon}
              contentFit="cover"
              source={require("../assets/ionchevronback.png")}
            />
            <Text style={styles.back}>Back</Text>
          </View>
          <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse21.png")}
            />
        </View>
        <Text style={[styles.signUp1, styles.signTypo1]}>Sign Up</Text>
        <TextInput
          style={[styles.name, styles.nameBorder]}
          placeholder="Full Name"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          textStyle={styles.nameTextInputText}
        />
        <TextInput
          style={[styles.name, styles.nameBorder]}
          textStyle={styles.emailTextInputText}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={[styles.password, styles.nameBorder]}
          placeholder='Password'
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          maxLength={10}
          secureTextEntry
        />
        <View style={styles.signUpButton}>
          <Text style={[styles.signUp2, styles.signTypo]}>Sign Up</Text>
        </View>
        <View style={[styles.footer, styles.headerFlexBox]}>
          <Text style={[styles.alreadyHaveAn, styles.signTypo]}>
            Already have an Account?
          </Text>
          <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  nameTextInputText: {
    fontFamily: "Inter-Regular",
    color: "rgba(0, 0, 0, 0.3)",
  },
  emailTextInputText: {
    fontFamily: "Inter-Regular",
    color: "rgba(0, 0, 0, 0.3)",
  },
  signUpFlexBox: {
    alignItems: "center",
    height: 825,
  },
  headerFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  signTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  nameBorder: {
    paddingVertical: Padding.p_3xs,
    borderWidth: 2,
    borderColor: Color.colorLightcoral,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    marginTop: 47,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  ionchevronBackIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  back: {
    marginLeft: 3,
    textAlign: "left",
    color: Color.colorCrimson,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    flex: 1,
  },
  frame: {
    width: 58,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  ellipseIcon: {
    width: 213,
    height: 183,
  },
  header: {
    justifyContent: "space-between",
    height: 183,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  signUp1: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    marginTop: 47,
    color: Color.colorCrimson,
    alignSelf: "stretch",
  },
  name: {
    paddingHorizontal: Padding.p_5xs,
  },
  password: {
    paddingHorizontal: Padding.p_4xs,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    paddingVertical: Padding.p_3xs,
    borderWidth: 2,
    borderColor: Color.colorLightcoral,
    borderStyle: "solid",
  },
  signUp2: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  signUpButton: {
    backgroundColor: Color.colorLightcoral,
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 158,
    paddingVertical: 0,
    borderRadius: Border.br_mini,
    marginTop: 47,
    alignItems: "flex-end",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  alreadyHaveAn: {
    color: Color.colorCrimson,
    fontFamily: FontFamily.interRegular,
  },
  signIn: {
    marginLeft: 30,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorCrimson,
  },
  footer: {
    height: 19,
    paddingLeft: 20,
    paddingRight: 50,
    marginTop: 47,
  },
  headerParent: {
    alignSelf: "stretch",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    height: 825,
  },
});
