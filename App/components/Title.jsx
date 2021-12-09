import React from "react";
import { View, Text, StyleSheet } from "react-native";
import dimension from "../config/dimension";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: dimension.width * 0.032,
    marginVertical: dimension.height * 0.003,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Title;
