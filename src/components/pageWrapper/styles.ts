import { StyleSheet } from "react-native";
import colors from "src/styles/colors";


const styles = StyleSheet.create({
  main:{
    minHeight: '100%',
    backgroundColor: colors.background,
  },
  scrollView:{
    flex: 1, width:"100%", display: "flex", borderWidth: 1, borderColor: "red"
  },
});

export default styles;