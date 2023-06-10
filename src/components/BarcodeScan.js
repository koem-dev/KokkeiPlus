import { View, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import modal from "../../assets/styles/ModalStyles";
import global from "../../assets/styles/GlobalStyles";

const BarcodeScan = ({ visible, result, scanned, cancel }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
    >
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={modal.modalContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : result}
          style={modal.modalQRCode}
        />
        <View style={global.boxWrapperContainer}>
          <View style={global.boxWrapper}>
            <Pressable style={global.button} onPress={cancel}>
              <Text style={global.buttonText}>Batal</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BarcodeScan;
