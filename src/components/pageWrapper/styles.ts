import { StyleSheet, Dimensions, StatusBar } from "react-native";
import colors from "src/styles/colors";


const styles = StyleSheet.create({
  main:{
    minHeight: Dimensions.get("window").height - (StatusBar.currentHeight || 0),
    backgroundColor: colors.background[800], flex: 1,
    // borderColor: "white", borderWidth: 2
  },
  scrollView:{
    flex : 1
  },
});

export default styles;