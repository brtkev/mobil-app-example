import React, { useState, useMemo } from 'react';
import {View, TextInput, TextInputProps, Image, TouchableOpacity} from 'react-native';
import { FieldError } from 'react-hook-form';

import colors from 'src/styles/colors';
import TextApp from '../textApp';
import styles from './styles';

interface LoginInputProps extends TextInputProps{
  label? : string;
  password? : boolean;
  error? : FieldError;
  name? : string;
}

const LoginInput = React.forwardRef<any, LoginInputProps>((props, ref): React.ReactElement =>{
  const {label, password, style, error, secureTextEntry, name,...inputProps } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  

  let passwordComponent = undefined
  if(password){
    passwordComponent = <View  style={styles.iconContainer} >
      <TouchableOpacity onPress={() => setIsSecure((prev) => !prev)} 
      style={{marginRight: 15, width:styles.eyeIcon.width+15, height:styles.eyeIcon.height+15, display:'flex', justifyContent:'center', alignItems:'center'}} >
        <Image style={styles.eyeIcon} source={require('../../../assets/eye-icon.png')} />
      </TouchableOpacity>
    </View>;
  }
  return(
    <View style={[{width:"100%"}, style]}>
      <View style={ [isFocus ? styles.focus : styles.container,
        label && isFocus ? {paddingTop : 4, paddingBottom : 8} : {},
        error ? {borderBottomColor : colors.red[400]} : {} ]}  >

        {isFocus && props.label && <TextApp style={{color : (error ? colors.red[400] : colors.secondary[200]), fontSize:12, lineHeight:16}} >
          {props.label}</TextApp>}

        <TextInput onTouchStart={() => setIsFocus(true)} onEndEditing={()=>setIsFocus(false)}
        autoCapitalize="none" placeholderTextColor={"#fff"} style={{color:"#fff"}} ref={ref}
        secureTextEntry={isSecure} {...inputProps} />
        {passwordComponent}
      </View>
      <TextApp style={{color:colors.red[400]}}>{error && error.message}</TextApp>
    </View>
  );
})


export default LoginInput;