import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth, db} from '../firebaseConfig'
import { doc, getDoc, setDoc, collection } from "firebase/firestore";

const HomeScreen = () => {
  const navigation = useNavigation()
  const [docState, setDocState] = useState()

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

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={() => handleSignOut()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setDoc(doc(citiesRef, "SF"), {
          name: "San Francisco", state: "CA", country: "USA",
          capital: false, population: 860000,
          regions: ["west_coast", "norcal"] })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log(docSnap)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Console</Text>
      </TouchableOpacity>
      <Text>{docState ? docState.name : "loading"}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})