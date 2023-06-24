import React, { useRef, useState } from "react";
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
import { Picker } from "@react-native-picker/picker";
import { auth, db } from "../../../services/firebase";
import global from "../../../../assets/styles/GlobalStyles";
import Dropdown from "../../../components/Dropdown";
import { ProgressBar } from "react-native-paper";
import Confetti from "react-native-confetti";

const RegisterScreen = () => {
  // Data
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  // Condition
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [confetti, setConfetti] = useState(null);
  // Otp
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const handleDigit1Change = (text) => {
    setDigit1(text);
    if (text.length === 1) {
      digit2Ref.current.focus();
    }
  };
  const handleDigit2Change = (text) => {
    setDigit2(text);
    if (text.length === 1) {
      digit3Ref.current.focus();
    }
  };
  const handleDigit3Change = (text) => {
    setDigit3(text);
    if (text.length === 1) {
      digit4Ref.current.focus();
    }
  };
  const handleDigit4Change = (text) => {
    setDigit4(text);
  };
  // Page
  const [page, setPage] = useState(1);
  const handleNextPage = () => {
    if (page < 4) {
      if (page === 1) {
        if (name && birthDate && address) {
          setPage(page + 1);
        }
      }
      if (page === 2) {
        if (email && phoneNumber.startsWith("+62")) {
          setPage(page + 1);
        }
      }
      if (page === 3) {
        if (password && passwordConfirmation === password) {
          setPage(page + 1);
        }
      }
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  // Progress
  const numFields = 5; // Total number of fields in the form
  const numFilled = page;
  const percentFilled = (numFilled / numFields) * 100;
  // Birth Date
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
              <Text style={global.formInputLabel}>Nama Lengkap: *</Text>
              <TextInput
                onChangeText={setName}
                value={name}
                placeholder="Masukkan nama lengkap"
                style={global.formInput}
              />
            </View>

            <View style={global.boxWrapper}>
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

            <View style={global.boxWrapper}>
              <Text style={global.formInputLabel}>Alamat: *</Text>
              <TextInput
                onChangeText={setAddress}
                value={address}
                placeholder="Masukkan alamat"
                style={global.formInput}
              />
            </View>

            <View style={global.boxWrapper}>
              <TouchableOpacity onPress={handleNextPage} style={global.button}>
                <Text style={global.buttonText}>Lanjut</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}

        {page === 2 ? (
          <>
            <View style={global.boxWrapper}>
              <Text style={global.formInputLabel}>No HP: *</Text>
              <View style={global.wh}>
                <Picker
                  style={global.formInputPicker}
                  selectedValue={selectedPhoneNumber}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedPhoneNumber(itemValue)
                  }
                >
                  <Picker.Item label="+62" value="+62" />
                  <Picker.Item label="+1" value="+1" />
                </Picker>
                <TextInput
                  onChangeText={setPhoneNumber}
                  value={phoneNumber}
                  placeholder="Masukkan no HP"
                  keyboardType="phone-pad"
                  style={global.formInputWithPicker}
                />
              </View>
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
              <TouchableOpacity onPress={handleNextPage} style={global.button}>
                <Text style={global.buttonText}>Lanjut</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePrevPage}
                style={global.buttonSecondary}
              >
                <Text style={global.buttonSecondaryText}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}

        {page === 3 ? (
          <>
            <View style={global.boxWrapper}>
              <Text style={global.formInputLabel}>Password: *</Text>
              <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Masukkan password"
                secureTextEntry={true}
                style={global.formInput}
              />
            </View>

            <View style={global.boxWrapper}>
              <Text style={global.formInputLabel}>Konfirmasi Password: *</Text>
              <TextInput
                onChangeText={setPasswordConfirmation}
                value={passwordConfirmation}
                placeholder="Konfirmasi password"
                secureTextEntry={true}
                style={global.formInput}
              />
            </View>

            <View style={global.boxWrapper}>
              <TouchableOpacity onPress={handleNextPage} style={global.button}>
                <Text style={global.buttonText}>Lanjut</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePrevPage}
                style={global.buttonSecondary}
              >
                <Text style={global.buttonSecondaryText}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
        {page === 4 ? (
          <>
            <View style={{ marginTop: 50 }}>
              <View style={global.boxWrapper}>
                <Text style={[global.mainText, global.center]}>
                  Kode OTP telah dikirim ke email Anda
                </Text>
                <Text style={[global.mainText, global.center]}>{email}</Text>
              </View>

              <View style={global.boxWrapper}>
                <View style={global.otpContainer}>
                  <TextInput
                    style={global.otpInput}
                    value={digit1}
                    onChangeText={handleDigit1Change}
                    maxLength={1}
                    keyboardType="numeric"
                  />
                  <TextInput
                    ref={digit2Ref}
                    style={global.otpInput}
                    value={digit2}
                    onChangeText={handleDigit2Change}
                    maxLength={1}
                    keyboardType="numeric"
                  />
                  <TextInput
                    ref={digit3Ref}
                    style={global.otpInput}
                    value={digit3}
                    onChangeText={handleDigit3Change}
                    maxLength={1}
                    keyboardType="numeric"
                  />
                  <TextInput
                    ref={digit4Ref}
                    style={global.otpInput}
                    value={digit4}
                    onChangeText={handleDigit4Change}
                    maxLength={1}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={{ marginTop: 50 }}>
                <View style={global.boxWrapper}>
                  <TouchableOpacity
                    onPress={handleRegister}
                    style={global.button}
                  >
                    <Text style={global.buttonText}>Daftar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handlePrevPage}
                    style={global.buttonSecondary}
                  >
                    <Text style={global.buttonSecondaryText}>Kembali</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
