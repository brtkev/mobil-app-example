import { StyleSheet } from "react-native";
import colors from "src/styles/colors";

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    backgroundColor: colors.background,
  },
  contentBox:{
    display:"flex", justifyContent: "center", alignItems: "center", borderColor: "#fff", borderWidth: 1,
    minHeight: "100%"
  },
  logo : {
    width: 72, height:80, marginBottom: 40
  },
});

export default styles;