import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import Checkbox from "expo-checkbox";

import { auth, db } from "../../../services/firebase";

// CSS
import global from "../../../../assets/styles/GlobalStyles";

const RegisterScreen = () => {
  //? Data
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  //? Unshown Data
  const [roles, setRoles] = React.useState("reseller");
  const [verified, setVerified] = React.useState(false);
  //? Condition
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
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection("users-res").doc(auth.currentUser.uid).set({
            uid: auth.currentUser.uid,
            name,
            phoneNumber,
            email,
            address,
            verified,
            roles,
          });
        })
        .catch((error) => {
          alert(error.message);
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
      <View style={global.container}>
        <View style={global.formWrapper}>
          <Text style={global.formTitle}>
            Halo, Isi kelengkapan data untuk menjadi Reseller Kokkei!
          </Text>
          <View style={global.inputWrapper}>
            <Text style={global.formInputLabel}>Nama Lengkap: *</Text>
            <TextInput
              onChangeText={setName}
              value={name}
              placeholder="Masukkan nama lengkap"
              style={global.formInput}
            />
          </View>
          <View style={global.inputWrapper}>
            <Text style={global.formInputLabel}>No HP: *</Text>
            <TextInput
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              placeholder="Masukkan no hp"
              inputMode="tel"
              style={global.formInput}
            />
          </View>
          <View style={global.inputWrapper}>
            <Text style={global.formInputLabel}>Alamat: *</Text>
            <TextInput
              onChangeText={setAddress}
              value={address}
              placeholder="Masukkan alamat"
              style={global.formInput}
            />
          </View>
          <View style={global.inputWrapper}>
            <Text style={global.formInputLabel}>Email: *</Text>
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Masukkan email"
              inputMode="email"
              style={global.formInput}
            />
          </View>
          <View style={global.inputWrapper}>
            <Text style={global.formInputLabel}>Password: *</Text>
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Masukkan password"
              secureTextEntry={true}
              style={global.formInput}
            />
          </View>
          <View style={global.inputWrapper}>
            <Text style={global.formInputLabel}>Konfirmasi Password: *</Text>
            <TextInput
              onChangeText={setPasswordConfirmation}
              value={passwordConfirmation}
              placeholder="Konfirmasi password"
              secureTextEntry={true}
              style={global.formInput}
            />
          </View>

          <View style={global.checkboxWrapper}>
            <Checkbox
              value={acceptedTerms}
              onValueChange={setAcceptedTerms}
              style={global.checkbox}
            />
            <Text> Saya menyetujui syarat dan ketentuan </Text>
          </View>

          <TouchableOpacity onPress={handleRegister} style={global.button}>
            <Text style={global.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
