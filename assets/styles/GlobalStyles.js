import { StyleSheet } from "react-native";
import * as GC from "../colors/GlobalColors";

const global = StyleSheet.create({
  //! Container
  container: {
    flex: 1,
    backgroundColor: GC.background,
    alignItems: "center",
  },

  //! Box Wrapper
  // Box Wrapper Container
  boxWrapperContainer: {
    width: "100%",
    marginTop: 10,
  },
  // Box Wrapper
  boxWrapper: {
    backgroundColor: GC.background,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  // Box Wrapper Title
  boxWrapperTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: GC.primaryText,
    padding: 10,
  },
  // Box Wrapper Pressable
  boxWrapperPressable: {
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 18,
  },
  boxWrapperPressableDetail: {
    marginLeft: 10,
    flexDirection: "column",
  },
  boxWrapperPressableTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: GC.primaryText,
  },
  boxWrapperPressableDescription: {
    fontSize: 12,
    color: GC.secondaryText,
  },
  boxWrapperPressableVector: {
    color: GC.primaryText,
  },

  //! Line Break
  lineBreak: {
    width: "90%",
    height: 1,
    backgroundColor: GC.border,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },

  //! Spacing
  spacing: {
    margin: 10,
  },

  //! User
  userWrapper: {
    padding: 20,
    marginBottom: 30,
  },
  userTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: GC.primaryText,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: GC.primaryText,
  },
  userPhone: {
    fontSize: 14,
    color: GC.primaryText,
  },

  //! Form
  formWrapper: {
    width: "100%",
    padding: 20,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 10,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: GC.primaryText,
    marginBottom: 10,
  },
  formInput: {
    backgroundColor: GC.background,
    width: "100%",
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    color: GC.primaryText,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: GC.border,
  },
  formInputError: {
    backgroundColor: GC.background,
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    color: GC.primaryText,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: GC.error,
  },
  formInputErrorText: {
    fontSize: 12,
    color: GC.error,
    marginBottom: 10,
  },
  formInputLabel: {
    fontSize: 12,
    color: GC.primaryText,
    marginBottom: 10,
  },

  //! Button
  buttonWrapper: {
    width: "100%",
    padding: 20,
  },
  button: {
    backgroundColor: GC.primaryButton,
    width: "100%",
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GC.primaryButtonText,
  },
  buttonSecondary: {
    backgroundColor: GC.secondaryButton,
    width: "100%",
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: GC.inputFieldBorder,
  },
  buttonSecondaryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GC.secondaryButtonText,
  },

  //! Checkbox
  checkboxWrapper: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
  },
  checkbox: {
    marginBottom: 10,
    marginRight: 10,
  },
});

export default global;
