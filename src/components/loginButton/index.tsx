import React, { useCallback, useState } from 'react';
import {Button, Text, TouchableHighlight, ButtonProps, StyleProp, ViewStyle , TextStyle} from 'react-native';
import {Theme, styleFromTheme} from './styles';

interface LoginButtonProps extends ButtonProps{
  style?: ViewStyle,
  theme? : Theme,
  
}


/* you can choose a diferent button style based on theme property*/
const LoginButton = React.forwardRef<any, LoginButtonProps>((props, ref): React.ReactElement =>{
// const LoginButton = ({title, style, theme, ...buttonProps} : LoginButtonProps) => {
  const {title, style, theme, ...buttonProps} = props;
  const styles = styleFromTheme(theme);
  const [isPress, setIsPress] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: styles.buttonPressed.backgroundColor, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: [isPress ? styles.buttonPressed : styles.buttonContainer, style], // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    ...buttonProps
  };
  return(
    <TouchableHighlight {...touchProps} ref={ref} >
      <Text style={isPress ? styles.pressedText : styles.text} >{title}</Text>
    </TouchableHighlight>
  )
});
export default LoginButton;