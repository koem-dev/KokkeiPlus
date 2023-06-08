import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, BackHandler } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import { auth, db } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";

import global from "../../../assets/styles/GlobalStyles";
import dashboard from "../../../assets/styles/DashboardStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonLoader from "../../features/SkeletonLoader";

const HomeScreen = () => {
  const [user, setUser] = useState(null); // ? This user
  const [loading, setLoading] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("users-res")
      .doc(auth.currentUser.uid)
      .get()
      .then((user) => {
        setUser(user.data());
        setLoading(false);
        setIsDataFetched(true);
      });
  }, []);

  const searchRoles = () => {
    if (user?.roles === "reseller") {
      return "reseller";
    } else if (user?.roles === "admin") {
      return "admin";
    } else if (user?.roles === "employee") {
      return "employee";
    } else {
      return "none";
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperPageTitle}>Dashboard</Text>
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Pintasan Kerja Cepat</Text>
          <View style={global.boxWrapperContent}>
            {user?.roles != "none" ? (
              <>
                {searchRoles() === "reseller" && (
                  <View>
                    <Text>Reseller Component</Text>
                  </View>
                )}

                {searchRoles() === "employee" && (
                  <View>
                    <Text>Reseller Component</Text>
                  </View>
                )}

                {searchRoles() === "admin" && (
                  <View>
                    <Text>Reseller Component</Text>
                  </View>
                )}
              </>
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
