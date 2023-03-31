import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import Checkbox from "expo-checkbox";

import { auth, db } from "../services/firebase";
import forms from "../../assets/styles/Forms";
import main from "../../assets/styles/Main";

const RegisterScreen = () => {
  // ? Data
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  // ? Unshown Data
  const [roles, setRoles] = React.useState("none");
  const [verified, setVerified] = React.useState(false);
  // ? Condition
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleRegister = () => {
    if (
      acceptedTerms &&
      name &&
      phoneNumber &&
      email &&
      password &&
      passwordConfirmation === password
    ) {
      auth.createUserWithEmailAndPassword(email, password).then(() => {
        db.collection("users").doc(auth.currentUser.uid).set({
          uid: auth.currentUser.uid,
          name,
          phoneNumber,
          email,
          address,
          roles,
          verified,
        });
      });
    } else if (!name || !phoneNumber || !email || !password) {
      alert("Mohon isi semua kolom");
    } else if (passwordConfirmation !== password) {
      alert("Password tidak sama");
    } else if (!acceptedTerms) {
      alert("Mohon menerima syarat dan ketentuan");
    }
  };

  return (
    <ScrollView>
      <View style={main.container}>
        <View style={forms.formContainer}>
          <Text style={forms.formTitle}>
            Halo!{"\n"}Daftar untuk{"\n"}memulai
          </Text>

          <View style={forms.textInputContainer}>
            <Text style={forms.textInputTitle}>Nama Lengkap: *</Text>
            <TextInput
              onChangeText={setName}
              value={name}
              placeholder="Masukkan nama lengkap"
              style={forms.textInput}
            />
          </View>

          <View style={forms.textInputContainer}>
            <Text style={forms.textInputTitle}>No HP: *</Text>
            <TextInput
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              placeholder="Masukkan no hp"
              style={forms.textInput}
              inputMode="tel"
            />
          </View>

          <View style={forms.textInputContainer}>
            <Text style={forms.textInputTitle}>Alamat: *</Text>
            <TextInput
              onChangeText={setAddress}
              value={address}
              placeholder="Masukkan alamat"
              style={forms.textInput}
            />
          </View>

          <View style={forms.textInputContainer}>
            <Text style={forms.textInputTitle}>Email: *</Text>
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Masukkan email"
              style={forms.textInput}
              inputMode="email"
            />
          </View>

          <View style={forms.textInputContainer}>
            <Text style={forms.textInputTitle}>Password: *</Text>
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Masukkan password"
              style={forms.textInput}
              secureTextEntry={true}
            />
          </View>

          <View style={forms.textInputContainer}>
            <Text style={forms.textInputTitle}>Konfirmasi Password: *</Text>
            <TextInput
              onChangeText={setPasswordConfirmation}
              value={passwordConfirmation}
              placeholder="Konfirmasi password"
              style={forms.textInput}
              secureTextEntry={true}
            />
          </View>

          <View>
            <TouchableOpacity
              style={forms.buttonContainer}
              onPress={handleRegister}
            >
              <Text style={forms.buttonText}>Daftar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={forms.checkboxContainer}>
              <Checkbox
                value={acceptedTerms}
                onValueChange={setAcceptedTerms}
                style={forms.checkbox}
              />
              <Text style={forms.checkboxText}>
                {" "}
                Saya menyetujui syarat dan ketentuan{" "}
              </Text>
            </View>

            <Text style={forms.information}>
              Akun Anda akan diverifikasi oleh tim kami terlebih dahulu, untuk
              dapat menggunakan fitur dalam aplikasi
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
