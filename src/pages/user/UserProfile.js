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
import SkeletonLoader from "../../features/SkeletonLoader";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalResult, setModalResult] = useState(false);
  const [user, setUser] = useState(null); // ? This user
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    db.collection("users-res")
      .doc(auth.currentUser.uid)
      .get()
      .then((user) => {
        setUser(user.data());
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperPageTitle}>Detail Akun</Text>
        </View>

        <View style={global.boxWrapper}>
          <View style={global.userWrapper}>
            {loading ? (
              <SkeletonLoader />
            ) : (
              <>
                <View style={global.wh}>
                  <Image style={global.userProfpic} />
                  <View style={[global.vh, global.whSpace]}>
                    <Text style={[global.userName, global.vhSpaceSmall]}>
                      {user?.name}
                    </Text>
                    <View
                      style={[
                        global.userPhone,
                        global.w65,
                        global.vhSpaceSmall,
                      ]}
                    >
                      <Text style={global.userPhone}>{user?.phoneNumber}</Text>
                    </View>
                    <View
                      style={[
                        global.userRolesWrapper,
                        global.w50,
                        global.vhSpaceSmall,
                      ]}
                    >
                      <Text style={global.userRolesText}>{user?.roles}</Text>
                    </View>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Pengaturan Akun</Text>
          <TouchableOpacity
            style={[global.boxWrapperPressable, global.vhSpace]}
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

          <TouchableOpacity
            style={[global.boxWrapperPressable, global.vhSpace]}
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
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Area Berbahaya</Text>
          <TouchableOpacity
            onPress={showModal}
            style={[global.boxWrapperPressable, global.vhSpace]}
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
