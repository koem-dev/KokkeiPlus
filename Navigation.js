import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AuthScreen from "./src/pages/auth/AuthScreen";
import ResellerDashboard from "./src/pages/user/UsDashboard";
import ResellerProfile from "./src/pages/user/UsProfile";
import LoginScreen from "./src/pages/auth/login/LoginScreen";
import RegisterScreen from "./src/pages/auth/register/RegisterScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EmAttendance from "./src/pages/employee/EmAttendance";
import UsWork from "./src/pages/user/UsWork";
import * as GC from "./assets/colors/GlobalColors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: false }}
      >
        <Stack.Screen name="AuthGroup" component={AuthStack} />
        <Stack.Screen name="HomeGroup" component={HomeTab} />
        <Stack.Screen name="FeatureGroup" component={FeatureStack} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

function FeatureStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="UserWork"
        component={UsWork}
      />
      <Stack.Screen
        name="EmployeeAttendance"
        component={EmAttendance}
        options={{
          headerShown: true,
          title: false,
          headerBackTitle: "Kembali ke Pekerjaan",
          headerBackTitleVisible: true,
          headerBackTitleStyle: {
            fontSize: 14,
          },
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
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
          height: 60,
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          marginTop: -10,
          padding: 0,
          marginBottom: 10,
        },
        headerShown: false,
        tabBarActiveTintColor: GC.primary,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="inbox" color={color} size={20} />
          ),
        }}
        name="Dashboard"
        component={ResellerDashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bookmark" color={color} size={20} />
          ),
        }}
        name="Pekerjaan"
        component={FeatureStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope" color={color} size={20} />
          ),
        }}
        name="Notifikasi"
        component={ResellerDashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={20} />
          ),
        }}
        name="Akun"
        component={ResellerProfile}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
