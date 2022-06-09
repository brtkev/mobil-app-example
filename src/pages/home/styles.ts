import { StyleSheet, Dimensions, StatusBar } from "react-native";
import colors from "src/styles/colors";

const styles = StyleSheet.create({
  
  logoContainer: {
    display: "flex", justifyContent:"center", alignItems:"center", position: "relative", width: "100%"
  },
  radial:{
    width: Dimensions.get('window').width, height:'auto',aspectRatio: 1, position: "absolute", resizeMode: "contain"
  },
  logo:{
    width:Dimensions.get('window').width/3, resizeMode: "contain"
  },
  balanceContainer:{
    backgroundColor: colors.background[500], width: Dimensions.get("window").width-32, height: 200, 
    marginHorizontal: 16, marginBottom: 40,
    paddingVertical: 32,
    display: "flex", alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 10
  },
  buttonContainer:{
    width: Dimensions.get("window").width-32, borderColor: "white", borderWidth: 2,
    marginHorizontal: 16,
    display: "flex", flexDirection: "row"
  },
  button:{
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 10,
    paddingHorizontal: 12,
    paddingVertical: 16

  }

});
export default styles;