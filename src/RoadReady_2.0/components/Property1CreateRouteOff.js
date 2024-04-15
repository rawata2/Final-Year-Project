import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Property1CreateRouteOff = () => {
  return (
    <View style={[styles.property1createRouteOff, styles.groupIconLayout]}>
      <Image
        style={styles.groupIconLayout}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 30,
    width: 30,
  },
  property1createRouteOff: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Property1CreateRouteOff;
