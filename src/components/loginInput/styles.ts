import { StyleSheet } from 'react-native';
import colors from 'src/styles/colors';

const styles = StyleSheet.create({
  container:{
    backgroundColor : colors.inputs,
    padding: 16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    width: '100%'
  },
  focus:{
    backgroundColor : colors.inputs,
    padding: 16, paddingTop: 16, paddingBottom: 16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    width: '100%',
    borderBottomWidth: 2, borderBottomColor: colors.secondary[200] 
  },
  iconContainer:{
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-end", top: 0, left: 0, right: 0, bottom: 0, 
  },
  eyeIcon: {
    width: 22,
    height: 15,
    marginRight: 22
  }
});
export default styles;
