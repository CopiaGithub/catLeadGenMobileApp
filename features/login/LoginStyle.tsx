import { Platform, StyleSheet } from "react-native";
import { APP_THEME_COLOR } from "../../constants/Colors";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#333",
  },
  childText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: "2%",
  },
  boxView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    width: "96%",
    padding: "2%",
    margin: "2%",
    borderRadius: 8,
    marginVertical: "4%",
  },
  registerView: {
    backgroundColor: "white",
    width: "100%",
    padding: Platform.OS == "ios" ? "6%" : "4%",
    textAlignVertical: "center",
  },
  dHAText: {
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
  rNText: {
    textAlign: "center",
    color: APP_THEME_COLOR,
    fontWeight: "bold",
    fontSize: 15,
  },
  txView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d6d4d4",
    borderRadius: 8,
    marginVertical: "2%",
    paddingHorizontal: "2%",
    padding: Platform.OS == "ios" ? "2%" : "0%",
  },
  leftIcon: {
    color: APP_THEME_COLOR,
    alignSelf: "center",
  },
  txtInput: {},
  forgotPwd: {
    margin: "2%",
    textAlign: "right",
    fontWeight: "500",
    fontSize: 14,
  },
  btn: {
    backgroundColor: "grey",
    padding: "2.5%",
    borderRadius: 8,
    marginVertical: "2%",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  btnDisable: {
    backgroundColor: "grey",
    padding: "2%",
    borderRadius: 8,
    marginVertical: "2%",
  },
  btnTextDisable: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  orView: {
    flexDirection: "row",
  },

  horizontalBorderLeft: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
    flex: 1,
  },
  orText: {
    flex: 0.2,
    marginHorizontal: "1%",
    textAlign: "center",
    fontWeight: "500",
    color: "grey",
  },
  horizontalBorderRight: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
    flex: 1,
  },
});
export default style;