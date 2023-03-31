import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

const InputOptionPicker = ({ options, onOptionSelected }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (typeof onOptionSelected === "function") {
      onOptionSelected(option);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={forms.textInput}
        >
          <Text>
            {selectedOption ? selectedOption.label : "Pilih peran Anda"}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView>
          <View style={styles.modalContainer}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => handleOptionSelect(option)}
                style={styles.optionButton}
              >
                <Text>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputTitle: {
    marginTop: 30,
    fontSize: 15,
  },
  optionInput: {
    height: 45,
    width: 350,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  modalContainer: {
    backgroundColor: "#fff",
    height: 300,
    marginTop: 540,
    alignItems: "center",
  },
  optionButton: {
    height: 45,
    width: "100%",
    marginTop: 5,
    padding: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});

const forms = StyleSheet.create({
  formContainer: {
    margin: 20,
    marginBottom: 100,
    flex: 1,
    alignItems: "center",
  },
  textInputContainer: {
    marginBottom: 20,
  },

  textInputTitle: {
    fontSize: 13,
    marginBottom: 10,
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    width: 320,
    borderRadius: 8,
  },
  textInputHint: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
    width: 320,
  },
});

export default InputOptionPicker;
