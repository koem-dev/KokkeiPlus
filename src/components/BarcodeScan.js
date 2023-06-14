import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import modal from "../../assets/styles/ModalStyles";
import global from "../../assets/styles/GlobalStyles";
import { Animated } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as GC from "../../assets/colors/GlobalColors";

const BarcodeScan = ({ visible, result, scanned, cancel }) => {
  const [flashOn, setFlashOn] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [animation] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.2,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0.8,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
    borderRadius: 20,
  };

  return (
    <View style={global.barcodeWrapper}>
      <Camera
        onBarCodeScanned={scanned ? undefined : result}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        type={type}
        style={[StyleSheet.absoluteFillObject, global.camera]}
        flashMode={flashOn ? "torch" : "off"}
        resizeMode={"cover"}
        ratio="16:9"
      />

      <Animated.View style={[global.scanBox, animatedStyle]} />

      <View style={[global.scanButtonWrapper, global.wh]}>
        <Pressable style={[global.scanAltButton, global.whSpace]}></Pressable>

        <View style={[global.scanMainButtonOutline, global.whSpace]}>
          <Pressable onPress={cancel} style={global.scanMainButton}>
            <Ionicons name="close" size={45} color={GC.primary} />
          </Pressable>
        </View>

        <Pressable
          onPress={toggleFlash}
          style={[global.scanAltButton, global.whSpace]}
        >
          <Ionicons
            name={flashOn ? "flash" : "flash-off"}
            size={25}
            color={GC.primary}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BarcodeScan;
