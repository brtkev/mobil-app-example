import { StyleSheet } from "react-native";
import colors from "src/styles/colors";

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    backgroundColor: colors.background,
  },
  contentBox:{
    display:"flex", justifyContent: "flex-start", alignItems: "center", padding: 16,
    minHeight: "100%", 
  },
  logo : {
    width: 72, height:80, marginBottom: 40, marginTop: 50 
  },
});

export default styles;