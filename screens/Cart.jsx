import React,{useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const Cart = ({}) => {
  return (
    <View style={styles.container}>
        <View style={{
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 25,
        }}>
         <Text style= {{
             padding: 10,
             fontFamily: 'Poppins_400Regular',
             fontSize: 15,
         }}>
            Total: 
        </Text>
        <Text style= {{ 
            fontFamily: 'Poppins_600SemiBold',
             fontSize: 20,
             color: '#36B06B'
             }}>
        $67
        </Text>
        </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            color: "white",
            alignSelf: 'center',
            fontSize: 20,
          }}
        >
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  button: {
      backgroundColor: '#36B06B',
      marginBottom: 20,
    marginVertical: 20,
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
    height: '8%',
    justifyContent:'space-around'
  },
});
