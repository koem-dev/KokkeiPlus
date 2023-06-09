import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { auth, AuthProvider } from "../../../services/firebase";
import global from "../../../../assets/styles/GlobalStyles";
import * as GC from "../../../../assets/colors/GlobalColors";

const ResellerLoginScreen = () => {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

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

  const handleLogin = () => {
    try {
      AuthProvider.login(email, password).then((result) => {
        if (result) {
          directToHomeScreen();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const directToRegisterScreen = () => {
    navigation.navigate("RegisterScreen");
  };

  const directToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeGroup" }],
    });
  };

  return (
    <View style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.titleText}>Halo, selamat datang!</Text>
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.formInputLabel}>Email: *</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Masukkan email"
            inputMode="email"
            style={global.formInput}
          />
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.formInputLabel}>Password: *</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Masukkan password"
            secureTextEntry={!showPassword}
            style={global.formInput}
          />
        </View>

        <View style={global.boxWrapper}>
          <View style={global.checkboxWrapper}>
            <Checkbox
              value={showPassword}
              onValueChange={toggleShowPassword}
              style={global.checkbox}
              color={GC.checkboxColor}
            />
            <Text>Tampilkan password</Text>
          </View>
        </View>

        <View style={global.boxWrapper}>
          <TouchableOpacity onPress={handleLogin} style={global.button}>
            <Text style={global.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={directToRegisterScreen}
            style={global.buttonSecondary}
          >
            <Text style={global.buttonSecondaryText}>Belum punya akun?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResellerLoginScreen;
