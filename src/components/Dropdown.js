import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
  Animated,
} from "react-native";
import global from "../../assets/styles/GlobalStyles";
import { StatusBar } from "expo-status-bar";

function Dropdown({ options, selectedValue, onValueChange, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(selectedValue || defaultValue);
  const [modalAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    setValue(selectedValue || defaultValue);
  }, [selectedValue, defaultValue]);

  function handleOptionPress(option) {
    setIsOpen(false);
    setValue(option.value);
    onValueChange(option.value);
  }

  function handleModalOpen() {
    setIsOpen(true);
    Animated.timing(modalAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  function handleModalClose() {
    Animated.timing(modalAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsOpen(false));
  }

  const modalTranslateY = modalAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <Pressable style={global.formInputPicker} onPress={handleModalOpen}>
      <View style={global.pickerTextWrapper}>
        <Text style={global.pickerText}>{value}</Text>
      </View>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />

      <Modal visible={isOpen} transparent={true} animationType="fade">
        <View style={global.modalContainer}>
          <Animated.View
            style={[
              global.modalWrapper,
              { transform: [{ translateY: modalTranslateY }] },
            ]}
          >
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionPress(item)}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
            <TouchableOpacity onPress={handleModalClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </Pressable>
  );
}

export default Dropdown;
