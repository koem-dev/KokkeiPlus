import React, { useCallback, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import MainStack from "./navigation/Navigation";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Sans-Light": require("./assets/fonts/SourceSansPro-Light.ttf"),
    "Sans-Regular": require("./assets/fonts/SourceSansPro-Regular.ttf"),
    "Sans-Semibold": require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
    "Sans-Bold": require("./assets/fonts/SourceSansPro-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MainStack />
    </NavigationContainer>
  );
}
