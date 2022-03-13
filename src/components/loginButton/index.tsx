import React, { useCallback, useState } from 'react';
import {View, Text, TouchableHighlight, ButtonProps, StyleProp, ViewStyle , TextStyle, Image} from 'react-native';
import {Theme, styleFromTheme, logoStyle} from './styles';

type socialType = "facebook" |  "google"
interface LoginButtonProps extends ButtonProps{
  style?: ViewStyle,
  theme? : Theme,
  social?: socialType
  
}

//return require for a social logo, if social it's undefined return undefined else it has to return a require
const getLogoSource = (social : socialType | undefined) => {
  if(!social) return social;
  if(social === "facebook"){
    return require("assets/facebook-logo.png");
  }else if(social === "google"){
    return require("assets/google-logo.png");
  }
}
/* you can choose a diferent button style based on theme property*/
// the social prop only works with the social theme and it adds a logo to the button
const LoginButton = React.forwardRef<any, LoginButtonProps>((props, ref): React.ReactElement =>{
  const {title, style, theme, social,...buttonProps} = props;
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
  //if no social is selected this const is undefined
  const requireLogo = getLogoSource(social);
  return(
    <TouchableHighlight {...touchProps} ref={ref} >
      <>
      <Text style={isPress ? styles.pressedText : styles.text} >{title}</Text>
      {theme==="social" && requireLogo && <View style={logoStyle.container}>
      <Image style={logoStyle.image} source={requireLogo} /></View>}
      </>
    </TouchableHighlight>
  )
});
export default LoginButton;