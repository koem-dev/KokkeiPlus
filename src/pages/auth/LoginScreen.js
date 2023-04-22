import React, { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
  const directToResellerLoginScreen = () => {
    navigation.navigate("ResellerLogin");
  };

  const directToEmployeeLoginScreen = () => {
    navigation.navigate("EmployeeLogin");
  };

  return (
    <View style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Halo, selamat datang!</Text>
          <TouchableOpacity
            style={[global.boxWrapperPressable, global.spacing]}
            onPress={directToResellerLoginScreen}
          >
            <MaterialCommunityIcons
              name="shopping"
              size={24}
              color={GC.secondaryIcon}
            />
            <View style={global.boxWrapperPressableDetail}>
              <Text style={global.boxWrapperPressableTitle}>Reseller</Text>
              <Text style={global.boxWrapperPressableDescription}>
                Masuk sebagai reseller
              </Text>
            </View>
          </TouchableOpacity>

          <View style={global.lineBreak} />

          <TouchableOpacity
            style={[global.boxWrapperPressable, global.spacing]}
          >
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={GC.secondaryIcon}
            />
            <View style={global.boxWrapperPressableDetail}>
              <Text style={global.boxWrapperPressableTitle}>Karyawan</Text>
              <Text style={global.boxWrapperPressableDescription}>
                Masuk sebagai karyawan
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
