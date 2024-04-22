import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { doc, getDoc, setDoc, collection, addDoc, getCountFromServer, getDocs } from "firebase/firestore";
import { auth, db } from '../firebaseConfig'

const TestHistory = () => {
  const [docs, setDocs] = useState()
  const navigation = useNavigation();
  const coll = (collection(db, "Quiz",auth.currentUser.email, "attempts"))
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(coll);
        const doclean = snapshot.docs.length
        setDocs(snapshot.docs)
        console.log("Number of documents:", snapshot.docs);
        // Handle the snapshot data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [coll]);


  return (
    <View style={styles.testHistory}>
      <TitleBar
        home="Back"
        hamburgerOnOffFlex={1}
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <View style={styles.heading}>
        <View style={[styles.headingName, styles.passAnalyFlexBox]}>
          <Text style={styles.testHistory1}>Test History</Text>
        </View>
      </View>
      <ScrollView
        style={styles.mainsection}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainSectionScrollViewContent}
      >
        <Text style={styles.overview}>Overview</Text>
        {docs && docs.map((doc, index) => (
          <View key={index} style={(doc.data().result == "Pass") ? [styles.stats1, styles.statsSpaceBlock]: [styles.stats2, styles.statsSpaceBlock] }>
            <View style={styles.allStats}>
              <View style={styles.passAnalyFlexBox}>
                <Text style={[styles.statusOfThe, styles.statusOfTheTypo]}>
                  Status of the test: {doc.data().result}
                </Text>
                <Text style={[styles.numberOfCorrect, styles.statusOfTheTypo]}>
                  Number of correct answers: {doc.data().score}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainSectionScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  passAnalyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  statsSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    marginTop: 20,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  statusOfTheTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi_6,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_smi_6,
    textAlign: "left",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  testHistory1: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  headingName: {
    backgroundColor: "#f38e55",
    paddingHorizontal: Padding.p_lgi,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    paddingVertical: Padding.p_xl,
    flex: 1,
  },
  heading: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  overview: {
    fontSize: FontSize.subHeading_size,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    fontFamily: FontFamily.subHeading,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  statusOfThe: {
    color: Color.colorDarkslategray_100,
  },
  numberOfCorrect: {
    color: Color.colorDarkslategray_100,
    marginTop: 20,
  },
  passed: {
    color: "#28a164",
  },
  text: {
    color: Color.colorDarkslategray_100,
    marginTop: 20,
  },
  allStats: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  stats1: {
    backgroundColor: "#ddf0e6",
    marginTop: 20,
  },
  failed: {
    color: "#f35555",
  },
  stats2: {
    backgroundColor: "#fde4e4",
    marginTop: 20,
  },
  mainsection: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
    flex: 1,
  },
  testHistory: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default TestHistory;
