import { StyleSheet } from "react-native";
import colors from 'src/styles/colors'

const styles = StyleSheet.create({
  buttonContainer : {
    paddingHorizontal: 18, paddingVertical: 16,
    backgroundColor: "transparent",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    opacity: 0.87,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    borderStyle: "solid"
    // padding: '16px 18px'
  },
  text:{
    fontWeight : '500',
    fontSize : 14,
    lineHeight: 16,
    letterSpacing: 1.25,
    color: colors.textPrimary,
    opacity: 0.87,
    textAlign: "center",
  }
  
});

export default styles;