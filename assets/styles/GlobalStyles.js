import { StyleSheet } from "react-native";
import * as GC from "../colors/GlobalColors";

const global = StyleSheet.create({
  //! Container
  container: {
    flex: 1,
    backgroundColor: GC.background,
    alignItems: "center",
    padding: 10,
    width: "100%",
  },

  //! Box Wrapper
  // Box Wrapper Container
  boxWrapperContainer: {
    width: "100%",
    marginTop: 10,
  },
  // Box Wrapper
  boxWrapper: {
    padding: 10,
    marginBottom: 10,
  },
  // Box Wrapper Title
  boxWrapperTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: GC.blackText,
  },
  boxWrapperPageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: GC.blackText,
  },
  // Box Wrapper Pressable
  boxWrapperPressable: {
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  boxWrapperPressableDetail: {
    marginLeft: 15,
    flexDirection: "column",
  },
  boxWrapperPressableTitle: {
    fontSize: 14,
    color: GC.blackText,
  },
  boxWrapperPressableDescription: {
    fontSize: 12,
    color: GC.secondaryText,
  },
  boxWrapperPressableVector: {
    color: GC.blackText,
  },
  boxWrapperContent: {
    width: "100%",
  },
  boxWrapperContentTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: GC.blackText,
  },

  //! Spacing
  spacing: {
    marginBottom: 20,
  },

  //! User
  userWrapper: {
    backgroundColor: GC.background,
    width: "100%",
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    color: GC.blackText,
  },
  userPhone: {
    fontSize: 14,
    color: GC.secondaryText,
  },
  userProfpic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: GC.border,
    marginRight: 10,
  },
  userRolesWrapper: {
    backgroundColor: GC.roles,
    padding: 2,
    borderRadius: 50,
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    height: 25,
    alignItems: "center",
  },
  userRolesText: {
    fontSize: 14,
    color: GC.whiteText,
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
    color: GC.blackText,
    marginBottom: 10,
  },
  formInput: {
    backgroundColor: GC.background,
    width: "100%",
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    color: GC.blackText,
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
    color: GC.blackText,
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
    color: GC.blackText,
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

  //Slicer
  wh: {
    flexDirection: "row",
    alignItems: "center",
  },
  vh: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  whSpace: {
    marginLeft: 10,
  },
  vhSpace: {
    marginTop: 25,
  },
  vhSpaceSmall: {
    marginTop: 5,
  },
  w25: {
    width: "25%",
  },
  w50: {
    width: "50%",
  },
  w75: {
    width: "75%",
  },
  w35: {
    width: "35%",
  },
  w65: {
    width: "65%",
  },

  // AI
  aiWrapper: {
    width: "100%",
    alignItems: "flex-start",
  },
  aiBarWrapper: {
    backgroundColor: GC.roles,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: 5,
    marginBottom: 5,
    width: 80,
    height: 30,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  aiBarText: {
    fontSize: 14,
    color: GC.whiteText,
    marginLeft: 20,
  },
  aiBarBadge: {
    fontSize: 10,
  },
  aiBubbleWrapper: {
    backgroundColor: GC.secondaryBackground,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  aiBubbleText: {
    fontSize: 14,
    color: GC.blackText,
    marginLeft: 10,
  },
});

export default global;
