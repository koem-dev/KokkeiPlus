import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth, db } from "../../services/firebase";
import global from "../../../assets/styles/GlobalStyles";

const UserWork = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
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

  return (
    <SafeAreaView style={global.container}>
      <View style={global.boxWrapperContainer}>
        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperPageTitle}>Pusat Pekerjaan</Text>
        </View>

        <View style={global.boxWrapper}>
          <Text style={global.boxWrapperTitle}>Fitur Pengguna:</Text>
        </View>

        <View style={[global.boxWrapper, global.wh]}>
          {user?.roles.employee === true && (
            <>
              <Pressable
                onPress={() => navigation.navigate("EmployeeAttendance")}
                style={global.featureWrapper}
              >
                <Image
                  source={require("../../../assets/images/attendance.png")}
                  style={global.featureIcon}
                />
                <Text style={global.featureText}>Absensi</Text>
              </Pressable>
              <Pressable style={[global.featureWrapper, global.whSpace]}>
                <Image
                  source={require("../../../assets/images/shipping.png")}
                  style={global.featureIcon}
                />
                <Text style={global.featureText}>Pengiriman</Text>
              </Pressable>
            </>
          )}

          {user?.roles.reseller === true && (
            <View>
              <Text></Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserWork;
