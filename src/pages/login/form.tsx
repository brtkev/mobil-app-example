import { useState, useRef } from "react";
import { View, Alert } from "react-native"; 

import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from 'src/components/formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginInput from 'src/components/loginInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextApp from 'src/components/textApp'
import colors from "src/styles/colors";
import LoginButton from "src/components/loginButton";
import Form from "src/components/form";

type loginInput = {
  email: string,
  password: string,
};





const LoginForm = () =>  {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<loginInput>({resolver : yupResolver(loginSchema)});
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  const refs = useRef(Array(3));
  //onSubmit
  const submitHandler : SubmitHandler<loginInput> = (data, ev) => {
    Alert.alert("data", JSON.stringify(data));
    setSpinnerFlag(true);
    //after fetching the results from the db if the data fails the spinner should stop
    setTimeout(() => setSpinnerFlag(false), 2000);
   }
  const sumbitCallback = handleSubmit(submitHandler);
  // return(
  //   <>
  //     <LoginInput label='Correo Electrónico' placeholder='Correo Electrónico' 
  //     style={{marginBottom: 24}} {...register("email")} error={errors.email} ref={(e) => refs.current[0] = e}
  //     onChangeText={(v : string) => setValue("email", v)} onSubmitEditing={() => refs.current[1].focus()} />

  //     <LoginInput label='Contraseña' placeholder='Contraseña' {...register("password")} secureTextEntry
  //     style={{marginBottom: 32}} error={errors.password} onChangeText={(v : string) => setValue("password", v)}
  //      ref={(e) => refs.current[1] = e} onSubmitEditing={sumbitCallback} password/>

  //     <View style={{width:"100%", display:"flex", alignItems:"flex-end", marginBottom:24}} >
  //       <TextApp style={{color:colors.secondary[200]}} >¿Olvidaste tu contraseña?</TextApp>
  //     </View>
  //     <LoginButton ref={e => refs.current[2]} style={{width:"100%"}} theme="signin"
  //      title="INGRESAR" onPress={sumbitCallback} />
  //   </>
  // )
  return(
    <Form {...{register, setValue, errors}} >
      <LoginInput  label='Correo Electrónico' placeholder='Correo Electrónico' name="email" style={{marginBottom: 24}} />
      <LoginInput label='Contraseña' placeholder='Contraseña' name="password" style={{marginBottom: 32}} />
      <View style={{width:"100%", display:"flex", alignItems:"flex-end", marginBottom:24}} >
        <TextApp style={{color:colors.secondary[200]}} >¿Olvidaste tu contraseña?</TextApp>
      </View>
      <LoginButton style={{width:"100%"}} theme="signin" title="INGRESAR" onPress={sumbitCallback} />

    </Form>
  )
}
export default LoginForm;