import { useState } from "react";
import { View, Alert } from "react-native"; 

import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from 'src/components/formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginInput from 'src/components/loginInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextApp from 'src/components/textApp'
import colors from "src/styles/colors";
import LoginButton from "src/components/loginButton";



type loginInput = {
  email: string,
  password: string,
};



const LoginForm = () =>  {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<loginInput>({resolver : yupResolver(loginSchema)});
  const [spinnerFlag, setSpinnerFlag] = useState(false);

  //onSubmit
  const submitHandler : SubmitHandler<loginInput> = (data, ev) => {
    Alert.alert("data", JSON.stringify(data));
    setSpinnerFlag(true);
    //after fetching the results from the db if the data fails the spinner should stop
    setTimeout(() => setSpinnerFlag(false), 2000);
   }
  return(
    <>
      <LoginInput label='Correo Electrónico' placeholder='Correo Electrónico' 
      style={{marginBottom: 24}} {...register("email")} error={errors.email}
      onChangeText={(v : string) => setValue("email", v)} />
      <LoginInput label='Contraseña' placeholder='Contraseña' {...register("password")} 
      style={{marginBottom: 32}} error={errors.password}
      onChangeText={(v : string) => setValue("password", v)} password/>
      <View style={{width:"100%", display:"flex", alignItems:"flex-end", marginBottom:24}} >
        <TextApp style={{color:colors.secondary[200]}} >¿Olvidaste tu contraseña?</TextApp>
      </View>
      <LoginButton style={{width:"100%"}} theme="signin" title="INGRESAR" onPress={handleSubmit(submitHandler)} />
    </>
  )
}
export default LoginForm;