import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  main:{
    display:"flex", flexDirection: "row",
    alignItems: "center", justifyContent: "center", 
    position: "relative",
    marginTop: StatusBar.currentHeight,
    height: 56


  },
  icon:{
    width: 24, height: 24,
  },
  touchable:{
  	position: "absolute", left: 0, padding: 16
  },
  title: {
  	fontSize: 16
  }
})