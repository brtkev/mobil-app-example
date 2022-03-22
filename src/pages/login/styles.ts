import { StyleSheet } from "react-native";
import colors from "src/styles/colors";

const styles = StyleSheet.create({
  contentBox:{ 
    display:"flex", justifyContent: "flex-start", alignItems: "center", padding: 16, flex:1
  },
  scrollView:{
    flex: 1, width:"100%", display: "flex"
  },
  logo : {
    width: 72, height:80, marginBottom: 40, marginTop: 50,  
  },
});

export default styles;