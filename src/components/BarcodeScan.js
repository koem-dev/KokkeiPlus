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
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { Animated } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";

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
        <Pressable onPress={cancel} style={global.scanButton}>
          <Ionicons name="close" size={35} color="white" />
        </Pressable>

        <Pressable
          onPress={toggleFlash}
          style={[global.scanButton, global.whSpace]}
        >
          <Ionicons
            name={flashOn ? "flash" : "flash-off"}
            size={25}
            color="white"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BarcodeScan;
