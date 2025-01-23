import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { CommonActions } from "@react-navigation/native";
import { getData } from "./AsyncStorage";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(async () => {
      let isLoagin = await getData("isLogin");

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: isLoagin ? "MainTabs" : "Home" }],
        })
      );
    }, 2000);
  }, [navigation]);

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{"Welcome to WithMe"}</Text>
    </View>
  );
};

export { SplashScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
