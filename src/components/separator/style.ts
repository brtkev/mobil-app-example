import {StyleSheet } from 'react-native'
import colors from 'src/styles/colors';


const styles = StyleSheet.create({
  container:{
    width: "100%",
    display:"flex", flexDirection: "row",
    alignItems:"center",
    marginVertical: 4,
    
  },
  bar:{
    backgroundColor: colors.textPrimary,
    // position: "relative",
    flex: 1,
    height: 2,
  },
  text:{
    marginHorizontal: 4,
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '700',
    
  }
});


export default styles;

