import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  seperatorHorizontal: {
    width: "90%",
    height: 1,
    backgroundColor: colors.seperatorGrey
  },
  seperatorVertical: {
    width: 1,
    height: "90%",
    backgroundColor: colors.seperatorGrey
  },
  headerButtons: {
    height: 30,
    width: 30,
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
