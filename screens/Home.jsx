import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens } from "../navigations/screens";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Home = ({}) => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name={Screens.Store}
        component={Shop}
        options={{
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "Poppins_700Bold", fontSize: 25 },
          headerShadowVisible:false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="grid-view"
              size={30}
              color={focused ? "#50A462" : "#A7ABB9"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Cart}
        component={Cart}
        options={{
          headerShadowVisible:false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="md-cart-outline"
              size={30}
              color={focused ? "#50A462" : "#A7ABB9"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
