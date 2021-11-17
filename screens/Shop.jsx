import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Feather ,AntDesign} from "@expo/vector-icons";

export const Shop = ({}) => {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <SearchModal modal={modal} setModal={setModal} />
      <TouchableOpacity
        onPress={function () {
          setModal(true);
        }}
      >
         <View style= {styles.inputContainer} >
         <Text>hiii</Text>
         </View> 
      </TouchableOpacity>
    </View>
  );
};
const SearchModal = ({ modal, setModal }) => {
  const [search, setSearch] = useState();

  return (
    <Modal
      visible={modal}
      onRequestClose={function () {
        setModal(false);
      }}
    >
      <View style={{flexDirection:'row', height: "100%", width: "100%", marginLeft: 10 }}>
      <AntDesign name="arrowleft" size={24} color="black" />
        <TouchableOpacity style={{}}>
        </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Feather name="search" size={20} color="black" />
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search for products"
          style={{ height: "100%", width: "100%", marginLeft: 10 }}
        />
      </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  inputContainer: {
    backgroundColor: "#F9F9F9",
    height: "8%",
    marginHorizontal: "5%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 10,
  },
  backButton: {
    width:'26%',
    height: "27%",
    marginTop:'100%'
  },
  searchButton: {
    borderColor: 'gray',
    borderWidth: '1',
    alignSelf: "center",
    marginTop: "2%",
    padding: "5%",
    width: "80%",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "15%",
  }
});
