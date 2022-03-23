import { Image, View, StyleSheet, TextInput, TextInputProps, TouchableOpacity, Keyboard, Alert } from "react-native";
import TextApp from "src/components/textApp";
import RegisterScreenWrapper from "../screenWrapper";
import {RegisterStackScreenProps} from 'src/components/types'
import React, { useRef, useState, useContext } from "react";
import { FieldError } from 'react-hook-form';
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
    fontSize: 12, lineHeight: 16, letterSpacing: 0.4, color: colors.textSecondary
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
  error? : FieldError;
  name? : string;
}

const PinInput = React.forwardRef<any, PinInputProps>(({onChangeText,...props}, ref): React.ReactElement =>{
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleKeyPress : TextInputProps["onKeyPress"] = (e) => {

    if(e.nativeEvent.key === "Backspace"){
      setInputValue('');
      
    }else{
      setInputValue(e.nativeEvent.key);
      onChangeText && onChangeText(e.nativeEvent.key);
    }
  
  }
  return(
    <TextInput onFocus={() => setIsFocus(true)} onEndEditing={()=>setIsFocus(false)} value={inputValue}
      style={styles.input} keyboardType="number-pad" onKeyPress={handleKeyPress} maxLength={1} ref={ref} {...props}
    />

  );
});

export default function Pin(props : RegisterStackScreenProps<"pin"> ){

  const {userData, updateData} = useContext(RegisterContext);
  const [pin, setPin] = useState(Array(4));
  const [pinRep, setPinRep] = useState(Array(4));

  const [isRepeat, setIsRepeat] = useState(false);
  const refs = useRef<Array<TextInput>>([]);
  const assignRef = (el : TextInput) => refs.current.push(el);
  const clearInputs = () => refs.current.forEach((el : TextInput) => el && el.clear())
  const onChangeTexthandler = (value : string, i : number) => {
    refs.current[i].focus();
    if(!isRepeat){
      setPin(prev => {prev[i-1] = value; return prev})
    }else{
      setPinRep(prev => {prev[i-1] = value; return prev})
    }
  }
  const verifyPin = () => {
    const newPin = pin.join('');
    const repeatedPin = pinRep.join('');
    if(newPin === repeatedPin){
      updateData({pin: newPin});

      Alert.alert("register data", JSON.stringify(userData));
    }
    
  }
  
  return(
    <RegisterScreenWrapper backIcon="exit" backHandler={() => props.navigation.goBack()} style={styles.main} >
      <View style={{alignItems: "center"}}>
        <Image style={styles.image} source={require('assets/images/pin.png')} />
        <TextApp style={styles.title} >Crea Tu PIN Personal</TextApp>
        <View style={styles.inputContainer} >
          <PinInput ref={assignRef} onChangeText={(v) => onChangeTexthandler(v, 1)}  />
          <PinInput ref={assignRef} onChangeText={(v) => onChangeTexthandler(v, 2)} />
          <PinInput ref={assignRef} onChangeText={(v) => onChangeTexthandler(v, 3)}/>
          <PinInput ref={assignRef} onChangeText={() => Keyboard.dismiss()} />
        </View>
        {isRepeat && <TextApp style={styles.smP} >Repite tu codigo PIN</TextApp>}

      </View>
      {!isRepeat && <TouchableOpacity onPress={() => {setIsRepeat(true);clearInputs()}} >
        <TextApp style={styles.bottomLink}>REPETIR PROCESO</TextApp>
      </TouchableOpacity>}
      {isRepeat && <TouchableOpacity onPress={() => {verifyPin();clearInputs()}} >
        <TextApp style={styles.bottomLink}>CONTINUAR</TextApp>
      </TouchableOpacity>}
    </RegisterScreenWrapper>
      
  )
}