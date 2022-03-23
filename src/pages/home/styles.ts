import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container : {
    backgroundColor: colors.background[800], minHeight: '100%', display: "flex", 
  },
  welcomeImage : {
    width: Dimensions.get('window').width, height:'auto',aspectRatio: 1, 
  },
  contentBox : {
    paddingHorizontal: 16, paddingBottom: 24, display: "flex", flex: 1,
    alignItems: "center", justifyContent : "space-between", 
  },
  textBox : {
    display: "flex", alignItems: "center", justifyContent : "center",
  },
  whitepayText: {
    color: colors.secondary[300], fontWeight: "500", lineHeight: 24, fontSize: 20, marginTop : 8
  },
  titleText: {
    color: colors.textPrimary, lineHeight: 24, fontSize: 20, letterSpacing: 0.18,
    textAlign: "center", marginTop : 12
  },
  pText: {
    color: colors.textSecondary, lineHeight: 24, fontSize: 16, letterSpacing: 0.5,
    textAlign: "center", marginVertical : 24
  },
  buttonsContainer: {
    display:'flex',flexDirection:"row", justifyContent: 'center', 
  },
  redButton: {
    backgroundColor: colors.primary[400],
    borderWidth: 0
  }

});
export default styles;