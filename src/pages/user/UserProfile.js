import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { AuthProvider } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";

import global from "../../../assets/styles/GlobalStyles";

const Profile = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();

  const logoutHandler = () => {
    AuthProvider.logout().then((result) => {
      if (result) {
        navigation.reset({
          index: 0,
          routes: [{ name: "AuthGroup" }],
        });
      }
    });
  };

  const alertPressHandler = () => {
    setShowAlert(true);
  };

  const alertCancelHandler = () => {
    setShowAlert(false);
  };

  const alertConfirmHandler = () => {
    setShowAlert(false);
    logoutHandler();
  };

  return (
    <View style={global.container}>
      <TouchableOpacity style={[global.btnOutline, global.spacing]}>
        <Text style={[global.btnTextOutline]}>Bantuan?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={alertPressHandler}
        style={[global.btnDark, global.spacing]}
      >
        <Text style={[global.btnTextDark]}>Logout</Text>
      </TouchableOpacity>

      {showAlert && (
        <View style={global.alertContainer}>
          <Text style={[global.alertTitle, global.spacing]}>
            Apakah Anda yakin ingin keluar?
          </Text>
          <View style={global.alertBtnContainer}>
            <TouchableOpacity
              onPress={alertCancelHandler}
              style={[global.alertBtnDark, global.spacing]}
            >
              <Text style={global.alertBtnTextDark}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={alertConfirmHandler}
              style={[global.alertBtnOutline, global.spacing]}
            >
              <Text style={global.alertBtnTextOutline}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Profile;
