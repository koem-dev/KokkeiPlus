import React, { useState, useEffect } from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import modal from "../../../assets/styles/ModalStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const AttedanceModal = ({
  visible,
  onClose,
  onConfirm,
  ModalCancelText,
  ModalConfirmText,
  ModalTitle,
  ModalDescription,
  ModalLocation,
  ModalDate,
  ModalTime,
}) => {
  const [selected, setSelected] = useState(false);

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    setSelected(true);
    onConfirm();
    onClose();
  };

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
        <View style={modal.modalWrapper}>
          <View style={modal.modalContent}>
            <Text style={modal.modalTitle}>{ModalTitle}</Text>
            <Text style={modal.modalDescription}>{ModalDescription}</Text>
            <View style={modal.modalDetails}>
              <View style={modal.modalDetail}>
                <FontAwesome5 name="map-marker-alt" size={15} color="gray" />
                <Text style={modal.modalDetailText}>{ModalLocation}</Text>
              </View>
              <View style={modal.modalDetail}>
                <FontAwesome5 name="calendar" size={15} color="gray" />
                <Text style={modal.modalDetailText}>{ModalDate}</Text>
              </View>
              <View style={modal.modalDetail}>
                <FontAwesome5 name="clock" size={15} color="gray" />
                <Text style={modal.modalDetailText}>{ModalTime}</Text>
              </View>
            </View>
            <View style={modal.modalOptionContainer}>
              <TouchableOpacity
                onPress={handleCancel}
                style={modal.modalOptionInactive}
              >
                <Text style={modal.modalTextInactive}>
                  {ModalCancelText || "Cancel"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirm}
                style={modal.modalOptionActive}
              >
                <Text style={modal.modalTextActive}>
                  {ModalConfirmText || "Confirm"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AttedanceModal;
