import { Image, View, StyleSheet, TextInput, TextInputProps, TouchableOpacity, Keyboard, Alert } from "react-native";
import TextApp from "src/components/textApp";
import RegisterScreenWrapper from "../screenWrapper";
import {RegisterStackScreenProps} from 'src/components/types'
import React, { useRef, useState, useContext } from "react";
import { FieldError, useForm } from 'react-hook-form';
import colors from "src/styles/colors";
import RegisterContext from '../context';


const styles = StyleSheet.create({
  main: {
    paddingTop: 24, justifyContent: "space-between", paddingHorizontal: 16, flex: 1, alignItems: "center",
    paddingBottom: 50
  },
  image:{
    width: 150, height: "auto", aspectRatio: 1, marginBottom: 32
  },
  title:{
    fontSize: 24, marginBottom: 24, letterSpacing: 0.18, lineHeight: 24, paddingTop: 15,
  },
  smP: {
    fontSize: 12, lineHeight: 16, letterSpacing: 0.4, color: colors.textSecondary, marginBottom: 8
  },
  inputContainer: {
    flexDirection: "row", width: "100%", justifyContent: "space-evenly", marginBottom: 32
  },
  input:{
    borderWidth: 1, borderColor: colors.textPrimary, borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24,
    color: colors.textPrimary, textAlign: "center", fontSize: 20
  },
  bottomLink:{
    color:colors.terciary[400]
  }
})

interface PinInputProps extends TextInputProps{
  error? : boolean;
  name? : string;
  success? : boolean;
}


const PinInput = React.forwardRef<any, PinInputProps>(({error, success,...props}, ref): React.ReactElement =>{
  return(
    <TextInput defaultValue=''
      style={[styles.input, error ? {borderColor: colors.red[400]} : {},
      success ? {borderColor: colors.green} : {}]}
      keyboardType="number-pad" maxLength={1} ref={ref} {...props}
    />

  );
});

export default function Pin(props : RegisterStackScreenProps<"pin"> ){
  const {userData, updateData} = useContext(RegisterContext);
  const [pin, setPin] = useState('');
  const  [isError, setIsError] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const refs = useRef<Array<TextInput>>([]);
  const [isNotequal, setIsNotequal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [pinValue, setPinValue] = useState(['', '', '', '']);
  const onTextChangeHandler = (i : number) => {
    const callback : TextInputProps['onKeyPress'] = (e ) => {
      if(e.nativeEvent.key === 'Backspace') return;
      refs.current[i+1] && refs.current[i+1].focus();
      setPinValue(prev => {prev[i] = e.nativeEvent.key; return prev;});
    }
    return callback;
  }
  const onTextChangeHandlerLast = (i : number) => {
    const callback : TextInputProps['onKeyPress'] = (e ) => {
      if(e.nativeEvent.key === 'Backspace') return;
      Keyboard.dismiss();
      setPinValue(prev => {prev[i] = e.nativeEvent.key; return prev;});
    }
    return callback;
  }
    

  const assignRef = (el : TextInput) => refs.current.push(el); //assignsRef
  const clearInputs = () => {
    setPinValue(prev => prev.map(v => '')) //assigns '' to each item of the array
    refs.current.forEach(ref => ref && ref.clear()) //clears all inputs
  }
  const verifyPin = () => {
    const _pin = pinValue.join('');
    if(_pin.length < 4){ //validates that all inputs are full
      setIsError(true);
      return;
    }else setIsError(false);
    
    if(isRepeat){ //gets the current input value and compares it to the last one
      if(pin === _pin){
        updateData({pin: pin});
        setIsNotequal(false);
        setIsSuccess(true)
        Alert.alert("register data", JSON.stringify(userData));
      }else{
        setIsSuccess(false)
        setIsNotequal(true);
      }
    }else{ //saves the pin and prepares to get the confirmation
      setIsRepeat(true);
      setPin(_pin);
      clearInputs();
    }
  }

    

  
  return(
    <RegisterScreenWrapper backIcon="exit" backHandler={() => props.navigation.goBack()} style={styles.main} >
      <View style={{alignItems: "center"}}>
        <Image style={styles.image} source={require('assets/images/pin.png')} />
        <TextApp style={styles.title} >Crea Tu PIN Personal</TextApp>
        <View style={styles.inputContainer} >
          <PinInput  ref={assignRef} error={isNotequal || (isError && !pinValue[0])} success={isSuccess}
           onKeyPress={onTextChangeHandler(0)}  />
          <PinInput  ref={assignRef} error={isNotequal || (isError && !pinValue[1])} success={isSuccess}
          onKeyPress={onTextChangeHandler(1)} />
          <PinInput  ref={assignRef} error={isNotequal || (isError && !pinValue[2])} success={isSuccess}
          onKeyPress={onTextChangeHandler(2)}/>
          <PinInput  ref={assignRef} error={isNotequal || (isError && !pinValue[3])} success={isSuccess}
          onKeyPress={onTextChangeHandlerLast(3)} />
        </View>
        {isRepeat && <TextApp style={styles.smP} >Repite tu codigo PIN</TextApp>}
        {isNotequal && <TextApp style={[styles.smP, {color:colors.red[400]}]}>El codigo PIN no coincide</TextApp>}

      </View>
      {!isRepeat && <TouchableOpacity onPress={() => {verifyPin()}} >
        <TextApp style={styles.bottomLink}>REPETIR PROCESO</TextApp>
      </TouchableOpacity>}
      {isRepeat && <TouchableOpacity onPress={() => {verifyPin()}} >
        <TextApp style={styles.bottomLink}>CONTINUAR</TextApp>
      </TouchableOpacity>}
    </RegisterScreenWrapper>
      
  )
}