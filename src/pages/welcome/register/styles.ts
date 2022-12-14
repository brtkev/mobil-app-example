import { StyleSheet } from "react-native";
import colors from "src/styles/colors";

const styles = StyleSheet.create({
  main:{
    padding: 16
  },
  title:{
    fontSize: 31, marginBottom: 16, 
  },
  textP: {
    fontSize: 20, lineHeight: 24, color: colors.textSecondary, marginBottom: 32, 
  },
  smText:{
    fontSize: 16, lineHeight: 16, color: colors.textTerciary, textAlign: "left"
  },
  linkText: {
    fontSize: 16, lineHeight: 16, color:colors.secondary[200]
  }
})
export default styles;