import { View, TouchableOpacity, TouchableOpacityProps } from "react-native"
import colors from "src/styles/colors";
import TextApp from "../textApp";
import styles from './styles';

interface Props extends TouchableOpacityProps {
  placeholder? : string;

}

const Select = (props : Props) => {
  const { style, placeholder,...TouchableProps } = props;
  return(
    <TouchableOpacity style={[{width:"100%"}, style]} {...TouchableProps}>
      <View style={ [styles.container]} >
        <TextApp style={{color:colors.textTerciary}}>{placeholder}</TextApp>
      </View>
    </TouchableOpacity>
  )
  
}; export default Select;