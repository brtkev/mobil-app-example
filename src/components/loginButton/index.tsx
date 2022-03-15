import React, { useState } from 'react';
import {View, Text, TouchableHighlight, ButtonProps, ViewStyle , Animated, Image} from 'react-native';
import {Theme, styleFromTheme, logoStyle, disabled, styles as _styles, spin, spinnerLoop} from './styles';

interface LoginButtonProps extends ButtonProps{
  style?: ViewStyle,
  theme? : Theme,
  spinner?: boolean,
  leftIcon?: any, // icon is any, but you should require() the icon you desire
  
}

//Landing / login button component with diferent styles
/* you can choose a diferent button style based on theme property*/
// the social prop only works with the social theme and it adds a logo to the button
const LoginButton = React.forwardRef<any, LoginButtonProps>((props, ref): React.ReactElement =>{
  const {title, style, theme, spinner, leftIcon, ...buttonProps} = props;
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
  return(
    <TouchableHighlight {...touchProps} ref={ref} >
      {spinner ?
      <Animated.Image style={{transform: [{rotate: spin}], width: 24, height: 24}} 
      source={require('assets/icons/spinner.png')} /> :
      <>
      {leftIcon && <View style={logoStyle.container}><Image style={logoStyle.image} source={leftIcon} /></View>}
      <Text style={[isPress ? styles.pressedText : styles.text, props.disabled ? disabled.text: {}]} >
        {title}
      </Text>
      </>
      }
    </TouchableHighlight>
  )
});
export default LoginButton;