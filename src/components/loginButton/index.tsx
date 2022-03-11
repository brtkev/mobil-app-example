import { useCallback, useState } from 'react';
import {Button, Text, TouchableHighlight, ButtonProps, StyleProp, ViewStyle , TextStyle} from 'react-native';
import {styles, redStyles} from './styles';

interface LoginButtonProps extends ButtonProps{
  style?: ViewStyle,
  theme? : "default" | "red",
  
}

const styleSelector = ( theme : "default" | "red" | undefined) => {
  if(theme === "default"){
    return styles
  }else if(theme === "red"){
    return redStyles;
  }
  return styles;
}

const LoginButton = ({title, onPress, style, theme} : LoginButtonProps) => {
  const styles = styleSelector(theme);
  const [isPress, setIsPress] = useState(false);
  const buttonContainer = useCallback(() => Object.assign({}, styles.buttonContainer, style), [styles.buttonContainer, style])
  const buttonPressed = useCallback(() => Object.assign({}, styles.buttonPressed, style), [styles.buttonContainer, style])
  console.log(buttonPressed())
  const touchProps = {
    activeOpacity: 1,
    underlayColor: buttonPressed().backgroundColor, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? buttonPressed() : buttonContainer(), // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress,
  };
  return(
    <TouchableHighlight {...touchProps} >
      <Text style={isPress ? styles.pressedText : styles.text} >{title}</Text>
    </TouchableHighlight>
  )
}
export default LoginButton;