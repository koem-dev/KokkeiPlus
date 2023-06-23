import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
  ProgressBarAndroid,
} from "react-native";

import Checkbox from "expo-checkbox";

import { auth, db } from "../../../services/firebase";

// CSS
import global from "../../../../assets/styles/GlobalStyles";
import Dropdown from "../../../components/Dropdown";
import { ProgressBar } from "react-native-paper";

const RegisterScreen = () => {
  // Data
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [showOptions, setShowOptions] = React.useState(false);
  // Condition
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  // Page
  const [page, setPage] = React.useState(1);
  // Progress
  const numFields = 4; // Total number of fields in the form
  const numFilled = page;
  const percentFilled = (numFilled / numFields) * 100;

  const handleGenderOptionPress = (option) => {
    setGender(option);
    setShowOptions(false);
  };
  const handleGenderTextInputChange = (value) => {
    setGender(value);
  };
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const genderOptions = ["Laki-Laki", "Perempuan"];

  const handleDateChange = (text) => {
    // Add a "/" character between the day, month, and year
    if (
      (text.length === 2 || text.length === 5) &&
      text.charAt(text.length - 1) !== "/"
    ) {
      text += "/";
    }
    setBirthDate(text);
  };

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
          db.collection("users-res")
            .doc(auth.currentUser.uid)
            .set({
              uid: auth.currentUser.uid,
              detail: {
                name,
                phoneNumber,
                email,
                address,
                gender,
              },
              roles: {
                verified: false,
                reseller: false,
                employee: false,
                admin: false,
              },
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
    <ScrollView style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.titleText}>Buat akun baru di Kokkei Plus</Text>
          <ProgressBar
            progress={percentFilled / 100}
            color="#0081C9"
            style={global.progressBar}
          />
          <Text style={global.detailText}>
            {page}/{numFields} kolom terisi
          </Text>
        </View>
        {page === 1 ? (
          <>
            <View style={global.boxWrapper}>
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
                <Text style={global.formInputLabel}>Tanggal Lahir: *</Text>
                <TextInput
                  value={birthDate}
                  onChangeText={handleDateChange}
                  placeholder="DD/MM/YYYY"
                  keyboardType="numeric"
                  maxLength={10}
                  style={global.formInput}
                />
              </View>
            </View>
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
