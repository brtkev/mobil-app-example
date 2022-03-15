import { StyleSheet } from "react-native";
import colors from "src/styles/colors";


export default StyleSheet.create({
  main:{
    padding: 16, display: "flex", flex: 1, justifyContent : "space-between", borderWidth: 1,borderColor: "white"
  },
  bottomContainer:{
    position: "absolute", bottom: 0
  },
  title:{
    fontSize: 32, lineHeight: 32, marginBottom: 16, 
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
});