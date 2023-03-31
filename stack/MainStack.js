import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../src/pages/RegisterScreen";
import LoginScreen from "../src/pages/LoginScreen";
import HomeScreen from "../src/pages/HomeScreen";
import ResellerDashboard from "../src/pages/ResellerDashboard";
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ResellerDashboard" component={ResellerDashboard} />
    </Stack.Navigator>
  );
}

export default MainStack;
