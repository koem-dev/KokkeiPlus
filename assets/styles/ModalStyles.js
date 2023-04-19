import { StyleSheet } from "react-native";
import { GlobalColors } from "../colors/GlobalColors";

const ModalStyles = StyleSheet.create({
  // Modal
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalWrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    justifyContent: "center",
    width: "90%",
    height: 180,
  },

  modalContent: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 10,
    color: "#999",
  },
  modalOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  modalOptionActive: {
    padding: 10,
    borderRadius: 15,
    width: "48%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007aff",
  },
  modalOptionInactive: {
    padding: 10,
    borderRadius: 15,
    width: "48%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTextActive: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
  modalTextInactive: {
    fontSize: 13,
    color: "#999",
    fontWeight: "bold",
  },
});

export default ModalStyles;
