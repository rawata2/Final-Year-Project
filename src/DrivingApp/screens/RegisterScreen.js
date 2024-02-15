import { View, Text,TextInput, Button, Keyboard, Alert,StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { writeUserData, data} from '../firebaseConfig'
import { useNavigation } from '@react-navigation/core'
import { auth, db } from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc, setDoc, collection } from "firebase/firestore";

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
    <View>
    <TextInput
    placeholder='Email'
    value={email}
    onChangeText={text => setEmail(text)}
    />
    <TextInput
    placeholder='Password'
    value={password}
    onChangeText={text => setPassword(text)}
    maxLength={10}
    secureTextEntry
    />
     <View>
     <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>
    </View>
</View>
  )
}

export default RegisterScreen

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
})