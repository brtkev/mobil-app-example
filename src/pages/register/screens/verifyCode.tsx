import { StyleSheet, TouchableOpacity, View } from 'react-native';
import NavTop from 'src/components/navTop';
import PageWrapper from 'src/components/pageWrapper';
import TextApp from 'src/components/textApp'
import registerStyles from '../styles'

import {RegisterStackScreenProps} from 'src/components/types'
import colors from 'src/styles/colors';
import LoginInput from 'src/components/loginInput';
import LoginButton from 'src/components/loginButton';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { verifyCodeSchema } from 'src/components/formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import RegisterScreenWrapper from '../screenWrapper';


const styles = StyleSheet.create({
  main:{
    display:"flex", justifyContent: "space-between", padding: 16, flex:1, paddingBottom: 32
  },
  title:{
    fontSize: 24, marginBottom: 8, letterSpacing: 0.18, lineHeight: 24, paddingTop: 15
  },
  p: {
    fontSize: 16, lineHeight: 25, letterSpacing: 0.5, marginBottom: 32, color: colors.textSecondary
  },
  p2: {
    fontSize: 14, lineHeight: 20, letterSpacing: 0.25, color: colors.textSecondary, textAlign: 'center',
    marginBottom: 16
  }
});

type formInput = {
  "code" : string;
}

export default function VerifyCode(props : RegisterStackScreenProps<"VerifyCode">){
  const [countDown, setCountDown] = useState(60);
  const { setValue, register, watch, handleSubmit, formState : {errors}} = useForm<formInput>({resolver: yupResolver(verifyCodeSchema)});
  const watcher = watch("code")
  useEffect(()=> {
    if(countDown > 0){
      const timer = setTimeout(() => setCountDown(prev => prev-1), 1000)
      return () => clearTimeout(timer);
    }
    
  }, [countDown])

  const submitHandler = (data : formInput) => {
    //verify the code with the provider
    console.log(data);
    props.navigation.push(props.route.params?.nextScreen || "UserInfo")
  }

  return(
  <RegisterScreenWrapper style={styles.main} >
    <View>
    <TextApp style={[styles.title]} >Te enviamos un código</TextApp>
    <TextApp style={[styles.p]} >Te hemos enviado un mensaje con el
      codigo de verificacion a tu numero
      telefonico.</TextApp>
    <LoginInput style={{marginBottom: 32}} error={errors.code} label="ingresa el codigo" placeholder='ingresa el codigo' onChangeText={v => setValue("code", v)} {...register("code")} 
    keyboardType="decimal-pad" />
    {
      countDown > 0 ? 
      <TextApp style={[styles.p2]} >
      El codigo expira en: {countDown} segundos</TextApp>:
      <>
        <TextApp style={styles.p2} >
        El codigo ha expirado</TextApp>
        <TouchableOpacity onPress={() => setCountDown(60)} ><TextApp  style={[styles.p2, {color: colors.terciary[400]}]} >
          VOLVER A ENVIAR</TextApp></TouchableOpacity>
      </>
    }
    
    </View>
    <View>
      <LoginButton  disabled={!watcher} theme='signin' onPress={handleSubmit(submitHandler)} title='CONTINUAR' />
    </View>
  </RegisterScreenWrapper>
  );
}
