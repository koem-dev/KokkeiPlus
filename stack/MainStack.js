import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../src/pages/RegisterScreen";
import LoginScreen from "../src/pages/LoginScreen";
import HomeScreen from "../src/pages/HomeScreen";
const MainStackRoute = createNativeStackNavigator();

function MainStack() {
  return (
    <MainStackRoute.Navigator>
      <MainStackRoute.Screen name="Login" component={LoginScreen} />
      <MainStackRoute.Screen name="Register" component={RegisterScreen} />
      <MainStackRoute.Screen
        name="Home"
        component={HomeScreen}
        options={{ detachPreviousScreen: true, headerBackVisible: false }}
      />
    </MainStackRoute.Navigator>
  );
}

export default MainStack;
