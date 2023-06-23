import { View, Text, Modal, ActivityIndicator } from "react-native";
import React from "react";
import loading from "../../assets/styles/LoadingStyles";
import { StatusBar } from "expo-status-bar";
import * as GC from "../../assets/colors/GlobalColors";

const Loading = () => {
  return (
    <Modal animationType="fade" transparent={true} statusBarTranslucent={true}>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={GC.primary} />
      </View>
    </Modal>
  );
};

export default Loading;
