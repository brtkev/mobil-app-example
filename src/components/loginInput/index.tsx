import React, { useState } from 'react';
import {View, TextInput, TextInputProps, StyleProp, TextStyle} from 'react-native';
import { FieldError } from 'react-hook-form';

import colors from 'src/styles/colors';
import TextApp from '../textApp';
import styles from './styles';
import useContinueRef from '../hooks/useContinueRef';
import EyeButton from './eyeButton';

interface LoginInputProps extends TextInputProps{
  label? : string;
  password? : boolean;
  error? : FieldError;
  name? : string;
  inputStyles? : StyleProp<TextStyle>
}

//TextInput for login
//takes an optional ref
//label adds a label to the input when editing
//password adds a password style to the text edited and adds an eye button 
//error comes from the errors of useForm
//name is used for the useForm input naming
const LoginInput = React.forwardRef<any, LoginInputProps>((props, ref): React.ReactElement =>{
  const {label, password, style, error, secureTextEntry, name ,
    inputStyles, ...inputProps } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [isSecure, setIsSecure] = useState(password);
  const inputRef  = useContinueRef<TextInput>(ref)
  return(
    <View style={[{width:"100%"}, style]}>
      <View style={ [isFocus ? styles.focus : styles.container,
        label && isFocus ? {paddingTop : 4, paddingBottom : 8} : {},
        error ? {borderBottomColor : colors.red[400]} : {} ]}
         onTouchEnd={() => inputRef?.current?.focus()} >

        {isFocus && props.label && <TextApp style={{color : (error ? colors.red[400] : colors.secondary[200]), fontSize:12, lineHeight:16}} >
          {props.label}</TextApp>}

        <TextInput onFocus={() => setIsFocus(true)} onEndEditing={()=>setIsFocus(false)}
        autoCapitalize="none" placeholderTextColor={colors.textTerciary} style={[{color:"#fff"}, inputStyles]} ref={inputRef}
        secureTextEntry={isSecure} {...inputProps}  />
        <EyeButton {...{password, onPress: () => setIsSecure((prev) => !prev)}} />
      </View>
      {error && <TextApp style={{color:colors.red[400]}}>{error.message}</TextApp>}
    </View>
  );
}); export default LoginInput;
