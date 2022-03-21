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


const styles = StyleSheet.create({
  main:{
    display:"flex", justifyContent: "space-between", padding: 16, flex:1, paddingBottom: 32
  },
  text: {
    letterSpacing: 1.25,
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
    props.navigation.push("UserInfo", props.route.params)
  }

  return(
    <PageWrapper>
      <NavTop onPress={() => props.navigation.goBack()} />
      <View style={styles.main}>
        <View>
        <TextApp style={[registerStyles.title, styles.text]} >Vamos a verificar tu telefono</TextApp>
        <TextApp style={[registerStyles.textP, styles.text,  {color: colors.textSecondary, marginBottom: 32}]} >Te hemos enviado un mensaje con el
          codigo de verificacion a tu numero
          telefonico.</TextApp>
        <LoginInput error={errors.code} label="ingresa el codigo" placeholder='ingresa el codigo' onChangeText={v => setValue("code", v)} {...register("code")} 
        keyboardType="decimal-pad" />
        {
          countDown > 0 ? 
          <TextApp style={[registerStyles.smText, {color:colors.textSecondary, textAlign: "center"}]} >
          El codigo expira en: {countDown} segundos</TextApp>:
          <>
            <TextApp style={[registerStyles.smText, {color: colors.textSecondary,textAlign: "center", marginBottom: 16}]} >
            El codigo ha expirado</TextApp>
            <TouchableOpacity onPress={() => setCountDown(60)} ><TextApp  style={[registerStyles.smText, styles.text, {color: colors.terciary[400], textAlign: 'center'}]} >
              VOLVER A ENVIAR</TextApp></TouchableOpacity>
          </>
        }
        
        </View>
        <View>
          <LoginButton  disabled={!watcher} theme='signin' onPress={handleSubmit(submitHandler)} title='CONTINUAR' />
        </View>
      </View>
    </PageWrapper>
  );
}

function getNewCode(){
  // get a new code from the provider
  console.log("new code")
}