import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  main:{
    display:"flex", alignItems: "flex-start", justifyContent: "center", paddingTop: StatusBar.currentHeight
  },
  icon:{
    width: 24, height: 24,
  },
  touchable:{
    padding: 16
  }
})