import React from "react";
import { View, TouchableOpacity, Text, Modal, FlatList } from "react-native";

const Dropdown = ({
  visible,
  options,
  selectedOption,
  handleOptionPress,
  toggleOptions,
}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onPress={toggleOptions}
      >
        <View style={{ backgroundColor: "white", padding: 20 }}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOptionPress(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Dropdown;
