import { useState, useMemo } from 'react';
import {View, TextInput, TextInputProps, Image} from 'react-native';
import colors from 'src/styles/colors';
import TextApp from '../textApp';
import styles from './styles';

interface LoginInputProps extends TextInputProps{
  label? : string;
  password? : boolean;
}

const LoginInput = (props : LoginInputProps) => {
  const {label, password, style, ...inputProps } = props;
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
    <View style={ Object.assign({}, isFocus ? styles.focus : styles.container, style)}  >
      {isFocus && props.label ? <TextApp style={{color : colors.secondary[200], fontSize:12, lineHeight:16}} >{props.label}</TextApp> : null}
      <TextInput onTouchStart={() => setIsFocus(true)} onEndEditing={()=>setIsFocus(false)}
       placeholderTextColor={"#fff"} style={{color:"#fff"}} 
       {...inputProps} />
      {passwordComponent}
    </View>
  );
};

export default LoginInput;