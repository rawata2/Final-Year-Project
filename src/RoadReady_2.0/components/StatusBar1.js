import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

const StatusBar1 = () => {
  return (
    <View style={styles.statusBar}>
      <View style={styles.property1light} />
    </View>
  );
};

const styles = StyleSheet.create({
  property1light: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: Color.secondaryColor,
    width: 393,
    height: 44,
    alignItems: "center",
  },
  statusBar: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 433,
    height: 84,
    overflow: "hidden",
  },
});

export default StatusBar1;
