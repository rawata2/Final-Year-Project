import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitleBar from "../components/TitleBar";
import MainSection from "../components/MainSection";
import { Color } from "../GlobalStyles";

const Results = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.results}>
      <TitleBar
        home="Home"
        onButttonPress={() => navigation.goBack()}
        onHamburgerOnOffPress={() => navigation.toggleDrawer()}
      />
      <MainSection score = {props.score} count = {props.count} countset = {props.setCount}/>
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
