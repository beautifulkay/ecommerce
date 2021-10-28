import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

export const Login = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SIGN IN</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },

  text: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 46,
  },
});
