import {Button, Text, TouchableOpacity, ButtonProps, StyleProp, ViewStyle ,StyleSheet} from 'react-native';
import styles from './styles';

interface LoginButtonProps extends ButtonProps{
  style? : ViewStyle
}


const LoginButton = ({title, onPress, style} : LoginButtonProps) => {
  return(
    <TouchableOpacity onPress={onPress} style={Object.assign({}, styles.buttonContainer, style)} >
      <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  )
}
export default LoginButton;