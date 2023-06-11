import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import modal from "../../assets/styles/ModalStyles";
import global from "../../assets/styles/GlobalStyles";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

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
        <View style={global.barcodeWrapper}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : result}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            style={[StyleSheet.absoluteFillObject]}
          />
          <View style={global.scanFiller}>
            <View style={global.scanBox}>
              <View style={global.scanLine} />
            </View>
          </View>
        </View>
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
