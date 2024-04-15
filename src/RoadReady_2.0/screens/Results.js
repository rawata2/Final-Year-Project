import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import MainSection from "../components/MainSection";
import { Color } from "../GlobalStyles";

const Results = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.results}>
      <TitleBar
        home="Home"
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <MainSection />
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default Results;
