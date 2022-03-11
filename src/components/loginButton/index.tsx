import { useCallback, useState } from 'react';
import {Button, Text, TouchableHighlight, ButtonProps, StyleProp, ViewStyle , TextStyle} from 'react-native';
import {Theme, styleFromTheme} from './styles';

interface LoginButtonProps extends ButtonProps{
  style?: ViewStyle,
  theme? : Theme,
  
}


/* you can choose a diferent button style based on theme property*/
const LoginButton = ({title, onPress, style, theme} : LoginButtonProps) => {
  const styles = styleFromTheme(theme);
  const [isPress, setIsPress] = useState(false);

  // memo callbacks, i don't know if assign() is expensive in resources but I do know that the objects it is
  //assigning are not small, so I prefer to have them memorized
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