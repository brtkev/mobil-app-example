import { StyleSheet, Dimensions, StatusBar } from "react-native";
import colors from "src/styles/colors";

const styles = StyleSheet.create({
  page: {
    justifyContent:"space-between"
  },
  greetingsText: {marginBottom : 8, fontSize: 16},
  totalBalanceText : {marginBottom : 16, fontSize: 14},
  balanceText : {fontSize: 34},
  currencyText : {marginLeft: 8, fontSize: 16},
  buttonLeftIconStyle: {width: 16, height: 16, marginRight: 16},
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
    width: Dimensions.get("window").width-32,
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
    paddingVertical: 16,
    

  },
  navBarContainer: {
    backgroundColor: colors.background[600], 
    height: 64, 
    width: Dimensions.get("window").width-10,
    marginHorizontal: 5,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#000",
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 10,
    display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center",
    marginBottom: 24,
    
  },
  navBarButton: {
    width: 56, height: 56, 
    borderWidth: 0
  },
  navBarIcon : {width: 24, height: 24, marginRight: 0},
  paperPlainButton: {
    width: 56, height: 56, borderRadius: 48, backgroundColor: colors.secondary[300], borderWidth: 0,
    position: "relative",
    bottom: 28, alignSelf: "flex-start",
    opacity: 1
  },
  bottomRadial : {
    width: Dimensions.get('window').width, height: "auto",aspectRatio: 2.8, resizeMode: "contain",
    position: "absolute", borderWidth: 2, borderColor: "transparent", //no idea why, but if you remove border width it stops looking the way it should
    bottom: 0, right: "-10%",
  }

});
export default styles;