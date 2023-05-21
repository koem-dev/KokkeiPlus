import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as GC from "../../../assets/colors/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import { auth, AuthProvider } from "../../services/firebase";
import global from "../../../assets/styles/GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AuthProvider.autoLogin().then((result) => {
      setLoggedIn(result);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        directToHomeScreen();
      }
    });

    return unsubscribe;
  }, []);

  const directToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeGroup" }],
    });
  };

  //! Direct Handler
  const directToLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Halo, selamat datang!</Text>
          <TouchableOpacity
            style={[global.boxWrapperPressable, global.spacing]}
            onPress={directToLoginScreen}
          >
            <MaterialCommunityIcons
              name="shopping"
              size={24}
              color={GC.secondaryIcon}
            />
            <View style={global.boxWrapperPressableDetail}>
              <Text style={global.boxWrapperPressableTitle}>
                Masuk ke Kokkei Plus
              </Text>
              <Text style={global.boxWrapperPressableDescription}>
                Masuk menggunakan akun Kokkei Plus
              </Text>
            </View>
          </TouchableOpacity>

          <View style={global.lineBreak} />

          <TouchableOpacity
            style={[global.boxWrapperPressable, global.spacing]}
          >
            <MaterialIcons name="lock" size={24} color="black" />
            <View style={global.boxWrapperPressableDetail}>
              <Text style={global.boxWrapperPressableTitle}>Khusus</Text>
              <Text style={global.boxWrapperPressableDescription}>
                Masuk menggunakan akun khusus
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
