import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, BackHandler } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import { auth, db } from "../services/firebase";
import pages from "../../assets/styles/Pages";
import main from "../../assets/styles/Main";
import { useNavigation } from "@react-navigation/native";
import ResellerDashboard from "./dashboard/ResellerDashboard";
import OperatorDashboard from "./dashboard/OperatorDashboard";

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
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((user) => {
        setUser(user.data());
      });
  }, []);

  return (
    <View style={main.container}>
      <Text style={pages.pageTitle}>
        Halo!{"\n"}
        {user?.name}
      </Text>

      {user?.verified === false || user?.roles === "none" ? (
        <View>
          <Text style={pages.pageInformation}>
            Tim kami sedang melakukan pengecekan terhadap akun Anda, dan akan
            melakukan verifikasi secepatnya dalam waktu paling lama tiga jam
            kerja.
          </Text>
        </View>
      ) : (
        <View>
          {user?.roles === "reseller" ? (
            <View>
              <Text style={pages.pageSubTitle}>Reseller Dashboard</Text>
              <ResellerDashboard />
            </View>
          ) : user?.roles === "sales" ? (
            <View>
              <Text style={pages.pageSubTitle}>Sales Dashboard</Text>
            </View>
          ) : user?.roles === "assembler" ? (
            <View>
              <Text style={pages.pageSubTitle}>Assembler Dashboard</Text>
            </View>
          ) : user?.roles === "operator" ? (
            <View>
              <Text style={pages.pageSubTitle}>Operator Dashboard</Text>
              <OperatorDashboard />
            </View>
          ) : (
            <Text style={pages.pageInformation}>
              Kami ingin memberitahukan bahwa saat ini akunmu sedang mengalami
              masalah teknis. Tim kami telah mengetahui hal tersebut dan sedang
              berupaya untuk memperbaikinya dalam waktu paling lama satu jam
              kerja.
            </Text>
          )}
          {user?.roles ? (
            <Text style={pages.pageInformation}></Text>
          ) : (
            <Text style={pages.pageInformation}></Text>
          )}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
