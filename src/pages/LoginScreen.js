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

import { auth, AuthProvider } from "../services/firebase";
import forms from "../../assets/styles/Forms";
import main from "../../assets/styles/Main";

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
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    try {
      AuthProvider.login(email, password).then((result) => {
        if (result) {
          navigation.navigate("Home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const directToRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={main.container}>
      <View style={forms.formContainer}>
        <Text style={forms.formTitle}>Selamat datang di Kokkei Plus</Text>

        <View style={forms.textInputContainer}>
          <Text style={forms.textInputTitle}>Email: *</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Masukkan email"
            inputMode="email"
            style={forms.textInput}
          />
        </View>

        <View style={forms.textInputContainer}>
          <Text style={forms.textInputTitle}>Password: *</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Masukkan password"
            secureTextEntry={!showPassword}
            style={forms.textInput}
          />
        </View>

        <View style={forms.checkboxContainer}>
          <Checkbox
            value={showPassword}
            onValueChange={toggleShowPassword}
            style={forms.checkbox}
          />
          <Text style={forms.checkboxText}>Tampilkan password</Text>
        </View>

        <TouchableOpacity onPress={handleLogin} style={forms.buttonContainer}>
          <Text style={forms.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={directToRegisterScreen}
          style={forms.directContainer}
        >
          <Text style={forms.Text}>Belum punya akun?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
