import React from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import { ProductItem } from "../components/ProductItem";
import { products } from "../utils";

export const Shop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.captionContainer}>
        <Text style={{ color: "A4a3a3", fontSize: 17 }}>The World's </Text>
        <Text
          style={{
            color: "#75BA8B",
            fontSize: 23,
            fontWeight: "bold",
            marginBottom: -1,
          }}
        >
          Best Bike
        </Text>
      </View>
      <Tabs />
      <View style={styles.productListContainer}>
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          data={products}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          style={styles.productList}
          renderItem={({ item }) => (
            <ProductItem key={item.id} product={item} />
          )}
        />
      </View>
    </View>
  );
};
export const Tabs = ({}) => {
  const categories = ["All", "Road bike", "Mountain", "Urban bike"];
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>Categories</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ width: "100%", marginTop: 15 }}
      >
        {categories.map((category, index) => {
          return <TabItem title={category} index={index} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const TabItem = ({ title, index }) => {
  const active = index === 0 ? styles.active : styles.text;
  return (
    <View style={styles.tabItem}>
      <Text style={active}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  captionContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "flex-end",
    marginLeft: 10,
  },
  productListContainer: {
    height: "83%",
    paddingRight: 10,
  },
  productList: {
    marginTop: 25,
    marginLeft: 10,
  },
  container: {
    paddingLeft: 10,
    marginTop: 23,
  },
  tabItem: {
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    flexDirection: "row",
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  text: { color: "#A4a3a3", fontWeight: "500" },
  active: { color: "#75BA8B", fontWeight: "700" },
});
