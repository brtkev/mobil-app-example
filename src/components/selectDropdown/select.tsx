import { View, TouchableOpacity, TouchableOpacityProps, Image, StyleSheet, TouchableHighlight } from "react-native"
import colors from "src/styles/colors";
import TextApp from "../textApp";

const styles = StyleSheet.create({
  container:{
    backgroundColor : colors.inputs,
    padding: 16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    width: '100%',
  },
  optionContainer: {
    backgroundColor : colors.inputs,
    padding: 8,
    width: '100%',
  },
  icon:{
    height: 20,
    width: 20,
  },
  iconContainer: {
    position:"absolute", width: "auto", aspectRatio: 1,
    top: 0, right: 0, bottom: 0,
    display: "flex", alignItems: "center", justifyContent: "center",
  }
});

interface Props extends TouchableOpacityProps {
  placeholder? : string;
  option? : boolean;
  selected? : boolean;
  rightIcon? : any; //image objects must be any
  open? : boolean;
}

const Select = ({ style, placeholder, option, rightIcon, selected, open,...TouchableProps } : Props) => {
  if(option)return(
    <TouchableHighlight style={[styles.optionContainer, style]} {...TouchableProps}
      underlayColor={colors.secondary[300]}
    >
      <View style={ [{display:"flex", flexDirection:"row", borderRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16}]} >
        {rightIcon && <Image style={{height: 25, width: "auto", aspectRatio: 1, marginRight: 16, borderRadius: 4}} source={rightIcon} />}
        <TextApp style={{color:colors.textPrimary, fontSize: 16}}>{placeholder}</TextApp>
      </View>
    </TouchableHighlight>
  )
  return(
    <TouchableHighlight style={[styles.container, style]} {...TouchableProps}
      underlayColor={colors.secondary[300]}
    >
      <View style={ {display:"flex", flexDirection:"row", }} >
        {rightIcon && <Image style={{height: 25, width: "auto", aspectRatio: 1, marginRight: 16, borderRadius: 4}} source={rightIcon} />}
        <TextApp style={{color: selected ? colors.textPrimary : colors.textTerciary}}>{placeholder}</TextApp>
        <View style={styles.iconContainer}>
          {<Image style={styles.icon} 
          source={open ? require('assets/icons/up-pointer.png') : require('assets/icons/down-pointer.png')} />}
        </View>
      </View>
    </TouchableHighlight>
  )
  
}; export default Select;