import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { AuthProvider } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { db, auth } from "../../services/firebase";

import global from "../../../assets/styles/GlobalStyles";
import ConfirmModal from "../../components/modals/ConfirmModal";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalResult, setModalResult] = useState(false);
  const [user, setUser] = useState(null); // ? This user
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

  const showModal = () => {
    setModalVisible(true);
  };

  const handleModalConfirm = () => {
    setModalResult(true);
    logoutHandler();
    setModalVisible(false);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((user) => {
        setUser(user.data());
      });
  }, []);

  return (
    <SafeAreaView style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.userWrapper}>
          <Text style={global.userTitle}>Halo.</Text>
          <Text style={global.userName}>{user?.name || ""}</Text>
          <Text style={global.userPhone}>{user?.phoneNumber || ""}</Text>
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Pengaturan Akun</Text>
          <TouchableOpacity
            onPress={showModal}
            style={[global.boxWrapperPressable, global.spacing]}
          >
            <Octicons
              name="person"
              size={24}
              color="black"
              style={global.boxWrapperPressableVector}
            />
            <View style={global.boxWrapperPressableDetail}>
              <Text style={global.boxWrapperPressableTitle}>Detail Akun</Text>
              <Text style={global.boxWrapperPressableDescription}>
                Alamat, nomor telepon, email, dan lainnya
              </Text>
            </View>
          </TouchableOpacity>

          <View style={global.lineBreak} />

          <TouchableOpacity
            onPress={showModal}
            style={[global.boxWrapperPressable, global.spacing]}
          >
            <Octicons
              name="lock"
              size={24}
              color="black"
              style={global.boxWrapperPressableVector}
            />
            <View style={global.boxWrapperPressableDetail}>
              <Text style={global.boxWrapperPressableTitle}>Keamanan</Text>
              <Text style={global.boxWrapperPressableDescription}>
                Ubah pengaturan keamanan akun
              </Text>
            </View>
          </TouchableOpacity>

          <View style={global.lineBreak} />
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Area Berbahaya</Text>
          <TouchableOpacity
            onPress={showModal}
            style={[global.boxWrapperPressable, global.spacing]}
          >
            <Octicons
              name="link-external"
              size={25}
              style={global.boxWrapperPressableVector}
            />
            <View style={global.boxWrapperPressableDetail}>
              <Text style={global.boxWrapperPressableTitle}>Logout</Text>
              <Text style={global.boxWrapperPressableDescription}>
                Keluar dari akun
              </Text>
            </View>
          </TouchableOpacity>

          <View style={global.lineBreak} />

          <ConfirmModal
            visible={modalVisible}
            onConfirm={handleModalConfirm}
            onClose={handleModalClose}
            ModalCancelText={"Batal"}
            ModalConfirmText={"Keluar"}
            ModalTitle={"Keluar dari Kokkei Plus"}
            ModalDescription={"Apakah Anda ingin keluar?"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
