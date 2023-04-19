import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../src/pages/auth/LoginScreen";
import RegisterScreen from "../src/pages/auth/RegisterScreen";

import HomeScreen from "../src/pages/HomeScreen";
import UserProfile from "../src/pages/user/UserProfile";

import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthGroup" component={AuthStack} />
      <Stack.Screen name="HomeGroup" component={HomeTab} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
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
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={30} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" color={color} size={30} />
          ),
        }}
        name="Profile"
        component={UserProfile}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
