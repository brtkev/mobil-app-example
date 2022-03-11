import { StyleSheet } from "react-native";
import colors from 'src/styles/colors'

export const styles = StyleSheet.create({
  buttonContainer : {
    paddingHorizontal: 18, paddingVertical: 16,
    backgroundColor: "transparent",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    opacity: 0.87,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    // padding: '16px 18px'
  },
  buttonPressed: {
    paddingHorizontal: 18, paddingVertical: 16,
    backgroundColor: "transparent",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    opacity: 0.87,
    borderColor: colors.terciary[400],
    borderWidth: 1,
    borderStyle: "solid",
  },
  text:{
    fontWeight : '500',
    fontSize : 14,
    lineHeight: 16,
    letterSpacing: 1.25,
    color: colors.textPrimary,
    opacity: 0.87,
    textAlign: "center",
  },
  pressedText: {
    fontWeight : '500',
    fontSize : 14,
    lineHeight: 16,
    letterSpacing: 1.25,
    color: colors.terciary[400],
    opacity: 0.87,
    textAlign: "center",
  }  
});

export const redStyles = StyleSheet.create({
  buttonContainer : Object.assign({}, styles.buttonContainer,{
    backgroundColor: colors.primary[400],
    borderWidth: 0
  }),
  buttonPressed: Object.assign({}, styles.buttonPressed,{
    backgroundColor: colors.primary[300],
    borderWidth: 0
  }),
  text: styles.text,
  pressedText: Object.assign({}, styles.pressedText,{
    color: styles.text.color
  }),
})
