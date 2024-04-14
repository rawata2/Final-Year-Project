import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, FontFamily, Color, Border, Padding } from "../components/GlobalStyles";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { auth, db } from '../firebaseConfig'
import { reload } from "firebase/auth";

const PracticeQs = (props) => {
  const [num, setNum] = useState("1")
  const [docState, setDocState] = useState()
  const [q, setQ] = useState()
  const [a1, setA1] = useState()
  const [a2, setA2] = useState()
  const [a3, setA3] = useState()
  const [a4, setA4] = useState()
  const [ans, setAns] = useState()
  const [count, setCount] = useState(0)
  const [cat, setCat] = useState(0)
  const [select, setSelect] = useState()
  const [cat1, setCat1] = useState([])
  const [cat2, setCat2] = useState([])
  const [cat3, setCat3] = useState([])
  const [cat4, setCat4] = useState([])
  const [cat5, setCat5] = useState([])
  
  let categories = props.route.params.categories
  const limit = 1
  
  function NextQ(){
    setCount(count + 1)
    if(cat == (categories.length - 1)){
      setCat(0)
    }
    else if(Number(num) == limit){
      setNum("1")
      setCat(cat + 1)
    }
    else if(Number(num) < limit){
      setNum((Number(num) + 1).toString())
    }
    if(ans == select){
      switch (cat) {
        case 0:
          setCat1(cat1.concat(num))
          break;
        case 1:
          setCat2(cat2.concat(num))
          break;
        case 2:
          setCat3(cat3.concat(num))
          break;
        case 3:
          setCat4(cat4.concat(num))
          break;
        case 4:
          setCat5(cat5.concat(num))
          break;
      }
    }
  }

  useEffect(() => {
    async function fetchDoc(){
      let docSnap = await getDoc(docRef)
      setDocState(docSnap.data())
    }
    fetchDoc()
  }, [])

  const testRef = collection(db, "Test");
  const docRef = doc(db, categories[cat], num);
  getDoc(docRef).then((d) => 
  {console.log(d.data()), setA1(d.data().A1), setA2(d.data().A2), setA3(d.data().A3), setA4(d.data().A4), setAns(d.data().AA), setQ(d.data().Q) })

  return (
    <div>
    {(() => {
      if (count < 5) {
      return(
    <View style={styles.practiceQs}>
      <View style={styles.frame}>
        <View style={styles.header}>
          <Text style={styles.drivingTest}>Practice</Text>
          <Image
            style={styles.iconHamburgerMenu}
            contentFit="cover"
            source={require("../assets/-icon-hamburger-menu1.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.image19Parent}>
            <Image
              style={styles.image19Icon}
              contentFit="cover"
              source={require("../assets/image-19.png")}
            />
            <View style={styles.frameChild} />
          </View>
          <Text style={styles.whatDoesThis}>{q}</Text>
        </View>
          <Text style={!select ? styles.question : styles.selected} onPress={() => [setSelect(a1), console.log(select)]} >A: {a1}</Text>
          <Text style={styles.question} onPress={() => [setSelect(a2), console.log(select)]}>B: {a2}</Text>
          <Text style={styles.question} onPress={() => [setSelect(a3), console.log(select)]}>C: {a3}</Text>
          <Text style={styles.question} onPress={() => [setSelect(a4), console.log(select)]}>D: {a4}</Text>
          <View style={styles.submitAnswerWrapper}>
            {docRef ?
            <Text onPress={() => [NextQ(), Marking()]} style={styles.submitAnswer}>Submit answer</Text>
            :
            <Text style={styles.submitAnswer}>Loading...</Text>
             }
          </View>
        </View>
      </View>
  );
};
 {
  return(
  <><Text>Test</Text><Text>{cat1.length + cat2.length + cat3.length + cat4.length + cat5.length}/{count}</Text></>
  )}
  })()}
</div>
  )
}

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
  },
  dropdownpicker: {
    backgroundColor: Color.colorDarkslategray_200,
  },
  wrapper: {
    borderRadius: Border.br_3xs,
    width: 259,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 19,
    paddingVertical: 0,
    marginLeft: 14,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 393,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image19Icon: {
    position: "relative",
    borderRadius: Border.br_3xs,
    width: 342,
    height: 206,
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    width: 342,
  },
  image19Parent: {
    width: 342,
    height: 206,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 1,
  },
  whatDoesThis: {
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  frame2: {
    width: 399,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    borderRadius: Border.br_3xs,
    width: 342,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_6xs,
    marginLeft: 1,
  },
  frameView: {
    borderRadius: Border.br_3xs,
    width: 342,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_6xs,
    marginLeft: 1,

  },
  wrapper2: {
    borderRadius: Border.br_3xs,
    width: 342,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_6xs,
    marginLeft: 1,

  },
  frame4: {
    width: 343,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  submitAnswer: {
    position: "relative",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    border:  " 0.5px solid #3B3B3B",
    borderRadius: "5px",
    backgroundColor: "#FF7F7F",
    width: "50%"

  },
  submitAnswerWrapper: {
    borderRadius: Border.br_94xl,
    backgroundColor: Color.colorLightcoral_100,
    width: 341,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 14,
    marginLeft: 2,
  },
  frame3: {
    width: 343,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame1: {
    position: "absolute",
    top: 220,
    left: -3,
    width: 399,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  practiceQs: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 900,
  },
  question: {
    margin: "1%",
    padding: "2%",
    border:  " 0.5px solid #C5C5C5",
    borderRadius: "5px",
    width: "90%",
    backgroundColor: "#40404050"
  },
  selected: {
    margin: "1%",
    padding: "2%",
    border:  " 0.5px solid #3B3B3B",
    borderRadius: "5px",
    width: "90%",
    backgroundColor: "#FF7F7F"
  }
});

export default PracticeQs;
