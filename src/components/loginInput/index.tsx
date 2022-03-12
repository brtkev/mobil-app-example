import React, { useState, useMemo } from 'react';
import {View, TextInput, TextInputProps, Image} from 'react-native';
import { FieldError,  UseFormRegisterReturn } from 'react-hook-form';

import colors from 'src/styles/colors';
import TextApp from '../textApp';
import styles from './styles';

interface LoginInputProps extends TextInputProps{
  label? : string;
  password? : boolean;
  error? : FieldError;
}

const LoginInput = React.forwardRef<any, LoginInputProps>((props, ref): React.ReactElement =>{
  const {label, password, style, error,...inputProps } = props;
  const [isFocus, setIsFocus] = useState(false);
  

  let passwordComponent = undefined
  if(password){
    passwordComponent = <View style={styles.iconContainer} >
      <Image style={styles.eyeIcon} source={require('../../../assets/eye-icon.png')} />
    </View>;
  }
  return(
    <>
      <View style={ [isFocus ? styles.focus : styles.container, style,  
        { borderColor: error ? '#fc6d47' : '#c0cbd3' },
        label && isFocus ? {paddingTop : 4, paddingBottom : 8} : {}]}  >
        {isFocus && props.label && <TextApp style={{color : colors.secondary[200], fontSize:12, lineHeight:16}} >{props.label}</TextApp>}
        <TextInput onTouchStart={() => setIsFocus(true)} onEndEditing={()=>setIsFocus(false)}
        autoCapitalize="none" placeholderTextColor={"#fff"} style={{color:"#fff"}} ref={ref}
        {...inputProps} />
        {passwordComponent}
      </View>
      <TextApp >{error && error.message}</TextApp>
    </>
  );
})

const LoginInput2 = (props : LoginInputProps) => {
  const {label, password, style, error, ...inputProps } = props;
  const [isFocus, setIsFocus] = useState(false);
  if(label){
    styles.focus = useMemo(() => Object.assign({}, styles.focus, {paddingTop : 4, paddingBottom : 8}), [label]);
  }
  if(isFocus){ 
    inputProps.placeholder = '';
  }

  let passwordComponent = undefined
  if(password){
    passwordComponent = <View style={styles.iconContainer} >
      <Image style={styles.eyeIcon} source={require('../../../assets/eye-icon.png')} />
    </View>;
  }
  return(
    <>
      <View style={ [isFocus ? styles.focus : styles.container, style,  { borderColor: error ? '#fc6d47' : '#c0cbd3' }]}  >
        {isFocus && props.label && <TextApp style={{color : colors.secondary[200], fontSize:12, lineHeight:16}} >{props.label}</TextApp>}
        <TextInput onTouchStart={() => setIsFocus(true)} onEndEditing={()=>setIsFocus(false)}
        autoCapitalize="none" placeholderTextColor={"#fff"} style={{color:"#fff"}} 
        {...inputProps} />
        {passwordComponent}
      </View>
      <TextApp >{error && error.message}</TextApp>
    </>
  );
};

export default LoginInput;