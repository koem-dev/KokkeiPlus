import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, BackHandler } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import { auth, db } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";

import global from "../../../assets/styles/GlobalStyles";
import dashboard from "../../../assets/styles/DashboardStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonLoader from "../../features/SkeletonLoader";

function searchRoles() {
  switch (user?.roles) {
    case "reseller":
      return "reseller";
    case "sales":
      return "sales";
    case "assembler":
      return "assembler";
    case "operator":
      return "operator";
    default:
      return "none";
  }
}

const HomeScreen = () => {
  const [user, setUser] = useState(null); // ? This user
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

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
          <Text style={global.boxWrapperPageTitle}>Dashboard</Text>
        </View>

        <View style={global.boxWrapper}>
          <View style={global.aiWrapper}>
            <View style={global.aiBarWrapper}>
              <Text style={global.aiBarText}>koem</Text>
            </View>
            <View style={global.aiBubbleWrapper}>
              <Text style={global.aiBubbleText}>
                Halo {user?.name}, Semangat bekerja hari ini!
              </Text>
            </View>
          </View>
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Pintasan Kerja Cepat</Text>
          <View style={global.boxWrapperContent}>
            {user?.roles != "none" ? (
              <Text>Pintasan (WIP)</Text>
            ) : (
              <Text>Maaf tidak ada pintasan yang tersedia</Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
