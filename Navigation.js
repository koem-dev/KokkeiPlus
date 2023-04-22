import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/pages/auth/LoginScreen";

import ResellerDashboard from "./src/pages/reseller/ResellerDashboard";
import ResellerProfile from "./src/pages/reseller/ResellerProfile";

import { MaterialIcons } from "@expo/vector-icons";
import EmployeeLoginScreen from "./src/pages/auth/login/EmployeeLoginScreen";
import ResellerLoginScreen from "./src/pages/auth/login/ResellerLoginScreen";

import ResellerRegisterScreen from "./src/pages/auth/register/ResellerRegisterScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ResellerLogin" component={ResellerLoginScreen} />
      <Stack.Screen name="EmployeeLogin" component={EmployeeLoginScreen} />
      <Stack.Screen
        name="ResellerRegister"
        component={ResellerRegisterScreen}
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
