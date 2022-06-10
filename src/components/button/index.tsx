import React, { useState } from 'react';
import {View, Text, TouchableHighlight, ButtonProps, ViewStyle, ImageStyle, TextStyle , Animated, Image} from 'react-native';
import {Theme, styleFromTheme, logoStyle, disabled, styles, spin, spinnerLoop} from './styles';



export interface buttonProps extends ButtonProps{
  style?: ViewStyle | ViewStyle[],
  stylePress?: ViewStyle,
  textStyle?: TextStyle,
  textStylePress?: TextStyle,
  leftIconStyle?: ImageStyle,
  spinner?: boolean,
  leftIcon?: any, // icon is any, but you should require() the icon you desire
  
}

//Base Button Component
const Button = React.forwardRef<any, buttonProps>((
  {
    style, 
    stylePress,
    spinner, 
    leftIcon,
    textStyle,
    textStylePress,
    leftIconStyle,
    ...buttonProps}
  , ref): React.ReactElement =>{
  const [isPress, setIsPress] = useState(false); //state for pressed style
  const toggleIsPress = () => setIsPress(prev => !prev);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: stylePress?.backgroundColor || styles.buttonPressed.backgroundColor, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: [isPress || spinner ? styles.buttonPressed : styles.buttonContainer, style, 
      buttonProps.disabled && !spinner ? disabled.container : {},], // <-- but you can still apply other style changes
    onHideUnderlay: toggleIsPress,
    onShowUnderlay: toggleIsPress,
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
      <View style={[logoStyle.container, buttonProps.title === "" && {justifyContent: "center"}]}>
        {leftIcon && <Image style={[logoStyle.image, leftIconStyle]} source={leftIcon} />}
        <Text style={[isPress ? styles.pressedText : styles.text, textStyle ,isPress ? {} : textStylePress, buttonProps.disabled ? disabled.text: {}]} >
          {buttonProps.title}
        </Text>
      </View>
      }
    </TouchableHighlight>
  )
});
export default Button;
