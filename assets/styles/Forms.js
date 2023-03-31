import { StyleSheet, Text, View } from "react-native";
import React from "react";

const forms = StyleSheet.create({
  formContainer: {
    margin: 20,
    marginBottom: 100,
    flex: 1,
    alignItems: "center",
  },
  formTitle: {
    fontSize: 40,
    marginTop: 25,
    marginBottom: 50,
    width: 320,
    textAlign: "left",
    color: "#5E503F",
    fontFamily: "Sans-Regular",
  },
  textInputContainer: {
    marginBottom: 20,
  },

  textInputTitle: {
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "Sans-Regular",
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    width: 320,
    borderRadius: 8,
    fontFamily: "Sans-Light",
  },
  textInputHint: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
    width: 320,
    fontFamily: "Sans-Regular",
  },
  buttonContainer: {
    height: 45,
    width: 320,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#5E503F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Sans-Regular",
  },

  information: {
    fontSize: 12,
    color: "#5E503F",
    marginTop: 20,
    width: 320,
    textAlign: "center",
    fontFamily: "Sans-Regular",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 12,
    color: "#999",
    fontFamily: "Sans-Regular",
  },

  directContainer: {
    marginTop: 20,
  },
  directText: {
    fontSize: 12,
    color: "#5E503F",
    fontFamily: "Sans-Regular",
  },
});

export default forms;
