import React, { useCallback, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import MainStack from "./navigation/Navigation";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MainStack />
    </NavigationContainer>
  );
}
