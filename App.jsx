import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "./navigations/screens";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { ProductDetail } from "./screens/ProductDetail";
import { Cart } from "./screens/Cart";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Screens.Login}>
            <Stack.Screen name={Screens.Home} component={Home} />
            <Stack.Screen
              name={Screens.Login}
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.ProductDetail}
              component={ProductDetail}
            />
            <Stack.Screen name={Screens.Cart} component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}
