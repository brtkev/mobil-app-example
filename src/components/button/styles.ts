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
    alignItems: "center", justifyContent: "center",
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


export const logoStyle = StyleSheet.create({
  container : {
    width: "auto", height: "auto", display: "flex",
    flexDirection: "row",
  },
  image : {
    width: 24, height: 24, marginRight: 8,
  }
})


