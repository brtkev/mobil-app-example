import { StyleSheet, Animated, Easing } from "react-native";
import colors from 'src/styles/colors'

export type Theme = "default" | "red" | "signin" | "social";

export const disabled = StyleSheet.create({
  container: {
    backgroundColor : colors.background[400],
    borderColor : colors.background[400]
  },
  text:{
    color: colors.textPrimary
  }
});

const spinValue = new Animated.Value(0);

// First set up animation 
export const spinnerLoop =  Animated.loop(
  Animated.timing(
      spinValue,
    {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true  // To make use of native driver for performance
    }
  )
)

// Next, interpolate beginning and end values (in this case 0 and 1)
export const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})

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
  },
  spinner: {
    width: 24, height: 24, 
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
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
export const signin = StyleSheet.create({
  buttonContainer : {
    paddingHorizontal: 24, paddingVertical: 16,
    backgroundColor: colors.primary[400],
    borderRadius: 32,
    display: "flex",
    alignItems: "center",
    opacity: 0.87,
    borderColor: colors.primary[400],
    borderWidth: 1,
    borderStyle: "solid",
    shadowColor: "#000",
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5
  },
  buttonPressed: {
    paddingHorizontal: 24, paddingVertical: 16,
    backgroundColor: colors.primary[300],
    borderRadius: 32,
    display: "flex",
    alignItems: "center",
    opacity: 0.87,
    borderColor: colors.primary[300],
    borderWidth: 1,
    borderStyle: "solid",
    shadowColor: "#000",
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5
    },
  text: {
    color: colors.textPrimary,
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: 1.25
  },
  pressedText: {
    color: colors.textPrimary,
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: 1.25
  },
})

export const social = StyleSheet.create({
  buttonContainer : {
    paddingHorizontal: 18, paddingVertical: 16,
    backgroundColor: "transparent",
    borderRadius: 32,
    display: "flex",
    alignItems: "center",
    opacity: 0.87,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%"
  },
  buttonPressed: {
    paddingHorizontal: 18, paddingVertical: 16,
    backgroundColor: "transparent",
    borderRadius: 32,
    display: "flex",
    alignItems: "center",
    opacity: 0.87,
    borderColor: colors.terciary[400],
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%"
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
  },
});

export const logoStyle = StyleSheet.create({
  container : {
    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
    display:"flex", justifyContent: "center", alignItems: "flex-start"
  },
  image : {
    width: 24, height: 24, marginLeft:16
  }
})


export const styleFromTheme = ( theme : Theme | undefined) => {
  if(theme === "default"){
    return styles
  }else if(theme === "red"){
    return redStyles;
  }else if(theme === "signin"){
    return signin;
  }else if(theme === "social"){
    return social;
  }
  return styles;
}