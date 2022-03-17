import { View, TouchableOpacity, TouchableOpacityProps, Image, StyleSheet, TouchableHighlight } from "react-native"
import colors from "src/styles/colors";
import TextApp from "../textApp";
import styles from './styles';

const _styles = StyleSheet.create({
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
}

const Select = (props : Props) => {
  const { style, placeholder, option, rightIcon, selected, ...TouchableProps } = props;
  if(option)return(
    <TouchableHighlight style={[{width:"100%"}, style, {borderRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16}]} {...TouchableProps}
      underlayColor={colors.secondary[300]}
    >
      <View style={ [styles.container, {display:"flex", flexDirection:"row", borderRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16}]} >
        {rightIcon && <Image style={{height: 25, width: "auto", aspectRatio: 1, marginRight: 16, borderRadius: 4}} source={rightIcon} />}
        <TextApp style={{color:colors.textPrimary, fontSize: 16}}>{placeholder}</TextApp>
        <View style={_styles.iconContainer}>
          <Image style={_styles.icon} source={require('assets/icons/right-pointer.png')} />
        </View>
      </View>
    </TouchableHighlight>
  )
  return(
    <TouchableHighlight style={[{width:"100%"}, style, {borderTopLeftRadius: 4, borderTopRightRadius: 4}]} {...TouchableProps}
      underlayColor={colors.secondary[300]}
    >
      <View style={ [styles.container, {display:"flex", flexDirection:"row", }]} >
        {rightIcon && <Image style={{height: 25, width: "auto", aspectRatio: 1, marginRight: 16, borderRadius: 4}} source={rightIcon} />}
        <TextApp style={{color: selected ? colors.textPrimary : colors.textTerciary}}>{placeholder}</TextApp>
        <View style={_styles.iconContainer}>
          <Image style={_styles.icon} source={require('assets/icons/down-pointer.png')} />
        </View>
      </View>
    </TouchableHighlight>
  )
  
}; export default Select;