import { View, TouchableOpacity, TouchableOpacityProps, Image, StyleSheet } from "react-native"
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

}

const Select = (props : Props) => {
  const { style, placeholder,...TouchableProps } = props;
  return(
    <TouchableOpacity style={[{width:"100%"}, style]} {...TouchableProps}>
      <View style={ [styles.container]} >
        <TextApp style={{color:colors.textTerciary}}>{placeholder}</TextApp>
        <View style={_styles.iconContainer}>
          <Image style={_styles.icon} source={require('assets/icons/down-pointer.png')} />
        </View>
      </View>
    </TouchableOpacity>
  )
  
}; export default Select;