import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "./navigations/screens";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { ProductDetail } from "./screens/ProductDetail";
import { Cart } from "./screens/Cart";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.LOGIN}>
        <Stack.Screen name={Screens.Home} component={Home} />
        <Stack.Screen name={Screens.Login} component={Login} />
        <Stack.Screen name={Screens.ProductDetail} component={ProductDetail} />
        <Stack.Screen name={Screens.Cart} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
