import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Screens } from "../navigations/screens";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  function login() {
    if (!username || !password) {
      return;
    }
    navigation.navigate(Screens.Home);
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}  resetScrollToCoords={{x:0,y:0}} scrollEnabled={false}>
      <ImageBackground
        source={require("../assets/Vector.png")}
        style={{
          width: "100%",
          height: "40%",
          paddingLeft: 20,
          paddingTop: 20,
        }}
        imageStyle={{ width: "100%", height: "100%" }}
        resizeMode={"cover"}
      >
        <Text style={styles.text}>Sign In,</Text>
        <Text style={{ fontFamily: "Poppins_500Medium", color: "white" }}>
          Enter your credentials to login
        </Text>
      </ImageBackground>
      <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
        <Label title="Username" />
        <View style={styles.inputContainer}>
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <Label title="Password" />
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                color: "white",
                fontSize: 18,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const Label = function ({ title }) {
  return <Text style={styles.label}>{title}</Text>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },

  text: {
    marginTop: 80,
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 35,
    color: "white",
  },
  label: {
    color: "#75BA8B",
    marginBottom: 20,
    marginVertical: 20,
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  input: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    borderWidth: 1,
  },
  inputContainer: {
    borderBottomColor: "#EBECEF",
    borderBottomWidth: 2,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#50A462",
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
