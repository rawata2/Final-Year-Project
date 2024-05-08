import React, { useState, useCallback, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  Image,
} from "react-native";
import PopUp from "../components/PopUp";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { doc, getDoc, setDoc, collection, addDoc, getCountFromServer, getDocs } from "firebase/firestore";
import { auth, db } from '../firebaseConfig'
import Results from "./Results";

const PracticeQs = (props) => {
  const [butttonVisible, setButttonVisible] = useState(false);
  const [num, setNum] = useState("1")
  const [img, setImg] = useState("../assets/image-20240207-002627370-2.png")
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
  
  let categories = props.route.params.categories
  const limit = 1
  const [coll,_] = useState(collection(db, "Quiz",auth.currentUser.email, "attempts"))
  const navigation = useNavigation();
  const image = ["../assets/y_image.png","../assets/s_image.png", "../assets/r_image.png", "../assets/tyre_image.png",  "../assets/aware_image.png", "../assets/arrow_image.png", 
  "../assets/burn_image.png", 
  "../assets/brake_image.png"]


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
  }
  

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
      const fetchAttempts = async () => {
    try {
      const snapshot = await getDocs(coll);
      // const snapshot = {size: 0}
      const numDocs = snapshot.size;
      return numDocs + 1
      // Handle the snapshot data as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    if(count >= (categories.length)) {
      const score = cat1.length + cat2.length + cat3.length + cat4.length + cat5.length
      fetchAttempts().then((attempts_test) => {
        setDoc(doc(db, "Quiz", auth.currentUser.email, "attempts", String(attempts_test)),{result: ((score) > (count / 1.33) ? "Pass": "Fail"), score: (String(score) + "/" + (String(count)))})
      })
      .catch((e) => {console.error(e)})
    }
  }, [count])

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
  console.log("awhjidfaywuowfyoaw", img)


  const openButtton = useCallback(() => {
    setButttonVisible(true);
  }, []);

  const closeButtton = useCallback(() => {
    setButttonVisible(false);
  }, []);

  return (
    <>
    {(() => {
      if (count < (categories.length)) {
        return (
          <View style={styles.practiceQs}>
           <TitleBar
            home="Quit"
            onButttonPress={openButtton}
            showHamburgerIcon={false} // This  hides the hamburger icon
          />
            <ScrollView
              style={styles.main}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.mainScrollViewContent}
            >            
            <View style={styles.qNum}>
              <Text style={styles.question1}>Question</Text>
              <Text style={[styles.text, styles.textTypo]}>{count}/{categories.length}</Text>
            </View>
              <View style={[styles.category, styles.mainImgSpaceBlock]}>
                <View style={styles.categoryName}>
                  <Text style={[styles.roadAndTraffic, styles.answerTypo]}>
                    {categories[cat]}
                  </Text>
                </View>
              </View>
              <View style={[styles.mainImg, styles.mainImgFlexBox]}>
                <Image
                  style={styles.qImgPlaceholderIcon}
                  source={img == image[0] ? require("../assets/y_image.png"): img == image[1]? require("../assets/s_image.png") :img == image[2]? require("../assets/r_image.png"): img == image[3]? require("../assets/tyre_image.png") : img == image[4]? require("../assets/aware_image.png"): img == image[5]? require("../assets/arrow_image.png"): img == image[6]? require("../assets/burn_image.png") : require("../assets/brake_image.png")}
                />
              </View>
              <View style={[styles.answerSelection, styles.mainImgFlexBox]}>
                <View style={[styles.question, styles.aSpaceBlock]}>
                  <Text style={styles.whatDoesThis}>
                    {q}
                  </Text>
                </View>
                <View style={styles.allans}>
                  <View style={[styles.a, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a1)} style={ (ans == select && select == a1) ? [styles.aParent, styles.parentFlexBoxCorrect] : (select == a1) ? [styles.aParent, styles.parentFlexBoxSelect] : [styles.aParent, styles.parentFlexBox]}>
                      <Text style={[styles.a1, styles.answerTypo]}>A</Text>
                      <Text style={[styles.answer, styles.answerTypo]}>{a1}</Text>
                    </Pressable>
                  </View>
                  <View style={[styles.b, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a2)} style={(ans == select && select == a2) ? [styles.aParent, styles.parentFlexBoxCorrect] :(select == a2) ? [styles.bParent, styles.parentFlexBoxSelect] :[styles.bParent, styles.parentFlexBox]}>
                      <Text style={[styles.a1, styles.answerTypo]}>B</Text>
                      <Text style={[styles.answer1, styles.answerTypo]}>
                        {a2}
                      </Text>
                    </Pressable>
                  </View>
                  <View style={[styles.b, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a3)} style={ (ans == select && select == a3) ? [styles.aParent, styles.parentFlexBoxCorrect] :(select == a3) ? [styles.bParent, styles.parentFlexBoxSelect] : [styles.bParent, styles.parentFlexBox]}>
                      <Text style={[styles.a1, styles.answerTypo]}>C</Text>
                      <Text style={[styles.answer2, styles.answerTypo]}>
                        {a3}
                      </Text>
                    </Pressable>
                  </View>
                  <View style={[styles.b, styles.aSpaceBlock]}>
                    <Pressable onPress={() => setSelect(a4)} style={(ans == select && select == a4) ? [styles.aParent, styles.parentFlexBoxCorrect] :(select == a4) ? [styles.dParent, styles.parentFlexBoxSelect] : [styles.dParent, styles.parentFlexBox]}>
                      <Text style={[styles.a1, styles.answerTypo]}>D</Text>
                      <Text style={[styles.answer3, styles.answerTypo]}>
                        {a4}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={[styles.buttonParent, styles.aSpaceBlock]}>
                <View style={styles.button1}>
                  <Pressable onPress={() => [ NextQ()]} style={[styles.nextButton, styles.answer4FlexBox]}>
                    <Text style={[styles.next, styles.nextTypo]}>Next</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        );
      } else {
        return (
          <Results score = {cat1.length + cat2.length + cat3.length + cat4.length + cat5.length} count = {count} reset = {resetQuiz}/>
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
  );
};

const styles = StyleSheet.create({
  mainScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImgSpaceBlock: {
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
  answerTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
  },
  textTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
  },
  mainImgFlexBox: {
    marginTop: 16,
    display: 'flex',
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
    backgroundColor: Color.red2,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBoxCorrect: {
    paddingVertical: Padding.p_mini,
    backgroundColor: Color.GreenCorrect,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  answer4FlexBox: {
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
    alignSelf: "stretch",
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
  question1: {
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
    marginTop: 10,
  },
  roadAndTraffic: {
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  categoryName: {
    paddingHorizontal: Padding.p_lgi,
    justifyContent: "center",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
  category: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  qImgPlaceholderIcon: {
    maxWidth: "100%",
    height: 205,
    borderRadius: Border.br_3xs,
    alignSelf: 'center',
    overflow: "hidden",
    width: 205,
  },
  mainImg: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
    overflow: 'hidden',
  },
  whatDoesThis: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  question: {
    justifyContent: "center",
    overflow: "hidden",
  },
  a1: {
    color: Color.colorGray_200,
  },
  answer: {
    marginLeft: 18,
    color: Color.lightLabelPrimary,
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
    color: Color.lightLabelPrimary,
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
    color: Color.lightLabelPrimary,
  },
  answer3: {
    marginLeft: 15,
    color: Color.lightLabelPrimary,
  },
  dParent: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  allans: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  answerSelection: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  answer5: {
    color: Color.red2,
  },
  answer4: {
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
  nextButton: {
    backgroundColor: Color.red2,
    margin: 10,
  },
  button1: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonParent: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
  practiceQs: {
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default PracticeQs;
