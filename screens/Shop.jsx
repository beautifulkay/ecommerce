import React,{useState} from "react";
import { View, StyleSheet,Text, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

export const Shop = ({}) => {
  const [search, setSearch]= useState();
  return <View style ={styles.container}>
    <View style ={styles.inputContainer}>
    <Feather name="search" size={20} color="black" />
      <TextInput 
      value={search}
      onChangeText={(text) => setSearch(text)}
      placeholder = 'Search for products' 
      style={{ height:'100%',
      width:'100%', 
      marginLeft:10,}}/>
      <View>

      </View>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
height :'100%',
backgroundColor: "white",
  },
  inputContainer: {
backgroundColor: "#F9F9F9",
height: '8%',
marginHorizontal:'5%',
borderRadius: 8,
flexDirection: "row",
alignItems: "center",
paddingLeft: 10,
marginTop: 10,
  }
});
