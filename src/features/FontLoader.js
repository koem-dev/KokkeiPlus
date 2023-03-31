import { View, Text } from "react-native";
import React from "react";

import * as Font from "expo-font";

async function loadFonts() {
  await Font.loadAsync({
    "Sans-Light": require("../../assets/fonts/SourceSansPro-Light.ttf"),
    "Sans-Regular": require("../../assets/fonts/SourceSansPro-Regular.ttf"),
    "Sans-Semibold": require("../../assets/fonts/SourceSansPro-SemiBold.ttf"),
    "Sans-Bold": require("../../assets/fonts/SourceSansPro-Bold.ttf"),
  });
}

module.exports = {
  loadFonts,
};
