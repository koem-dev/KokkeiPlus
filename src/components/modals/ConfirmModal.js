import React, { useState, useEffect } from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";

import { StatusBar } from "expo-status-bar";
import ModalStyles from "../../../assets/styles/ModalStyles";

const ConfirmModal = ({
  visible,
  onClose,
  onConfirm,
  ModalCancelText,
  ModalConfirmText,
  ModalTitle,
  ModalDescription,
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
      <View style={ModalStyles.modalContainer}>
        <View style={ModalStyles.modalWrapper}>
          <View style={ModalStyles.modalContent}>
            <Text style={ModalStyles.modalTitle}>{ModalTitle}</Text>
            <Text style={ModalStyles.modalDescription}>{ModalDescription}</Text>
            <View style={ModalStyles.modalOptionContainer}>
              <TouchableOpacity
                onPress={handleCancel}
                style={ModalStyles.modalOptionInactive}
              >
                <Text style={ModalStyles.modalTextInactive}>
                  {ModalCancelText || "Cancel"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirm}
                style={ModalStyles.modalOptionActive}
              >
                <Text style={ModalStyles.modalTextActive}>
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

export default ConfirmModal;
