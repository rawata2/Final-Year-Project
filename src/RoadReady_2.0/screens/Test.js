import React, { useState, useCallback,useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import PopUp from "../components/PopUp";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";
import { doc, getDoc, setDoc, collection, addDoc, getCountFromServer, getDocs } from "firebase/firestore";
import { auth, db } from '../firebaseConfig'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Results from "./Results";

const Test = (props) => {
  const [butttonVisible, setButttonVisible] = useState(false);
  const [num, setNum] = useState("1")
  const [img, setImg] = useState()
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
  const [docs, setDocs] = useState()
  const [time, setTime] = useState("active")

  let categories = props.route.params.categories
  const limit = 1
  const coll = collection(db, "Quiz",auth.currentUser.email, "attempts")
  const image = ["../assets/y_image.png","../assets/s_image.png", "../assets/r_image.png", "../assets/tyre_image.png",  "../assets/aware_image.png", "../assets/arrow_image.png", 
  "../assets/burn_image.png", 
  "../assets/brake_image.png"]

  const navigation = useNavigation();

  const openButtton = useCallback(() => {
    setButttonVisible(true);
  }, []);

  const closeButtton = useCallback(() => {
    setButttonVisible(false);
  }, []);

  const resetQuiz = () => {
    setNum("1")
    setCount(0)
    setCat(0)
    setSelect(null)
    setCat1([])
    setCat2([])
    setCat3([])
    setCat4([])
    setCat5([])
    setDocs(null)
    setTime("active")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(coll);
        const numDocs = snapshot.size;
        setDocs(numDocs + 1)
        // Handle the snapshot data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [coll]);

  function NextQ(){
    setCount(count + 1)
    setSelect(null)
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
    if(count >= (categories.length) || time == "Finished") {
      const score = cat1.length + cat2.length + cat3.length + cat4.length + cat5.length
      setDoc(doc(db, "Quiz", auth.currentUser.email, "attempts", String(docs)),{result: ((score) > (count / 1.33) ? "Pass": "Fail"), score: (String(score) + "/" + (String(count)))})
    }
  }, [count, time])

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setA1(data.A1);
          setA2(data.A2);
          setA3(data.A3);
          setA4(data.A4);
          setAns(data.AA);
          setQ(data.Q);
          setImg(data.i)
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };
  
    fetchDoc();
  }, [cat, num]);

  const docRef = doc(db, categories[cat], num);

  return (
    <>
    {(() => {
      if (count < (categories.length) && time != "Finished") {
        return (
      <View style={styles.test}>
            <TitleBar
              home="Quit"
              hamburgerOnOffFlex={1}
              onButttonPress={openButtton}
              onHamburgerOnOffPress={() => navigation.toggleDrawer()} />
            <ScrollView
              style={styles.main}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.mainScrollViewContent}
            >
                <CountdownCircleTimer
                  isPlaying
                  duration={300}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[7, 5, 2, 0]}
                  size={50}
                  strokeWidth={5}
                  onUpdate={(remainingTime) => setTime(remainingTime)}
                  onComplete={() => setTime("Finished")}
                  >
                    {({ remainingTime }) => <Text>{Math.floor(remainingTime / 60)}: {remainingTime % 60}</Text>}
                </CountdownCircleTimer>
              <View style={styles.qNum}>
                <Text style={styles.question}>Question</Text>
                <Text style={[styles.text, styles.textTypo]}>{count}/40</Text>
              </View>
              <View style={[styles.mainImg, styles.mainImgFlexBox]}>
                <Image
                  style={styles.qImgPlaceholderIcon}
                  contentFit="cover"
                  source={img == image[0] ? require("../assets/y_image.png"): img == image[1]? require("../assets/s_image.png") :img == image[2]? require("../assets/r_image.png"): img == image[3]? require("../assets/tyre_image.png") : img == image[4]? require("../assets/aware_image.png"): img == image[5]? require("../assets/arrow_image.png"): img == image[6]? require("../assets/burn_image.png") : require("../assets/brake_image.png")}/>
              </View>
              <View style={[styles.answerSelection, styles.mainImgFlexBox]}>
                <View style={[styles.question1, styles.aSpaceBlock]}>
                  <Text style={[styles.whatShouldYou, styles.textTypo]}>
                    {q}
                  </Text>
                </View>
                <View style={styles.allans}>
                  <View style={[styles.a, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a1)} style={select == a1 ? [styles.aParent, styles.parentFlexBoxSelect] : [styles.aParent, styles.parentFlexBox]}>
                      <Text style={select == a1 ? styles.a1Select :styles.a1}>A</Text>
                      <Text style={select == a1 ? [styles.answer, styles.answerTypoSelect] :[styles.answer, styles.answerTypo]}>{a1}</Text>
                    </Pressable>
                  </View>
                  <View style={[styles.b, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a2)} style={select == a2 ? [styles.bParent, styles.parentFlexBoxSelect] :[styles.bParent, styles.parentFlexBox]}>
                      <Text style={select == a2 ? styles.a1Select :styles.a1}>B</Text>
                      <Text style={select == a2 ? [styles.answer1, styles.answerTypoSelect] :[styles.answer1, styles.answerTypo]}>
                        {a2}
                      </Text>
                    </Pressable>
                  </View>
                  <View style={[styles.b, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a3)} style={select == a3 ? [styles.cParent, styles.parentFlexBoxSelect] :[styles.bParent, styles.parentFlexBox]}>
                      <Text style={select == a3 ? styles.a1Select :styles.a1}>C</Text>
                      <Text style={select == a3 ? [styles.answer2, styles.answerTypoSelect] : [styles.answer2, styles.answerTypo]}>
                        {a3}
                      </Text>
                    </Pressable>
                  </View>
                  <View style={[styles.b, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a4)} style={select == a4 ? [styles.dParent, styles.parentFlexBoxSelect] :[styles.dParent, styles.parentFlexBox]}>
                      <Text style={select == a4 ? styles.a1Select :styles.a1}>D</Text>
                      <Text style={select == a4 ? [styles.answer3, styles.answerTypoSelect] : [styles.answer3, styles.answerTypo]}>
                        {a4}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={[styles.previousNext, styles.aSpaceBlock]}>
                <View style={styles.button1}>
                  <Pressable onPress={() => NextQ()} style={[styles.nextButton, styles.previousFlexBox]}>
                    <View style={styles.ionarrowBackParent}>
                      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                      <Image
                        style={[
                          styles.ionarrowForwardOutlineIcon,
                          styles.ionarrowIconLayout,
                        ]}
                        contentFit="cover"
                        source={require("../assets/ionarrowforwardoutline.png")} />
                    </View>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
          
  );
    } else {
      return (
        <Results score = {cat1.length + cat2.length + cat3.length + cat4.length + cat5.length} count = {count} reset = {resetQuiz} time = {time}/>
      );
    }
    })()}

      <Modal animationType="fade" transparent visible={butttonVisible}>
        <View style={styles.butttonOverlay}>
          <Pressable style={styles.butttonBg} onPress={closeButtton} />
          <PopUp onClose={closeButtton} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  mainScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  textTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
  },
  mainImgFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  aSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    paddingVertical: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBoxSelect: {
    paddingVertical: Padding.p_mini,
    backgroundColor: 'black',
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  answerTypo: {
    color: Color.lightLabelPrimary,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  answerTypoSelect: {
    color: 'white',
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  previousFlexBox: {
    paddingHorizontal: 0,
    borderRadius: Border.br_94xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  nextTypo: {
    fontSize: FontSize.subheadlineBold_size,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  ionarrowIconLayout: {
    height: 30,
    width: 30,
  },
  butttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  butttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  question: {
    fontSize: FontSize.size_lg,
    lineHeight: 20,
    textTransform: "capitalize",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorText2,
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    marginLeft: 20,
    color: Color.colorText2,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 28,
    fontSize: FontSize.size_base,
  },
  qNum: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  qImgPlaceholderIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  mainImg: {
    height: 245,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
  whatShouldYou: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorText1,
    alignSelf: "stretch",
  },
  question1: {
    justifyContent: "center",
    overflow: "hidden",
  },
  a1: {
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  a1Select: {
    color: 'white',
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  answer: {
    marginLeft: 18,
  },
  aParent: {
    paddingHorizontal: Padding.p_4xs,
    flex: 1,
  },
  a: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  answer1: {
    marginLeft: 17,
  },
  bParent: {
    paddingHorizontal: Padding.p_2xs,
    alignSelf: "stretch",
  },
  b: {
    marginTop: 15,
    justifyContent: "center",
    overflow: "hidden",
  },
  answer2: {
    marginLeft: 16,
  },
  answer3: {
    marginLeft: 15,
  },
  dParent: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  allans: {
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  answerSelection: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  previous1: {
    color: Color.red2,
    marginLeft: 20,
  },
  ionarrowBackParent: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  previous: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 0,
  },
  button: {
    borderStyle: "solid",
    borderColor: Color.red2,
    borderWidth: 2,
    borderRadius: Border.br_94xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  next: {
    color: Color.colorWhite,
  },
  ionarrowForwardOutlineIcon: {
    marginLeft: 20,
  },
  nextButton: {
    backgroundColor: Color.red2,
  },
  button1: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  previousNext: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  test: {
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },

});

export default Test;
