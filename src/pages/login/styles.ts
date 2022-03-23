import { StyleSheet } from "react-native";
import colors from "src/styles/colors";

const styles = StyleSheet.create({
  contentBox:{ 
    display:"flex", justifyContent: "flex-start", alignItems: "center", padding: 16, flex:1, paddingTop: 0
  },
  scrollView:{
    flex: 1, width:"100%", display: "flex"
  },
  logo : {
    width: 72, height:80, marginBottom: 40, marginTop: 50, position: "absolute"
  },
  radialGradient: {
    width: 275, height: 275, 
  },
  title:{
    position: "absolute", bottom: 0, fontSize: 34
  },
  logoContainer: {
    display: "flex", justifyContent:"center", alignItems:"center",
    width: "100%", marginBottom: 11
  }
});

export default styles;