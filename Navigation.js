import React from "react";

import { Easing } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import AuthScreen from "./src/pages/auth/AuthScreen";

import ResellerDashboard from "./src/pages/user/ResellerDashboard";
import ResellerProfile from "./src/pages/user/ResellerProfile";

import LoginScreen from "./src/pages/auth/login/LoginScreen";

import RegisterScreen from "./src/pages/auth/register/RegisterScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthGroup" component={AuthStack} />
        <Stack.Screen name="HomeGroup" component={HomeTab} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animationEnabled: false,
        headerMode: "float",
      }}
    >
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ headerTitle: "Dashboard" }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerTitle: "Daftar" }}
      />
    </Stack.Navigator>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          height: 80,
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -20,
          marginBottom: 15,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={30} />
          ),
        }}
        name="Dashboard"
        component={ResellerDashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" color={color} size={30} />
          ),
        }}
        name="Profile"
        component={ResellerProfile}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
