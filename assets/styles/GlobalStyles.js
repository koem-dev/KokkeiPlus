import { StyleSheet, Text, View } from "react-native";
import React from "react";

const global = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  // Spacing
  spacing: {
    margin: 10,
  },

  // Button Dark
  btnDark: {
    backgroundColor: "#415D43",
    padding: 15,
    borderRadius: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  btnTextDark: {
    color: "#fff",
    fontSize: 13,
  },

  // Alert
  alertContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    height: 150,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#415D43",
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  alertBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  alertBtnDark: {
    backgroundColor: "#415D43",
    padding: 10,
    borderRadius: 15,
    width: "40%",
    height: 50,
    alignItems: "center",
  },
  alertBtnTextDark: {
    color: "#fff",
    fontSize: 13,
  },
  alertBtnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#415D43",
    padding: 10,
    borderRadius: 15,
    width: "40%",
    height: 50,
    alignItems: "center",
  },
  alertBtnTextOutline: {
    color: "#415D43",
    fontSize: 13,
  },

  // Button outline
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#415D43",
    padding: 15,
    borderRadius: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
  },
  btnTextOutline: {
    color: "#415D43",
    fontSize: 13,
  },
});

export default global;
