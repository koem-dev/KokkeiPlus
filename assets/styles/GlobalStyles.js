import { StyleSheet } from "react-native";
import * as GC from "../colors/GlobalColors";

const global = StyleSheet.create({
  //! Container
  container: {
    flex: 1,
    backgroundColor: GC.background,
    padding: 18,
    width: "100%",
    height: "100%",
  },
  pureContainer: {
    flex: 1,
    backgroundColor: GC.background,
    alignItems: "center",
    width: "100%",
    height: "100%",
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
    marginBottom: 5,
    width: "100%",
  },
  // Box Wrapper Title
  boxWrapperTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: GC.blackText,
  },
  boxWrapperPageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: GC.blackText,
  },

  //! Box Wrapper Pressable
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
    width: 20,
  },
  boxWrapperContent: {
    width: "100%",
  },
  boxWrapperContentTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: GC.blackText,
  },
  boxWrapperLink: {
    fontSize: 12,
    color: GC.primary,
  },

  // Component
  progressBar: {
    height: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  otpInput: {
    borderWidth: 1,
    borderColor: GC.disabledButtonBorder,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginHorizontal: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: 64,
  },

  //! Text
  detailText: {
    fontSize: 12,
    color: GC.secondaryText,
  },
  detailTextBold: {
    fontSize: 12,
    fontWeight: "bold",
    color: GC.blackText,
  },
  detailTextLink: {
    fontSize: 12,
    color: GC.primary,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: GC.blackText,
  },
  mainText: {
    fontSize: 16,
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
    height: 25,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  userRolesText: {
    fontSize: 12,
    color: GC.whiteText,
  },

  //! Form
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
  formInputWithPicker: {
    backgroundColor: GC.background,
    width: "70%",
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: GC.blackText,
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: GC.border,
  },
  formInputPicker: {
    backgroundColor: GC.background,
    width: "30%",
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: GC.blackText,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: GC.border,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerText: {
    fontSize: 14,
    color: GC.blackText,
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
    fontSize: 14,
    color: GC.blackText,
    marginBottom: 10,
  },

  //! Button
  button: {
    backgroundColor: GC.primaryButton,
    width: "100%",
    height: 50,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: GC.primaryButtonBorder,
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
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: GC.secondaryButtonBorder,
  },
  buttonSecondaryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GC.secondaryButtonText,
  },
  buttonDisabled: {
    backgroundColor: GC.disabledButton,
    width: "100%",
    height: 50,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: GC.disabledButtonBorder,
  },
  buttonDisabledText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GC.disabledButtonText,
  },

  //! Card
  cardWrapper: {
    width: "100%",
    marginBottom: 20,
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

  //! Slicer
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
  w45: {
    width: "45%",
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
  left: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  //! Barcode
  barcodeBox: {
    width: "100%",
    height: "100%",
  },

  //! Feature
  featureWrapper: {
    marginBottom: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  featureIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  featureText: {
    fontSize: 12,
    color: GC.blackText,
  },

  //! Qr Code
  barcodeWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  scanBox: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "transparent",
    marginBottom: 100,
  },
  scanButtonWrapper: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    margin: 50,
  },
  scanMainButton: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
  },
  scanMainButtonOutline: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "white",
  },
  scanAltButton: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
  },

  //! Modal
  modalContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalWrapper: {
    marginBottom: 20,
    width: "90%",
    borderRadius: 10,
    padding: 50,
    backgroundColor: GC.background,
  },
});

export default global;
