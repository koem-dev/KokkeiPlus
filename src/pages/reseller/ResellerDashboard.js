import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, BackHandler } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import { auth, db } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";

import global from "../../../assets/styles/GlobalStyles";
import dashboard from "../../../assets/styles/DashboardStyles";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const navigation = useNavigation();

  useEffect(() => {
    db.collection("users-reseller")
      .doc(auth.currentUser.uid)
      .get()
      .then((user) => {
        setUser(user.data());
      });
  }, []);

  return (
    <SafeAreaView style={global.container}>
      <Text>
        Halo!{"\n"}
        {user?.name}
      </Text>

      {user?.verified === false || user?.roles === "none" ? (
        <View>
          <Text>
            Tim kami sedang melakukan pengecekan terhadap akun Anda, dan akan
            melakukan verifikasi secepatnya dalam waktu paling lama tiga jam
            kerja.
          </Text>
        </View>
      ) : (
        <View>
          {user?.roles === "reseller" ? (
            <View>
              <Text>Reseller Dashboard</Text>
              <ResellerDashboard />
            </View>
          ) : user?.roles === "sales" ? (
            <View>
              <Text>Sales Dashboard</Text>
            </View>
          ) : user?.roles === "assembler" ? (
            <View>
              <Text>Assembler Dashboard</Text>
            </View>
          ) : user?.roles === "operator" ? (
            <View>
              <Text>Operator Dashboard</Text>
            </View>
          ) : (
            <Text>Loading</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
