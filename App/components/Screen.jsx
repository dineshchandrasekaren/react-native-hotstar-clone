import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
