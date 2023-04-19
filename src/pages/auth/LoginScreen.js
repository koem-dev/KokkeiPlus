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

import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

import { auth, AuthProvider } from "../../services/firebase";

const LoginScreen = () => {
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
    navigation.navigate("Register");
  };

  const directToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeGroup" }],
    });
  };

  return (
    <View>
      <View>
        <Text>Selamat datang di Kokkei Plus</Text>

        <View>
          <Text>Email: *</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Masukkan email"
            inputMode="email"
          />
        </View>

        <View>
          <Text>Password: *</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Masukkan password"
            secureTextEntry={!showPassword}
          />
        </View>

        <View>
          <Checkbox value={showPassword} onValueChange={toggleShowPassword} />
          <Text>Tampilkan password</Text>
        </View>

        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={directToRegisterScreen}>
          <Text>Belum punya akun?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
