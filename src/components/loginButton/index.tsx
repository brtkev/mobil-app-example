import React, { useCallback, useState } from 'react';
import {View, Text, TouchableHighlight, ButtonProps, StyleProp, ViewStyle , Animated, Image} from 'react-native';
import {Theme, styleFromTheme, logoStyle, disabled, styles as _styles, spin, spinnerLoop} from './styles';

type socialType = "facebook" |  "google"
interface LoginButtonProps extends ButtonProps{
  style?: ViewStyle,
  theme? : Theme,
  social?: socialType,
  spinner?: boolean
  
}

//return require for a social logo, if social it's undefined return undefined else it has to return a require
const getLogoSource = (social : socialType | undefined) => {
  if(!social) return social;
  if(social === "facebook"){
    return require("assets/logos/facebook-logo.png");
  }else if(social === "google"){
    return require("assets/logos/google-logo.png");
  }
}

//Landing / login button component with diferent styles
/* you can choose a diferent button style based on theme property*/
// the social prop only works with the social theme and it adds a logo to the button
const LoginButton = React.forwardRef<any, LoginButtonProps>((props, ref): React.ReactElement =>{
  const {title, style, theme, social, spinner, ...buttonProps} = props;
  const styles = styleFromTheme(theme); //choose a style from a theme
  const [isPress, setIsPress] = useState(false); //state for pressed style

  const touchProps = {
    activeOpacity: 1,
    underlayColor: styles.buttonPressed.backgroundColor, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: [isPress || spinner ? styles.buttonPressed : styles.buttonContainer, style, 
      props.disabled && !spinner ? disabled.container : {}], // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    ...buttonProps
  };

  //spinner restart
  if(spinner){
    spinnerLoop.reset(); spinnerLoop.start();
  }
  //if no social is selected this const is undefined
  const requireLogo = getLogoSource(social);
  return(
    <TouchableHighlight {...touchProps} ref={ref} >
      {spinner ?
      <Animated.Image style={{transform: [{rotate: spin}], width: 24, height: 24}} 
      source={require('assets/icons/spinner.png')} /> :
      <>
      <Text style={[isPress ? styles.pressedText : styles.text, props.disabled ? disabled.text: {}]} >{title}</Text>
      {theme==="social" && requireLogo && <View style={logoStyle.container}>
      <Image style={logoStyle.image} source={requireLogo} /></View>}
      </>
      }
    </TouchableHighlight>
  )
});
export default LoginButton;