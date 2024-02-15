import { Button, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from '@react-navigation/core'
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../components/GlobalStyles";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })
    
        return unsubscribe
      }, [])

    const handleSignUp = () => {
          createUserWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }

      const handleLogin = () => {
          signInWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

  return (
    <KeyboardAvoidingView
    style={styles.signIn}
    behavior='padding'
    >
      <View>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse.png")}
      />
        <Text style={styles.signIn1}>Sign in</Text>
      </View>
        <View style={[styles.emailOrUserName, styles.passwordBorder]}>
        <Image
          style={styles.phuserLightIcon}
          contentFit="cover"
          source={require("../assets/phuserlight.png")}
        />
            <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={[styles.emailOrUser, styles.password1Typo]}
            />
        </View>
        <View style={[styles.password, styles.frameFlexBox1]}>
        <Image
          style={styles.phuserLightIcon}
          contentFit="cover"
          source={require("../assets/mdipasswordoutline.png")}
        />
          <View style={[styles.frame, styles.frameFlexBox1]}>
            <TextInput
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.password1Typo}
            secureTextEntry
            />
            <Image
            style={styles.pheyeIcon}
            contentFit="cover"
            source={require("../assets/pheye.png")}
            onPress={setEye(true)}
          />
            </View>
        </View>
        <View style={[styles.frame1, styles.frameFlexBox]}>
            <TouchableOpacity
            onPress={handleLogin}
            style={[styles.frame1, styles.frameFlexBox]}
            >
                <Text style={[styles.signIn2, styles.signTypo]}>Sign In</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity
            onPress={() => navigation.replace("Register")}
            style={[styles.dontHaveAccount, styles.signTypo]}
            >
                <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  signIn: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 50,
    textAlign: 'center',
    color: '#FE2055',
  },
  email: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 50,
    textAlign: 'center',
    color: '#FE2055',
  },
  passwordBorder: {
    paddingVertical: Padding.p_3xs,
    borderWidth: 2,
    borderColor: Color.colorCrimson,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    marginTop: 50,
    alignSelf: "stretch",
  },
  password1Typo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  frameFlexBox1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox: {
    justifyContent: "center",
    marginTop: 50,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  signTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  ellipseIcon: {
    width: 254,
    height: 183,
  },
  signIn1: {
    fontSize: FontSize.size_11xl,
    marginTop: 50,
    textAlign: "center",
    alignSelf: "stretch",
    color: Color.colorCrimson,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  phuserLightIcon: {
    width: 27,
    height: 30,
    overflow: "hidden",
  },
  emailOrUser: {
    marginLeft: 17,
  },
  emailOrUserName: {
    paddingHorizontal: 7,
    alignItems: "center",
    height: 50,
    flexDirection: "row",
  },
  pheyeIcon: {
    width: 18,
    height: 20,
    overflow: "hidden",
  },
  frame: {
    width: 289,
    overflow: "hidden",
  },
  password: {
    paddingHorizontal: 8,
    paddingVertical: Padding.p_3xs,
    borderWidth: 2,
    borderColor: Color.colorCrimson,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    marginTop: 50,
    alignSelf: "stretch",
  },
  signIn2: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frame1: {
    backgroundColor: Color.colorLightcoral,
    alignItems: "center",
    height: 50,
    borderRadius: Border.br_mini,
    justifyContent: "center",
  },
  forgetPassword: {
    fontSize: FontSize.size_base,
    marginTop: 50,
    textAlign: "center",
    color: Color.colorCrimson,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  dontHaveAccount: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorCrimson,
    flex: 1,
  },
  signUp: {
    width: 136,
    marginLeft: 18.06,
    color: Color.colorCrimson,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frame2: {
    height: 19,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  signIn: {
    backgroundColor: Color.colorWhite,
    width: 393,
    maxWidth: 393,
    flex: 1,
    overflow: "hidden",
  },
})